export const GRAPHQL_API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_DEV_GRAPHQL_API_URL}graphql/`
    : `${process.env.GRAPHQL_API_URL}`;

export const MEDIAFILE_API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_DEV_GRAPHQL_API_URL}media/`
    : `${process.env.GRAPHQL_API_URL}`;
