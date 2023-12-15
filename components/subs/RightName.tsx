import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})

export function RightName() {
  return (
    <p
      className={`${dancing.className} w-1/2 text-3xl text-gray-500 text-left float-right fromRight`}
    >
      <label className='title-word title-word-3'>Ngọc </label><label className='title-word title-word-4'>Tân</label>👰‍♀️
    </p>
  );
}
