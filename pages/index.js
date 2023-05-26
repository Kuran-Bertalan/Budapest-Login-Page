import Head from 'next/head';
import { Inter } from '@next/font/google';
import Login from '@/components/loginPage/loginPage';

const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>BFFH Login App</title>
        <meta name="description" content="Created for test at BFFH" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <Login />
      </main>
    </>
  );
}
