import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout title='Page not found'>
      <h1>
        <FaExclamationTriangle />
        404
      </h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </Layout>
  );
}
