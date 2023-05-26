import Head from 'next/head';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BFFH Login App</title>
        <meta name="description" content="Created for test at BFFH" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col justify-center h-screen">
        <h1 className="text-center text-white">
          Sikeres belépés,{' '}
          <Link href="/" className="underline underline-offset-1">
            kijelentkezés
          </Link>
        </h1>
      </main>
    </>
  );
}
