'use client';

import Hero from '../src/components/Hero/Hero';
import Welcome from '../src/components/Welcome/Welcome';
import Choose from '../src/components/Choose/Choose';
import StickyCols from '../src/components/StickyCols/StickyCols';
import Gallery from '../src/components/Gallery/Gallery';
import MarqueeText from '../src/components/Marquee/MarqueeText';
import MarqueeSticky from '../src/components/Layouts/MarqueeSticky';
import MapLink from '../src/components/MapLink/MapLink';
import Activities from '../src/components/Activities/Activities';
import Showcase from '../src/components/Showcase/Showcase';
import Feedback from '../src/components/Feedback/Feedback';
import FooterBanner from '../src/components/FooterBanner/FooterBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Choose />
      <Gallery />
      <MapLink />
      <MarqueeSticky />
      <StickyCols />
      <Activities />
      <Showcase />
      <Feedback />
      <FooterBanner />
    </>
  );
}
