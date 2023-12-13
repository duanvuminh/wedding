import { AudioIcon } from "@/components/AudioIcon";
import { Content } from "@/components/Content";
import { Stack } from "@/components/Stack";
import { StarFail } from "@/components/StarFail";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen max-w-xl mx-auto bg-white">
      <Stack />
      <Image
        src="/top.webp"
        alt="mask wedding"
        width={150}
        height={(353 * 150) / 640}
      />
      <Content/>
      <StarFail/>
      <AudioIcon/>
    </main>
  );
}
