import React from 'react';
import LayoutBody from '@/components/layout/body';
import FooterMain from '@/components/layout/footers/main';
// import PageHomeMarketing from '@/components/pages/home/marketing';
import PageHomeApp from '@/components/pages/home/app';
// import NavbarMarketing from '@/components/layout/navbars/main';
import NavbarApp from '@/components/layout/navbars/app';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <LayoutBody
      // nav={<NavbarMarketing />}
      nav={<NavbarApp />}
      footer={<FooterMain />}
    >
      <main>
        {/* <PageHomeMarketing /> */}
        <PageHomeApp />
      </main>
    </LayoutBody>
  );
}
