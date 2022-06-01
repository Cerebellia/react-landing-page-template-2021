import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import Head from "next/head";

const App = () => {
  return (
  
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <Head>
    
    <meta name="keywords" content="Parkinson's Disease, Parkinson's, Tremor, Health" />
    <meta name="author" content="Cerebellia" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta property="og:title" content="Cerebellia"/>
<meta property="og:description" content="A company dedicated to the wellbeing of individuals afflicted with Parkinson's Disease"/>
<meta property="og:image" content="https://cerebellia.com/assets/images/landing.png"/>
<meta name="twitter:card" content="summary_large_image"></meta>

  </Head>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          {/* <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
