type Props = {
  text: string;
};
export const Headline2: React.VFC<Props> = (props) => {
  return <h2 className="py-2 text-2xl font-bold text-center">{props.text}</h2>;
};
