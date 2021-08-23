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
  contributorName?: Maybe<Scalars['String']>;
  createdAt: Scalars['Int'];
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
  updateNews?: Maybe<UpdateNewsMutationPayload>;
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


export type MutationUpdateNewsArgs = {
  input: UpdateNewsMutationInput;
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
  contributorName?: Maybe<Scalars['String']>;
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
  todayNews?: Maybe<NewsNodeConnection>;
  yesterdayNews?: Maybe<NewsNodeConnection>;
  specificDayNews?: Maybe<NewsNodeConnection>;
  newsCount?: Maybe<Scalars['Int']>;
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


export type QueryTodayNewsArgs = {
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


export type QueryYesterdayNewsArgs = {
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


export type QuerySpecificDayNewsArgs = {
  year: Scalars['Int'];
  month: Scalars['Int'];
  day: Scalars['Int'];
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

export type UpdateNewsMutationInput = {
  id: Scalars['ID'];
  createdAt: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateNewsMutationPayload = {
  __typename?: 'UpdateNewsMutationPayload';
  news?: Maybe<NewsNode>;
  clientMutationId?: Maybe<Scalars['String']>;
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
  createdAt: Scalars['Int'];
  contributorName?: Maybe<Scalars['String']>;
  selectCategoryId?: Maybe<Scalars['ID']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
}>;


export type CreateNewsMutation = (
  { __typename?: 'Mutation' }
  & { createNews?: Maybe<(
    { __typename?: 'CreateNewsMutationPayload' }
    & { news?: Maybe<(
      { __typename?: 'NewsNode' }
      & Pick<NewsNode, 'id'>
    )> }
  )> }
);

export type UpdateNewsMutationVariables = Exact<{
  id: Scalars['ID'];
  createdAt: Scalars['Int'];
}>;


export type UpdateNewsMutation = (
  { __typename?: 'Mutation' }
  & { updateNews?: Maybe<(
    { __typename?: 'UpdateNewsMutationPayload' }
    & { news?: Maybe<(
      { __typename?: 'NewsNode' }
      & Pick<NewsNode, 'id'>
    )> }
  )> }
);

export type GetAllDateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDateQuery = (
  { __typename?: 'Query' }
  & { allNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'createdAt'>
      )> }
    )>> }
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
        & Pick<NewsNode, 'id' | 'url' | 'title' | 'summary' | 'imagePath' | 'createdAt' | 'contributorName'>
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

export type GetSpecificDayNewsQueryVariables = Exact<{
  year: Scalars['Int'];
  month: Scalars['Int'];
  day: Scalars['Int'];
}>;


export type GetSpecificDayNewsQuery = (
  { __typename?: 'Query' }
  & { specificDayNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'url' | 'title' | 'summary' | 'imagePath' | 'createdAt' | 'contributorName'>
      )> }
    )>> }
  )> }
);

export type GetTodayNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodayNewsQuery = (
  { __typename?: 'Query' }
  & { todayNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'url' | 'title' | 'summary' | 'createdAt' | 'imagePath' | 'contributorName'>
      )> }
    )>> }
  )> }
);

export type GetYesterdayNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYesterdayNewsQuery = (
  { __typename?: 'Query' }
  & { yesterdayNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'url' | 'title' | 'summary' | 'createdAt' | 'imagePath' | 'contributorName'>
      )> }
    )>> }
  )> }
);

export type SearchNewsQueryVariables = Exact<{
  searchTitleKeyword?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type SearchNewsQuery = (
  { __typename?: 'Query' }
  & { allNews?: Maybe<(
    { __typename?: 'NewsNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsNode' }
        & Pick<NewsNode, 'id' | 'title' | 'url' | 'summary' | 'createdAt' | 'imagePath' | 'contributorName'>
      )> }
    )>> }
  )> }
);


export const CreateNewsDocument = gql`
    mutation CreateNews($url: String!, $createdAt: Int!, $contributorName: String, $selectCategoryId: ID, $tagIds: [ID]) {
  createNews(
    input: {url: $url, createdAt: $createdAt, contributorName: $contributorName, selectCategoryId: $selectCategoryId, tagIds: $tagIds}
  ) {
    news {
      id
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
 *      createdAt: // value for 'createdAt'
 *      contributorName: // value for 'contributorName'
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
export const UpdateNewsDocument = gql`
    mutation UpdateNews($id: ID!, $createdAt: Int!) {
  updateNews(input: {id: $id, createdAt: $createdAt}) {
    news {
      id
    }
  }
}
    `;
export type UpdateNewsMutationFn = Apollo.MutationFunction<UpdateNewsMutation, UpdateNewsMutationVariables>;

/**
 * __useUpdateNewsMutation__
 *
 * To run a mutation, you first call `useUpdateNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNewsMutation, { data, loading, error }] = useUpdateNewsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useUpdateNewsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNewsMutation, UpdateNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNewsMutation, UpdateNewsMutationVariables>(UpdateNewsDocument, options);
      }
export type UpdateNewsMutationHookResult = ReturnType<typeof useUpdateNewsMutation>;
export type UpdateNewsMutationResult = Apollo.MutationResult<UpdateNewsMutation>;
export type UpdateNewsMutationOptions = Apollo.BaseMutationOptions<UpdateNewsMutation, UpdateNewsMutationVariables>;
export const GetAllDateDocument = gql`
    query GetAllDate {
  allNews {
    edges {
      node {
        id
        createdAt
      }
    }
  }
}
    `;

