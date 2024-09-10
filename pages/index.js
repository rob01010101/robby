import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[I’m really into playing video games, the piano, collecting fragrances, and learning about shoes, and I love R&B music and hanging out with friends. I chose IT because my parents have good connections in the field, and I use computers a lot, though I know it can be challenging. I’m not sure about my future career yet, but I’m eager to learn whatever will be useful and interesting in this subject.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}