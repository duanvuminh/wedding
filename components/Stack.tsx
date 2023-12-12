import Image from "next/image";
import { HeartIcon } from "@heroicons/react/20/solid";

export function Stack() {
  return (
    <div className="relative w-full h-72 sm:h-full overflow-hidden z-0">
      <Image
        className="w-full h-auto max-w-full absolute top-0 left-0 star-fail"
        src="/bg.jpg"
        alt="background wedding"
        width={1002}
        height={842}
      />
      <Image
        className="w-full h-auto max-w-full z-10 absolute -bottom-2 left-0"
        src="/mask.png"
        alt="mask wedding"
        width={1002}
        height={842}
      />
      <HeartIcon
        className="block h-16 w-16 sm:h-48 sm:w-48 text-rose-500 absolute bottom-1/2 left-1/2 animate-bounce"
        aria-hidden="true"
      />
      <div className="h-44 w-full bg-gradient-to-t from-white absolute bottom-0 left-0"></div>
    </div>
  );
}
