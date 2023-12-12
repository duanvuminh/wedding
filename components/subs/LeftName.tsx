import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})

export function LeftName({ name }: { name: string }) {
  return (
    <p
      className={`${dancing.className} w-1/2 text-3xl text-gray-500 text-right fromLeft`}
    >
      {name}
    </p>
  );
}
