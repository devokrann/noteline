import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import HeaderMain from '@/components/layout/headers/main';
import LayoutSection from '@/components/layout/section';
import LayoutBarMain from '@/components/layout/bars/main';
// import LayoutHeroHome from '@/components/layout/hero/home';
import CarouselTrending from '@/components/common/carousels/trending';
import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';

export default function Home() {
  return (
    <LayoutBody
      bar={<LayoutBarMain />}
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <main>
        {/* <LayoutHeroHome /> */}

        <LayoutSection id="carousel" padded={'sm'}>
          <CarouselTrending />
        </LayoutSection>

        <LayoutSection id="main" padded pt={'xl'}>
          main cards
        </LayoutSection>
      </main>

      <AffixTop />
      <AffixNavbar />
    </LayoutBody>
  );
}
