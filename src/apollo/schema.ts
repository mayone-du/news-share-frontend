import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type CategoryNode = Node & {
  __typename?: 'CategoryNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  categoryName: Scalars['String'];
  selectCategory: NewsNodeConnection;
};


export type CategoryNodeSelectCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  summary_Icontains?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_Icontains?: Maybe<Scalars['DateTime']>;
};

export type CategoryNodeConnection = {
  __typename?: 'CategoryNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CategoryNodeEdge>>;
};

/** A Relay edge containing a `CategoryNode` and its cursor. */
export type CategoryNodeEdge = {
  __typename?: 'CategoryNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CategoryNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateCategoryMutationInput = {
  categoryName: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCategoryMutationPayload = {
  __typename?: 'CreateCategoryMutationPayload';
  category?: Maybe<CategoryNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateNewsMutationInput = {
  selectCategoryId?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateNewsMutationPayload = {
  __typename?: 'CreateNewsMutationPayload';
  news?: Maybe<NewsNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTagMutationInput = {
  tagName: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTagMutationPayload = {
  __typename?: 'CreateTagMutationPayload';
  tag?: Maybe<TagNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserMutationInput = {
  username?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserMutationPayload = {
  __typename?: 'CreateUserMutationPayload';
  user?: Maybe<UserNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUserMutationPayload>;
  createCategory?: Maybe<CreateCategoryMutationPayload>;
  createTag?: Maybe<CreateTagMutationPayload>;
  createNews?: Maybe<CreateNewsMutationPayload>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  refreshToken?: Maybe<Refresh>;
  revokeToken?: Maybe<Revoke>;
};


export type MutationCreateUserArgs = {
  input: CreateUserMutationInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryMutationInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagMutationInput;
};


export type MutationCreateNewsArgs = {
  input: CreateNewsMutationInput;
};


export type MutationTokenAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationRevokeTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};

export type NewsNode = Node & {
  __typename?: 'NewsNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  selectCategory?: Maybe<CategoryNode>;
  url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  tags: TagNodeConnection;
};


export type NewsNodeTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  tagName?: Maybe<Scalars['String']>;
  tagName_Icontains?: Maybe<Scalars['String']>;
};

export type NewsNodeConnection = {
  __typename?: 'NewsNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NewsNodeEdge>>;
};

/** A Relay edge containing a `NewsNode` and its cursor. */
export type NewsNodeEdge = {
  __typename?: 'NewsNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<NewsNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserNode>;
  allUsers?: Maybe<UserNodeConnection>;
  category?: Maybe<CategoryNode>;
  allCategories?: Maybe<CategoryNodeConnection>;
  tag?: Maybe<TagNode>;
  allTags?: Maybe<TagNodeConnection>;
  news?: Maybe<NewsNode>;
  allNews?: Maybe<NewsNodeConnection>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_Icontains?: Maybe<Scalars['String']>;
  isStaff?: Maybe<Scalars['Boolean']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  categoryName_Icontains?: Maybe<Scalars['String']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryAllTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  tagName?: Maybe<Scalars['String']>;
  tagName_Icontains?: Maybe<Scalars['String']>;
};


export type QueryNewsArgs = {
  id: Scalars['ID'];
};


export type QueryAllNewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  summary_Icontains?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_Icontains?: Maybe<Scalars['DateTime']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked: Scalars['Int'];
};

export type TagNode = Node & {
  __typename?: 'TagNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  tagName: Scalars['String'];
  tags: NewsNodeConnection;
};


export type TagNodeTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  summary_Icontains?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_Icontains?: Maybe<Scalars['DateTime']>;
};

export type TagNodeConnection = {
  __typename?: 'TagNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagNodeEdge>>;
};

/** A Relay edge containing a `TagNode` and its cursor. */
export type TagNodeEdge = {
  __typename?: 'TagNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TagNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** 全ての権限を持っているとみなされます。 */
  isSuperuser: Scalars['Boolean'];
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateNewsMutationVariables = Exact<{
  url: Scalars['String'];
  selectCategoryId?: Maybe<Scalars['ID']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
}>;


export type CreateNewsMutation = (
  { __typename?: 'Mutation' }
  & { createNews?: Maybe<(
    { __typename?: 'CreateNewsMutationPayload' }
    & { news?: Maybe<(
      { __typename?: 'NewsNode' }
      & Pick<NewsNode, 'id' | 'title' | 'url' | 'createdAt'>
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUserMutationPayload' }
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & Pick<UserNode, 'id' | 'email'>
    )> }
  )> }
);

export type GetTokensMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetTokensMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'payload' | 'token' | 'refreshExpiresIn' | 'refreshToken'>
  )> }
);

export type RefreshTokensMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokensMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'Refresh' }
    & Pick<Refresh, 'token' | 'payload' | 'refreshToken' | 'refreshExpiresIn'>
  )> }
);

