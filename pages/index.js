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

        <h3>Why I Chose My IT Specialization</h3>
        <p>
            I chose Web and Mobile Development because I am interested in creating
            websites and applications that can solve real-world problems. I enjoy
            learning how technology can make information and services easier to
            access. The growing use of mobile applications and web-based systems
            in businesses and everyday life inspired me to pursue this
            specialization. I also want to learn how to design and develop
            applications that are useful and user-friendly. Through this
            specialization, I hope to improve my technical skills and create
            meaningful digital solutions in the future.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}