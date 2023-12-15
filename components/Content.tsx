import { Dancing_Script } from "next/font/google";
import { Address } from "./Address";
import { CenterName } from "./subs/CenterName";
import { LeftName } from "./subs/LeftName";
import { Picker } from "./subs/Picker";
import { RightName } from "./subs/RightName";

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export function Content() {
  return (
    <div className="w-full z-10 opacity-75 max-w-2xl">
      <LeftName />
      <CenterName name={"💍"} />
      <RightName />
      <div className="clear-both"></div>
      <div className="flex justify-center items-center mt-12">
        <div className="relative flex h-3 w-3">
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
          <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
        </div>
        <Picker title1={"Thứ 7"} title2={"15h-17h"} />
        <div className="w-2 h-24 bg-rose-500"></div>
        <div className="text-5xl m-3 fromTop">23</div>
        <div className="w-2 h-24 bg-rose-500"></div>
        <Picker title1={"Tháng 12"} title2={"2023"} />
      </div>
      <Address />
      <div className="flex flex-col items-center m-4 font-semibold">
        <div className="text-5xl mt-12">🎁 </div>
        <p className="text-xl text-rose-800 m-2 text-center">
          Sự hiện diện của các bạn là niềm vinh hạnh của chúng tôi❣️
        </p>
        <div className="flex">
          <div className="text-lg text-rose-500">
            Rất hân hạnh được đón tiếp
          </div>
        </div>
      </div>
      <div className={dancing.className}>
        <div className="text-center mt-24 font-semibold">
          <div className="text-xl text-rose-500 mb-1">Thanks you!</div>
          <div className="text-lg text-rose-500">🤵‍♂️👰‍♀️💒</div>
        </div>
      </div>
    </div>
  );
}
