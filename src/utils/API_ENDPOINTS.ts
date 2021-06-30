export const GRAPHQL_API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_DEV_GRAPHQL_API_URL}`
    : `${process.env.GRAPHQL_API_URL}`;

export const SLACK_API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_SLACK_API_URL}`
    : `${process.env.SLACK_API_URL}`;
