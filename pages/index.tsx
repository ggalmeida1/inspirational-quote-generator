import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {
  GradientBackgroundCon,
  BackgroundImage1,
  BackgroundImage2,
  FooterContainer,
  FooterLink,
  RedSpan,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

import Clouds1 from '@/assets/cloud-and-thunder.png'
import Clouds2 from "@/assets/cloudy-weather.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null >(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta
          name="description"
          content="A fun project to generate quotes using AWS and Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="cloudy background 1"
        />
        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="cloudy background 1"
        />

        <FooterContainer>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by{" "}
            <FooterLink
              href="https://github.com/ggalmeida1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @GabrielAlmeida{" "}
            </FooterLink>
          </>
        </FooterContainer>
      </GradientBackgroundCon>
    </>
  );
}
