'use client';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import '../src/index.css';
import Navbar from '../src/components/Navbar/Navbar';
import { initLenis } from '../src/lib/lenis';
import Preloader from '../src/components/Preloader/Preloader';
import PreloaderII from '../src/components/Preloader/PreloaderII';
import ReserveBtn from '../src/components/Buttons/ReserveBtn';
import Logo from '../src/components/Buttons/Logo';
import Footer from '../src/components/Footer/Footer';
import FooterTitle from '../src/components/Footer/FooterTitle';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const metadata = {
  title: 'Closer to Nature—Closer to Yourself',
  description: 'Capsule Awards - A luxury nature experience',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });
  });

  useEffect(() => {
    initLenis();
  }, []);

  return (
    <html lang="en">
      <body>
        <PreloaderII />
        <Logo />
        <ReserveBtn />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {children}
              <Footer />
              <FooterTitle />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
