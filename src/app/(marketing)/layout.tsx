import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMarketing from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
// import HeaderMain from '@/components/layout/headers/main';
// import LayoutBarMain from '@/components/layout/bars/main';
// import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      // bar={<LayoutBarMain />}
      // header={<HeaderMain />}
      nav={<NavbarMarketing />}
      footer={<FooterMain />}
    >
      <main>{children}</main>

      <AffixNavbar>
        <NavbarMarketing />
      </AffixNavbar>
      {/* <AffixTop /> */}
    </LayoutBody>
  );
}
