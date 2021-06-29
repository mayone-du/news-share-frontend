type Props = {
  text: string;
};
export const Headline2: React.VFC<Props> = (props) => {
  return <h2 className="py-4 text-lg md:text-2xl font-bold text-center">{props.text}</h2>;
};