export type RevokeRefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RevokeRefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { revokeToken?: Maybe<(
    { __typename?: 'Revoke' }
    & Pick<Revoke, 'revoked'>
  )> }
);

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = (
  { __typename?: 'Query' }
  & { allNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'url' | 'title' | 'summary' | 'imagePath' | 'createdAt'>
        & { selectCategory?: Maybe<(
          { __typename?: 'CategoryNode' }
          & Pick<CategoryNode, 'id' | 'categoryName'>
        )>, tags: (
          { __typename?: 'TagNodeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'TagNodeEdge' }
            & { node?: Maybe<(
              { __typename?: 'TagNode' }
              & Pick<TagNode, 'id' | 'tagName'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);


export const CreateNewsDocument = gql`
    mutation CreateNews($url: String!, $selectCategoryId: ID, $tagIds: [ID]) {
  createNews(
    input: {url: $url, selectCategoryId: $selectCategoryId, tagIds: $tagIds}
  ) {
    news {
      id
      title
      url
      createdAt
    }
  }
}
    `;
export type CreateNewsMutationFn = Apollo.MutationFunction<CreateNewsMutation, CreateNewsMutationVariables>;

/**
 * __useCreateNewsMutation__
 *
 * To run a mutation, you first call `useCreateNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewsMutation, { data, loading, error }] = useCreateNewsMutation({
 *   variables: {
 *      url: // value for 'url'
 *      selectCategoryId: // value for 'selectCategoryId'
 *      tagIds: // value for 'tagIds'
 *   },
 * });
 */
export function useCreateNewsMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewsMutation, CreateNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewsMutation, CreateNewsMutationVariables>(CreateNewsDocument, options);
      }
export type CreateNewsMutationHookResult = ReturnType<typeof useCreateNewsMutation>;
export type CreateNewsMutationResult = Apollo.MutationResult<CreateNewsMutation>;
export type CreateNewsMutationOptions = Apollo.BaseMutationOptions<CreateNewsMutation, CreateNewsMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!) {
  createUser(input: {email: $email, password: $password}) {
    user {
      id
      email
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetTokensDocument = gql`
    mutation GetTokens($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    payload
    token
    refreshExpiresIn
    refreshToken
  }
}
    `;
export type GetTokensMutationFn = Apollo.MutationFunction<GetTokensMutation, GetTokensMutationVariables>;

/**
 * __useGetTokensMutation__
 *
 * To run a mutation, you first call `useGetTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTokensMutation, { data, loading, error }] = useGetTokensMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetTokensMutation(baseOptions?: Apollo.MutationHookOptions<GetTokensMutation, GetTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetTokensMutation, GetTokensMutationVariables>(GetTokensDocument, options);
      }
export type GetTokensMutationHookResult = ReturnType<typeof useGetTokensMutation>;
export type GetTokensMutationResult = Apollo.MutationResult<GetTokensMutation>;
export type GetTokensMutationOptions = Apollo.BaseMutationOptions<GetTokensMutation, GetTokensMutationVariables>;
export const RefreshTokensDocument = gql`
    mutation RefreshTokens($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    token
    payload
    refreshToken
    refreshExpiresIn
  }
}
    `;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokensMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
      }
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RevokeRefreshTokenDocument = gql`
    mutation RevokeRefreshToken($refreshToken: String!) {
  revokeToken(refreshToken: $refreshToken) {
    revoked
  }
}
    `;
export type RevokeRefreshTokenMutationFn = Apollo.MutationFunction<RevokeRefreshTokenMutation, RevokeRefreshTokenMutationVariables>;

/**
 * __useRevokeRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRevokeRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeRefreshTokenMutation, { data, loading, error }] = useRevokeRefreshTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRevokeRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RevokeRefreshTokenMutation, RevokeRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevokeRefreshTokenMutation, RevokeRefreshTokenMutationVariables>(RevokeRefreshTokenDocument, options);
      }
export type RevokeRefreshTokenMutationHookResult = ReturnType<typeof useRevokeRefreshTokenMutation>;
export type RevokeRefreshTokenMutationResult = Apollo.MutationResult<RevokeRefreshTokenMutation>;
export type RevokeRefreshTokenMutationOptions = Apollo.BaseMutationOptions<RevokeRefreshTokenMutation, RevokeRefreshTokenMutationVariables>;
export const GetAllNewsDocument = gql`
    query GetAllNews {
  allNews {
    edges {
      node {
        id
        url
        title
        summary
        imagePath
        createdAt
        selectCategory {
          id
          categoryName
        }
        tags {
          edges {
            node {
              id
              tagName
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllNewsQuery__
 *
 * To run a query within a React component, call `useGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
      }
export function useGetAllNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
export type GetAllNewsQueryHookResult = ReturnType<typeof useGetAllNewsQuery>;
export type GetAllNewsLazyQueryHookResult = ReturnType<typeof useGetAllNewsLazyQuery>;
export type GetAllNewsQueryResult = Apollo.QueryResult<GetAllNewsQuery, GetAllNewsQueryVariables>;