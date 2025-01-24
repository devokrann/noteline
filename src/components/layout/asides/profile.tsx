import React from 'react';
import { Stack } from '@mantine/core';
import {
  IconBellRinging,
  IconHeart,
  IconHelpCircle,
  IconInfoCircle,
  IconLicense,
  IconLock,
  IconLogout,
  IconPackage,
  IconStar,
  IconUser,
} from '@tabler/icons-react';
import LayoutSection from '@/components/layout/section';
import { AUTH_URLS, SECTION_SPACING } from '@/data/constants';
import CardProfileAside from '@/components/common/cards/profile/aside';
import FooterAside from '../footers/aside';
import { ProfileRelations } from '@/types/models/profile';
import { profileGet } from '@/handlers/requests/database/profile';

export default async function Account() {
  const { profile }: { profile: ProfileRelations } = await profileGet({
    userName: 'alexsmith',
  });

  return (
    <LayoutSection
      containerized={false}
      id={'partial-aside-profile'}
      pos={'sticky'}
      top={0}
    >
      <Stack justify="space-between" mih={'100vh'} py={SECTION_SPACING / 2}>
        <CardProfileAside props={profile} />
        <FooterAside />
      </Stack>
    </LayoutSection>
  );
}

export const navLinkItems = {
  activity: [
    {
      icon: IconHeart,
      link: `/account/wishlist`,
      label: 'My Wishlist',
    },
    {
      icon: IconPackage,
      link: `/account/orders`,
      label: 'My Orders',
    },
    {
      icon: IconStar,
      link: `/account/reviews`,
      label: 'My Reviews',
    },
  ],
  account: [
    {
      icon: IconUser,
      link: `/account/profile`,
      label: 'Profile Settings',
    },
    {
      icon: IconLock,
      link: `/account/security`,
      label: 'Account Security',
    },
    // {
    // 	icon: IconCoins,
    // 	link: `/account/payment`,
    // 	label: "Payment Details",
    // },
    // {
    // 	icon: IconMapPin,
    // 	link: `/account/addresses`,
    // 	label: "Addresses",
    // },
    {
      icon: IconBellRinging,
      link: `/account/notifications`,
      label: 'Notifications',
    },
  ],
  support: [
    {
      icon: IconHelpCircle,
      link: `/help`,
      label: 'Help Center',
    },
    {
      icon: IconLicense,
      link: `/legal/terms-and-conditions`,
      label: 'Terms and Conditions',
    },
    {
      icon: IconInfoCircle,
      link: `/legal/privacy-policy`,
      label: 'Privacy Policy',
    },
  ],
  danger: [
    {
      icon: IconLogout,
      link: AUTH_URLS.SIGN_OUT,
      label: 'Sign Out',
    },
  ],
};
