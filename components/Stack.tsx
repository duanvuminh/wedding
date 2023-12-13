import Image from "next/image";
import { HeartIcon } from "@heroicons/react/20/solid";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})

export function Stack() {
  return (
    <div className="relative w-full h-72 sm:h-96 overflow-hidden z-0">
      <div className={`${dancing.className} text-xl waviy absolute top-8 z-40 text-center`}>
        <p>W</p>
        <p>E</p>
        <p>　A</p>
        <p>R</p>
        <p>E</p>
        <p>　G</p>
        <p>E</p>
        <p>T</p>
        <p>T</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>　M</p>
        <p>A</p>
        <p>R</p>
        <p>R</p>
        <p>I</p>
        <p>E</p>
        <p>D</p>
      </div>
      <Image
        className="w-full h-auto max-w-full absolute top-0 left-0 star-fail"
        src="/bg.jpg"
        alt="background wedding"
        width={375}
        height={(842 * 375) / 1002}
      />
      <Image
        className="w-full h-auto max-w-full z-10 absolute -bottom-2 left-0"
        src="/mask.png"
        alt="mask wedding"
        width={375}
        height={(150 * 375) / 2023}
      />
      <HeartIcon
        className="block h-16 w-16 sm:h-24 sm:w-24 text-rose-500 absolute bottom-1/2 left-1/2 animate-bounce"
        aria-hidden="true"
      />
      <div className="h-44 w-full bg-gradient-to-t from-white absolute bottom-0 left-0"></div>
      <div className="block w-full text-rose-500 absolute bottom-3">
        <div className="text-center m-3 font-semibold">
          <div className="text-xl text-white mb-4">Trân trọng kính mời</div>
          <div className="text-lg text-rose-500 mb-1 animate-bounce">
            Bạn và gia đình
          </div>
          <div className="text-sm text-black">
            Tới dự buổi tiệc chung vui cùng gia đình chúng tôi
          </div>
          <div className="text-lg text-rose-500">🍸🎂</div>
        </div>
      </div>
    </div>
  );
}
