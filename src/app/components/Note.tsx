type Props = {
  value: string;
};

export default function Note({ value }: Props) {
  return (
    <div className="text-white">
      <h2 className="font-bold text-8xl">{value}</h2>
    </div>
  );
}
