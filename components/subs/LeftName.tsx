import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})

export function LeftName() {
  return (
    <p
      className={`${dancing.className} w-1/2 text-3xl text-gray-500 text-right fromLeft`}
    >
      <label className='title-word title-word-1'>Minh </label><label className='title-word title-word-2'>Duẩn</label>🤵‍♂️
    </p>
  );
}
