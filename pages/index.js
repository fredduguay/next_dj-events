import Link from 'next/Link';
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events);

  return {
    props: { events: events.slice(0, 3) }
  };
}
