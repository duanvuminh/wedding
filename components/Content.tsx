import { Fragment } from "react";
import Image from "next/image";

export function Content() {
  return (
    <Fragment>
      <div className="absolute z-1 flex flex-col items-center">
        <div className="w-80 h-44 relative">
          <Image
            className="z-0 object-cover star-fail"
            src="/top.webp"
            alt="background wedding"
            fill
          />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="text-4xl text-white text-center">
          Lễ cưới của Tân và Duẩn
        </h1>
        <div className="bg-white m-10 p-5 rounded opacity-75">
          <h2 className="text-2xl font-extrabold">Thời gian</h2>
          <p className="my-4 text-lg text-gray-500">
            Ngày 23 tháng 12, 10 giờ 00 sáng
          </p>
          <h2 className="text-2xl font-extrabold">Địa điểm</h2>
          <p className="my-4 text-lg text-gray-500">👉𝐓𝐚̣𝐢 𝐆𝐢𝐚 Đ𝐢̀𝐧𝐡 𝐍𝐡𝐚̀ Gái:</p>
          <p className="my-4 text-lg text-gray-500">
            Đ𝐢̣𝐚 𝐜𝐡𝐢̉: Thôn Mỹ Đô_Xã Tân Phong_Huyện Bình Xuyên_Tỉnh Vĩnh Phúc
          </p>
          <p className="my-4 text-lg text-gray-500">👉𝐓𝐚̣𝐢 𝐆𝐢𝐚 Đ𝐢̀𝐧𝐡 𝐍𝐡𝐚̀ Trai:</p>
          <p className="my-4 text-lg text-gray-500">
            Đ𝐢̣𝐚 𝐜𝐡𝐢̉: Thôn Lạc Trung_Xã Trung Nguyên_Huyện Yên Lạc_Tỉnh Vĩnh Phúc
          </p>
          <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            💕𝐕𝐢̀ 𝐦𝐨̣̂𝐭 𝐯𝐚̀𝐢 𝐥𝐢́ 𝐝𝐨 𝐡𝐨𝐚̣̆𝐜 𝐭𝐡𝐢𝐞̂́𝐮 𝐬𝐨́𝐭 𝐞𝐦 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐫𝐮̛̣𝐜 𝐭𝐢𝐞̂́𝐩 𝐠𝐮̛̉𝐢 𝐭𝐡𝐢𝐞̣̂𝐩
            𝐦𝐨̛̀𝐢 đ𝐞̂́𝐧 𝐭𝐚̣̂𝐧 𝐭𝐚𝐲 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐮̛𝐨̛̣𝐜 𝐦𝐨𝐧𝐠 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐜𝐚̉𝐦.
          </p>
        </div>
      </div>
    </Fragment>
  );
}