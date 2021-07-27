import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Go Back</Link>
      </h2>
    </div>
  );
}
