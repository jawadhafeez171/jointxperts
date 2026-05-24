import { Suspense } from 'react';
import JointAnatomyMap from '@/components/JointAnatomyMap';
import styles from '@/styles/AnatomyPage.module.css';
import Head from 'next/head';

export const metadata = {
  title: 'Interactive Joint Anatomy - JointXperts',
  description: 'Explore an interactive map of human joints and discover specialized orthopedic services.',
};

export default function AnatomyPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Suspense fallback={null}>
        <section className={styles.container}>
          <h1 className={styles.title}>Explore Our Joint Anatomy</h1>
          <div className={styles.mapWrapper}>
            <JointAnatomyMap />
          </div>
        </section>
      </Suspense>
    </>
  );
}
