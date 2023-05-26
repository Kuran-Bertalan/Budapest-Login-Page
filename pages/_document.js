import ImageComponent from '@/components/loginPage/backgroundImage';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <ImageComponent />
      </body>
    </Html>
  );
}
