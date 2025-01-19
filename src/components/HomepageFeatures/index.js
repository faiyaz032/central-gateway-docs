import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Supported Gateways',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our platform supports popular payment gateways like <strong>bKash</strong>, <strong>AamarPay</strong>, and{' '}
        <strong>SSLCommerz</strong>, with more gateways to come. Simplify integration and offer seamless payment options
        for your users.
      </>
    ),
  },
  {
    title: 'Gateway Abstraction',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Handles gateway-specific complexities behind the scenes, allowing you to focus on integrating and using payment
        gateways without worrying about underlying differences.
      </>
    ),
  },
  {
    title: 'Type Safety',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Enjoy full TypeScript support for a seamless development experience, with robust error handling and detailed
        type definitions for payment data and gateway responses.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
