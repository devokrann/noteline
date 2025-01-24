import React from 'react';

import LayoutBody from '@/components/layout/body';
import AsideProfile from '@/components/layout/asides/profile';
import LayoutSection from '@/components/layout/section';
import NavbarApp from '@/components/layout/navbars/app';
import appData from '@/data/app';
import { Metadata } from 'next';
import { SECTION_SPACING } from '@/data/constants';

export interface typeParams {
  userName: string;
}

export const metadata: Metadata = {
  title: {
    default: 'Profile',
    template: `%s - Profile - ${appData.name.app}`,
  },
};

export default function LayoutProfile({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      nav={<NavbarApp />}
      aside={{
        gap: 40,
        right: {
          component: <AsideProfile />,
          width: { md: 30, lg: 27.5 },
          withBorder: true,
        },
      }}
    >
      <LayoutSection
        containerized={false}
        id={'layout-account'}
        component={'main'}
        margined={SECTION_SPACING / 2}
      >
        {children}
      </LayoutSection>
    </LayoutBody>
  );
}
