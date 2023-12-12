import { Address } from "./Address";
import { CenterName } from "./subs/CenterName";
import { LeftName } from "./subs/LeftName";
import { Picker } from "./subs/Picker";
import { RightName } from "./subs/RightName";

export function Content() {
  return (
    <div className="w-full z-10 opacity-75 max-w-2xl">
      <LeftName name={"Minh Duẩn🤵"} />
      <CenterName name={"💍"} />
      <RightName name={"Ngọc Tân🤵‍♀️"} />
      <div className="clear-both"></div>
      <div className="flex justify-center items-center my-4">
        <Picker title1={"Thứ 7"} title2={"15h-17h"} />
        <div className="w-2 h-24 bg-rose-500"></div>
        <h1 className="text-5xl m-3 fromTop"> 23 </h1>
        <div className="w-2 h-24 bg-rose-500"></div>
        <Picker title1={"Tháng 12"} title2={"2023"} />
      </div>
      <Address/>
    </div>
  );
}
