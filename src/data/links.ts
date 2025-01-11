import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import { AUTH_URLS } from './constants';

export const links = {
  header: [
    { link: '/about', label: 'About' },
    { link: '/forum', label: 'Forum' },
    { link: '/shop', label: 'Buy Now!' },
    { link: AUTH_URLS.SIGN_IN, label: 'Log In / Join' },
  ],
  navbar: [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    {
      link: '/features',
      label: 'Features',
      subLinks: [
        {
          leftSection: IconCode,
          label: 'Open source',
          link: '/features/open-source',
          desc: "This Pokémon's cry is very loud and distracting",
        },
        {
          leftSection: IconCoin,
          label: 'Free for everyone',
          link: '/features/free-for-everyone',
          desc: "The fluid of Smeargle's tail secretions changes",
        },
        {
          leftSection: IconBook,
          label: 'Documentation',
          link: '/features/documentation',
          desc: 'Yanma is capable of seeing 360 degrees without',
        },
        {
          leftSection: IconFingerprint,
          label: 'Security',
          link: '/features/security',
          desc: "The shell's rounded shape and the grooves on its.",
        },
        {
          leftSection: IconChartPie3,
          label: 'Analytics',
          link: '/features/analytics',
          desc: 'This Pokémon uses its flying ability to quickly chase',
        },
        {
          leftSection: IconNotification,
          label: 'Notifications',
          link: '/features/notifications',
          desc: 'Combusken battles with the intensely hot flames it spews',
        },
      ],
    },
    { link: '/pricing', label: 'Pricing' },
    {
      link: '/blog',
      label: 'Blog',
    },
    {
      link: '/help',
      label: 'Help',
      subLinks: [
        { link: '/help/faq', label: "FAQ's" },
        { link: '/help/support', label: 'Support' },
      ],
    },
    {
      link: '/contact',
      label: 'Contact Us',
    },
  ],
};
