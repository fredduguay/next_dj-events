import Link from 'next/Link';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title='Add DJ Events' description='Add a DJ Event'>
      <h1>About</h1>
      <p> This is an app to find the latest DJs and other musical events</p>
      <p>Version 1.0.0</p>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </Layout>
  );
}
