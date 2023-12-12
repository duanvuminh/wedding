import { AudioIcon } from "@/components/AudioIcon";
import { Content } from "@/components/Content";
import { Stack } from "@/components/Stack";
import { StarFail } from "@/components/StarFail";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center w-screen -space-y-8">
      <Stack />
      <Content/>
      <StarFail/>
      <AudioIcon/>
    </main>
  );
}
