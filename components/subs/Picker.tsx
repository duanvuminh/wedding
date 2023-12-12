export function Picker({ title1, title2 }: { title1: string; title2: string }) {
  return (
    <div className="text-center text-xl m-3 font-semibold">
      <div className="fromTop1">{title1}</div>
      <div className="fromBottom1">{title2}</div>
    </div>
  );
}
