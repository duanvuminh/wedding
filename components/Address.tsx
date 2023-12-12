import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})


export function Address() {
  return (
    <div className= {`${dancing.className} flex justify-around`}>
      <div className="grow-1 p-2">
        <h1 className="text-3xl text-center">Nhà trai</h1>
        <p className="text-center">
          Thôn Lạc Trung_Xã Trung Nguyên_Huyện Yên Lạc_Tỉnh Vĩnh Phúc
        </p>
      </div>
      <div className="grow-1 p-2 text-center ">
        <h1 className="text-3xl text-center">Nhà gái</h1>
        <p className="text-center">
          Thôn Mỹ Đô_Xã Tân Phong_Huyện Bình Xuyên_Tỉnh Vĩnh Phúc
        </p>
      </div>
    </div>
  );
}
