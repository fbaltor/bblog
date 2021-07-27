import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Go Back</Link>
      </h2>
    </>
  );
}
