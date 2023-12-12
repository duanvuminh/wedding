import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
})


export function CenterName({ name }: { name: string }) {
  return (
    <p
      className={`${dancing.className} w-full text-3xl text-gray-500 text-center`}
    >
      {name}
    </p>
  );
}
