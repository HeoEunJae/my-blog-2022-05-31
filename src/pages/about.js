import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="몰?루"
        src="https://post-phinf.pstatic.net/MjAyMTA4MzFfMTA3/MDAxNjMwMzg3MDcyNDM2.yfDkLDMEOqY97UnjAsKWEGuCJaxGkq9tyJyTUAE6pq0g.mlalmRbED4rb7wsvPebtBK-H_JuwvsnKs0oyXHkI5Osg.PNG/3.png?type=w1200"
      />
    </Layout>
  );
}
export default AboutPage;
