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
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AddressNode = Node & {
  __typename?: 'AddressNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  addressName: Scalars['String'];
  selectedAddress: ProfileNodeConnection;
};


export type AddressNodeSelectedAddressArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  profileName?: Maybe<Scalars['String']>;
  profileName_Icontains?: Maybe<Scalars['String']>;
  isCollegeStudent?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_Icontains?: Maybe<Scalars['String']>;
  selectedAddress?: Maybe<Scalars['ID']>;
  selectedGender?: Maybe<Scalars['ID']>;
};

export type AddressNodeConnection = {
  __typename?: 'AddressNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AddressNodeEdge>>;
};

/** A Relay edge containing a `AddressNode` and its cursor. */
export type AddressNodeEdge = {
  __typename?: 'AddressNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AddressNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateMessageMutationInput = {
  distination: Scalars['ID'];
  text: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMessageMutationPayload = {
  __typename?: 'CreateMessageMutationPayload';
  message?: Maybe<MessageNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePostMutationInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  postImage?: Maybe<Scalars['Upload']>;
  isPublished: Scalars['Boolean'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePostMutationPayload = {
  __typename?: 'CreatePostMutationPayload';
  post?: Maybe<PostNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProfileMutationInput = {
  profileName: Scalars['String'];
  isCollegeStudent: Scalars['Boolean'];
  schoolName: Scalars['String'];
  selectedGender: Scalars['ID'];
  selectedAddress: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProfileMutationPayload = {
  __typename?: 'CreateProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserMutationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserMutationPayload = {
  __typename?: 'CreateUserMutationPayload';
  user?: Maybe<UserNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type DeletePostMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePostMutationPayload = {
  __typename?: 'DeletePostMutationPayload';
  post?: Maybe<PostNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type GenderNode = Node & {
  __typename?: 'GenderNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  genderName: Scalars['String'];
  selectedGender: ProfileNodeConnection;
};


export type GenderNodeSelectedGenderArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  profileName?: Maybe<Scalars['String']>;
  profileName_Icontains?: Maybe<Scalars['String']>;
  isCollegeStudent?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_Icontains?: Maybe<Scalars['String']>;
  selectedAddress?: Maybe<Scalars['ID']>;
  selectedGender?: Maybe<Scalars['ID']>;
};

export type GenderNodeConnection = {
  __typename?: 'GenderNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GenderNodeEdge>>;
};

/** A Relay edge containing a `GenderNode` and its cursor. */
export type GenderNodeEdge = {
  __typename?: 'GenderNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<GenderNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type MessageNode = Node & {
  __typename?: 'MessageNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  sender: UserNode;
  destination: UserNode;
  text: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type MessageNodeConnection = {
  __typename?: 'MessageNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MessageNodeEdge>>;
};

/** A Relay edge containing a `MessageNode` and its cursor. */
export type MessageNodeEdge = {
  __typename?: 'MessageNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<MessageNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUserMutationPayload>;
  createProfile?: Maybe<CreateProfileMutationPayload>;
  updateProfile?: Maybe<UpdateProfileMutationPayload>;
  createPost?: Maybe<CreatePostMutationPayload>;
  updatePost?: Maybe<UpdatePostMutationPayload>;
  deletePost?: Maybe<DeletePostMutationPayload>;
  createMessage?: Maybe<CreateMessageMutationPayload>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  refreshToken?: Maybe<Refresh>;
};


export type MutationCreateUserArgs = {
  input: CreateUserMutationInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileMutationInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileMutationInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostMutationInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostMutationInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostMutationInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageMutationInput;
};


export type MutationTokenAuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
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

export type PostNode = Node & {
  __typename?: 'PostNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  postedUser: UserNode;
  title: Scalars['String'];
  content: Scalars['String'];
  postImage?: Maybe<Scalars['String']>;
  isPublished: Scalars['Boolean'];
  publishedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  targetPost: ReviewNodeConnection;
};


export type PostNodeTargetPostArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stars?: Maybe<Scalars['Int']>;
  reviewText?: Maybe<Scalars['String']>;
  reviewText_Icontains?: Maybe<Scalars['String']>;
};

export type PostNodeConnection = {
  __typename?: 'PostNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostNodeEdge>>;
};

/** A Relay edge containing a `PostNode` and its cursor. */
export type PostNodeEdge = {
  __typename?: 'PostNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PostNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProfileNode = Node & {
  __typename?: 'ProfileNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  targetUser: UserNode;
  telephoneNumber: Scalars['String'];
  profileName: Scalars['String'];
  profileText: Scalars['String'];
  isCollegeStudent: Scalars['Boolean'];
  schoolName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  profileImage?: Maybe<Scalars['String']>;
  followingUsers: UserNodeConnection;
  selectedAddress: AddressNode;
  selectedGender: GenderNode;
  tags: TagNodeConnection;
};


export type ProfileNodeFollowingUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_Icontains?: Maybe<Scalars['String']>;
};


export type ProfileNodeTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  tagName?: Maybe<Scalars['String']>;
  tagName_Icontains?: Maybe<Scalars['String']>;
};

export type ProfileNodeConnection = {
  __typename?: 'ProfileNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileNodeEdge>>;
};

/** A Relay edge containing a `ProfileNode` and its cursor. */
export type ProfileNodeEdge = {
  __typename?: 'ProfileNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<UserNode>;
  allUsers?: Maybe<UserNodeConnection>;
  myProfile?: Maybe<ProfileNode>;
  profile?: Maybe<ProfileNode>;
  allProfiles?: Maybe<ProfileNodeConnection>;
  post?: Maybe<PostNode>;
  allPosts?: Maybe<PostNodeConnection>;
  tag?: Maybe<TagNode>;
  allTags?: Maybe<TagNodeConnection>;
  review?: Maybe<ReviewNode>;
  allReviews?: Maybe<ReviewNodeConnection>;
  gender?: Maybe<GenderNode>;
  allGenders?: Maybe<GenderNodeConnection>;
  address?: Maybe<AddressNode>;
  allAddresses?: Maybe<AddressNodeConnection>;
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
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  profileName?: Maybe<Scalars['String']>;
  profileName_Icontains?: Maybe<Scalars['String']>;
  isCollegeStudent?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_Icontains?: Maybe<Scalars['String']>;
  selectedAddress?: Maybe<Scalars['ID']>;
  selectedGender?: Maybe<Scalars['ID']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_Icontains?: Maybe<Scalars['String']>;
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


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryAllReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stars?: Maybe<Scalars['Int']>;
  reviewText?: Maybe<Scalars['String']>;
  reviewText_Icontains?: Maybe<Scalars['String']>;
};


export type QueryGenderArgs = {
  id: Scalars['ID'];
};


export type QueryAllGendersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  genderName?: Maybe<Scalars['String']>;
  genderName_Icontains?: Maybe<Scalars['String']>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAllAddressesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  addressName?: Maybe<Scalars['String']>;
  addressName_Icontains?: Maybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type ReviewNode = Node & {
  __typename?: 'ReviewNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  targetPost: PostNode;
  reviewedUser: UserNode;
  reviewText: Scalars['String'];
  stars: Scalars['Int'];
};

export type ReviewNodeConnection = {
  __typename?: 'ReviewNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReviewNodeEdge>>;
};

/** A Relay edge containing a `ReviewNode` and its cursor. */
export type ReviewNodeEdge = {
  __typename?: 'ReviewNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ReviewNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TagNode = Node & {
  __typename?: 'TagNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  tagName: Scalars['String'];
  tags: ProfileNodeConnection;
};


export type TagNodeTagsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  profileName?: Maybe<Scalars['String']>;
  profileName_Icontains?: Maybe<Scalars['String']>;
  isCollegeStudent?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_Icontains?: Maybe<Scalars['String']>;
  selectedAddress?: Maybe<Scalars['ID']>;
  selectedGender?: Maybe<Scalars['ID']>;
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

export type UpdatePostMutationInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  postImage?: Maybe<Scalars['Upload']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePostMutationPayload = {
  __typename?: 'UpdatePostMutationPayload';
  post?: Maybe<PostNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfileMutationInput = {
  id: Scalars['ID'];
  profileName: Scalars['String'];
  isCollegeStudent: Scalars['Boolean'];
  schoolName: Scalars['String'];
  selectedGender: Scalars['ID'];
  selectedAddress: Scalars['ID'];
  followingUsers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfileMutationPayload = {
  __typename?: 'UpdateProfileMutationPayload';
  profile?: Maybe<ProfileNode>;
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
  targetUser?: Maybe<ProfileNode>;
  followingUsers: ProfileNodeConnection;
  postedUser: PostNodeConnection;
  reviewedUser: ReviewNodeConnection;
  sender: MessageNodeConnection;
  destination: MessageNodeConnection;
};


export type UserNodeFollowingUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  profileName?: Maybe<Scalars['String']>;
  profileName_Icontains?: Maybe<Scalars['String']>;
  isCollegeStudent?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_Icontains?: Maybe<Scalars['String']>;
  selectedAddress?: Maybe<Scalars['ID']>;
  selectedGender?: Maybe<Scalars['ID']>;
};


export type UserNodePostedUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  title_Icontains?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_Icontains?: Maybe<Scalars['String']>;
};


export type UserNodeReviewedUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stars?: Maybe<Scalars['Int']>;
  reviewText?: Maybe<Scalars['String']>;
  reviewText_Icontains?: Maybe<Scalars['String']>;
};


export type UserNodeSenderArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  text_Icontains?: Maybe<Scalars['String']>;
};


export type UserNodeDestinationArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  text_Icontains?: Maybe<Scalars['String']>;
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