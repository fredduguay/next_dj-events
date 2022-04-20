import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function EventPage() {
  const router = useRouter();

  console.log(router);

  return (
    <Layout>
      <Head>
        <title>DJ Events</title>
      </Head>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Send</button>
    </Layout>
  );
}
