export const SLACK_PASSWORD =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_SLACK_PASSWORD}`
    : `${process.env.SLACK_API_PASSWORD}`;
