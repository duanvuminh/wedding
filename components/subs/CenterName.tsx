import { dancing } from "@/app/layout";

export function CenterName({ name }: { name: string }) {
  return (
    <p
      className={`${dancing.className} w-full text-3xl text-gray-500 text-center`}
    >
      {name}
    </p>
  );
}
