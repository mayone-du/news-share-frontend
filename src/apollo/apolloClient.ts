import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import merge from "deepmerge";
import isEqual from "lodash.isequal";
// import type { AppProps } from "next/dist/next-server/lib/router/router";
import { parseCookies } from "nookies";
import { cache } from "src/apollo/cache";
import { GRAPHQL_API_ENDPOINT } from "src/utils/API_ENDPOINTS";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink = createUploadLink({
  uri: GRAPHQL_API_ENDPOINT,
});

const authLink = setContext((operation, { headers }) => {
  const cookies = parseCookies();
  const accessToken = cookies.accessToken;

  // return the headers to the context so httpLink can read them
  return accessToken
    ? { headers: { ...headers, authorization: `JWT ${accessToken}` } }
    : { headers };
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: typeof window === "undefined" ? httpLink : authLink.concat(httpLink),
    cache: cache,
  });
};
export const initializeApollo = (initialState: any = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // ページにApollo Clientを使用したNext.jsのデータ取得メソッドがある場合、初期状態はここでハイドレーションされます。
  if (initialState) {
    // クライアント側のデータ取得中に読み込まれた既存のキャッシュを取得します。
    const existingCache = _apolloClient.extract();

    // 既存のキャッシュをgetStaticProps/getServerSidePropsから渡されたデータにマージします。
    const data = merge(initialState, existingCache, {
      // オブジェクトの平等性を利用して配列を結合する。
      arrayMerge: (destinationArray, sourceArray) => {
        return [
          ...sourceArray,
          ...destinationArray.filter((d) => {
            return sourceArray.every((s) => {
              return !isEqual(d, s);
            });
          }),
        ];
      },
    });

    // マージされたデータでキャッシュを復元する。
    _apolloClient.cache.restore(data);
  }

  // SSR時は新しいclientを作成
  if (typeof window === "undefined") return _apolloClient;
  // CSR時は同じクライアントを使い回す
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  // pageProps: AppProps["pageProps"],
  pageProps: any,
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};
