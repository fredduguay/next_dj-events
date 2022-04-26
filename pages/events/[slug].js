import Head from 'next/head';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
// import { useRouter } from 'next/router';

export default function EventPage({ evt }) {
  // const router = useRouter();

  // console.log(router);

  return (
    <Layout>
      <h1>{evt.name}</h1>
      {/* <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Send</button> */}
    </Layout>
  );
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: { evt: events[0] }
//   };
// }

// #STEP1 - getStaticPaths
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug }
  }));
  return {
    paths,
    fallback: false
  };
}

// #Required Object for
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {slug: 1},
//         params: {slug: 2},
//         params: {slug: 3},
//       }
//     ]
//   }
// }

//#STEP2 -
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  };
}
