import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>CV</>,
    to: 'https://github.com/oscar-barlow/CV',
    imageUrl: 'img/undraw_online_cv_qy9w.svg',
    description: (
      <>
        Learn about things I've done
      </>
    ),
  },
  {
    title: <>Blog</>,
    to: '/blog',
    imageUrl: 'img/undraw_maker_launch_crhe.svg',
    description: (
      <>
        These are my thoughts
      </>
    ),
  },
  {
    title: <>Code</>,
    to: 'https://github.com/oscar-barlow',
    imageUrl: 'img/undraw_source_code_xx2e.svg',
    description: (
      <>
        Poke around my repos
      </>
    ),
  },
];

function Feature({imageUrl, to, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <a href={to}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline}</h1>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