/**
 * __useGetAllDateQuery__
 *
 * To run a query within a React component, call `useGetAllDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDateQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDateQuery, GetAllDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDateQuery, GetAllDateQueryVariables>(GetAllDateDocument, options);
      }
export function useGetAllDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDateQuery, GetAllDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDateQuery, GetAllDateQueryVariables>(GetAllDateDocument, options);
        }
export type GetAllDateQueryHookResult = ReturnType<typeof useGetAllDateQuery>;
export type GetAllDateLazyQueryHookResult = ReturnType<typeof useGetAllDateLazyQuery>;
export type GetAllDateQueryResult = Apollo.QueryResult<GetAllDateQuery, GetAllDateQueryVariables>;
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
        contributorName
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
export const GetSpecificDayNewsDocument = gql`
    query GetSpecificDayNews($year: Int!, $month: Int!, $day: Int!) {
  specificDayNews(year: $year, month: $month, day: $day) {
    edges {
      node {
        id
        url
        title
        summary
        imagePath
        createdAt
        contributorName
      }
    }
  }
}
    `;

/**
 * __useGetSpecificDayNewsQuery__
 *
 * To run a query within a React component, call `useGetSpecificDayNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecificDayNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecificDayNewsQuery({
 *   variables: {
 *      year: // value for 'year'
 *      month: // value for 'month'
 *      day: // value for 'day'
 *   },
 * });
 */
export function useGetSpecificDayNewsQuery(baseOptions: Apollo.QueryHookOptions<GetSpecificDayNewsQuery, GetSpecificDayNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecificDayNewsQuery, GetSpecificDayNewsQueryVariables>(GetSpecificDayNewsDocument, options);
      }
export function useGetSpecificDayNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecificDayNewsQuery, GetSpecificDayNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecificDayNewsQuery, GetSpecificDayNewsQueryVariables>(GetSpecificDayNewsDocument, options);
        }
export type GetSpecificDayNewsQueryHookResult = ReturnType<typeof useGetSpecificDayNewsQuery>;
export type GetSpecificDayNewsLazyQueryHookResult = ReturnType<typeof useGetSpecificDayNewsLazyQuery>;
export type GetSpecificDayNewsQueryResult = Apollo.QueryResult<GetSpecificDayNewsQuery, GetSpecificDayNewsQueryVariables>;
export const GetTodayNewsDocument = gql`
    query GetTodayNews {
  todayNews {
    edges {
      node {
        id
        url
        title
        summary
        createdAt
        imagePath
        contributorName
      }
    }
  }
}
    `;

/**
 * __useGetTodayNewsQuery__
 *
 * To run a query within a React component, call `useGetTodayNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodayNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodayNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodayNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetTodayNewsQuery, GetTodayNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodayNewsQuery, GetTodayNewsQueryVariables>(GetTodayNewsDocument, options);
      }
export function useGetTodayNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodayNewsQuery, GetTodayNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodayNewsQuery, GetTodayNewsQueryVariables>(GetTodayNewsDocument, options);
        }
export type GetTodayNewsQueryHookResult = ReturnType<typeof useGetTodayNewsQuery>;
export type GetTodayNewsLazyQueryHookResult = ReturnType<typeof useGetTodayNewsLazyQuery>;
export type GetTodayNewsQueryResult = Apollo.QueryResult<GetTodayNewsQuery, GetTodayNewsQueryVariables>;
export const GetYesterdayNewsDocument = gql`
    query GetYesterdayNews {
  yesterdayNews {
    edges {
      node {
        id
        url
        title
        summary
        createdAt
        imagePath
        contributorName
      }
    }
  }
}
    `;

/**
 * __useGetYesterdayNewsQuery__
 *
 * To run a query within a React component, call `useGetYesterdayNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetYesterdayNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetYesterdayNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetYesterdayNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables>(GetYesterdayNewsDocument, options);
      }
export function useGetYesterdayNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables>(GetYesterdayNewsDocument, options);
        }
export type GetYesterdayNewsQueryHookResult = ReturnType<typeof useGetYesterdayNewsQuery>;
export type GetYesterdayNewsLazyQueryHookResult = ReturnType<typeof useGetYesterdayNewsLazyQuery>;
export type GetYesterdayNewsQueryResult = Apollo.QueryResult<GetYesterdayNewsQuery, GetYesterdayNewsQueryVariables>;
export const SearchNewsDocument = gql`
    query SearchNews($searchTitleKeyword: String, $first: Int, $offset: Int) {
  allNews(title_Icontains: $searchTitleKeyword, first: $first, offset: $offset) {
    edges {
      node {
        id
        title
        url
        summary
        createdAt
        imagePath
        contributorName
      }
    }
  }
}
    `;

/**
 * __useSearchNewsQuery__
 *
 * To run a query within a React component, call `useSearchNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNewsQuery({
 *   variables: {
 *      searchTitleKeyword: // value for 'searchTitleKeyword'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchNewsQuery(baseOptions?: Apollo.QueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchNewsQuery, SearchNewsQueryVariables>(SearchNewsDocument, options);
      }
export function useSearchNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchNewsQuery, SearchNewsQueryVariables>(SearchNewsDocument, options);
        }
export type SearchNewsQueryHookResult = ReturnType<typeof useSearchNewsQuery>;
export type SearchNewsLazyQueryHookResult = ReturnType<typeof useSearchNewsLazyQuery>;
export type SearchNewsQueryResult = Apollo.QueryResult<SearchNewsQuery, SearchNewsQueryVariables>;