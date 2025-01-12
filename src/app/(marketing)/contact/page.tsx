import React from 'react';

import { Metadata } from 'next';

import { Anchor, Divider, SimpleGrid, Stack, Text, Title } from '@mantine/core';

import {
  IconAt,
  IconClockHour8,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import FormContact from '@/components/form/contact';
import IntroPage from '@/components/layout/intro/page';
import IframeContact from '@/components/common/iframes/contact';
import appData from '@/data/app';
import { images } from '@/assets/images';

export const metadata: Metadata = { title: 'Contact' };

export default async function Contact() {
  return (
    <LayoutPage>
      <IntroPage props={{ title: 'Contact Us' }} />

      <LayoutSection id={'map'} margined containerized={'md'}>
        <IframeContact />
      </LayoutSection>

      <LayoutSection id={'contact-details'} margined containerized={'sm'}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Stack>
            <Title order={2}>Advertise / Sponsorships</Title>

            <Stack gap={'xs'} c={'dimmed'} fz={'sm'}>
              <Text inherit>Contact us directly for advertisement</Text>
              <Text inherit>2492 Centennial NW, Acworth, GA, 30102</Text>
              <Text inherit>
                Call:{' '}
                <Anchor
                  inherit
                  href={`tel:${appData.phones.marketing}`}
                  underline="always"
                >
                  {appData.phones.marketing}
                </Anchor>{' '}
                (Toll-free)
              </Text>
              <Text inherit>
                Email:{' '}
                <Anchor
                  inherit
                  href={`mailto:${appData.emails.marketing}`}
                  underline="always"
                >
                  {appData.emails.marketing}
                </Anchor>
              </Text>
              <Text inherit>
                Support: {appData.hours.days} ({appData.hours.times})
              </Text>
            </Stack>
          </Stack>

          <Stack>
            <Title order={2}>Contact Information</Title>

            <Stack gap={'xs'} c={'dimmed'} fz={'sm'}>
              <Text inherit>Get in touch with us to see how we can help</Text>
              <Text inherit>750 Sing Sing Rd, Horseheads, NY, 14845</Text>
              <Text inherit>
                Call:{' '}
                <Anchor
                  inherit
                  href={`tel:${appData.phones.main}`}
                  underline="always"
                >
                  {appData.phones.main}
                </Anchor>{' '}
                (Toll-free)
              </Text>
              <Text inherit>
                Email:{' '}
                <Anchor
                  inherit
                  href={`mailto:${appData.emails.info}`}
                  underline="always"
                >
                  {appData.emails.info}
                </Anchor>
              </Text>
              <Text inherit>
                Support: {appData.hours.days} ({appData.hours.times})
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </LayoutSection>

      <LayoutSection id={'divider'} margined containerized={'sm'}>
        <Divider color={'var(--mantine-color-default-border)'} />
      </LayoutSection>

      <LayoutSection id={'form'} margined containerized={'sm'}>
        <Stack gap={'xl'}>
          <Stack gap={'xs'}>
            <Title order={2} ta={'start'}>
              Drop Us A Line
            </Title>

            <Text ta={'start'} w={{ md: '80%', lg: '90%' }}>
              Leave your email and we will get back to you within 24 hours.
            </Text>
          </Stack>

          <FormContact />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}

export const dataContact = [
  {
    title: 'Email',
    icon: IconAt,
    link: `mailto:${appData.emails.info}`,
    label: appData.emails.info,
  },
  {
    title: 'Phone',
    icon: IconPhone,
    link: `tel:${appData.phones.main}`,
    label: appData.phones.main,
  },
  {
    title: 'Address',
    icon: IconMapPin,
    link: appData.locations.main.pin,
    label: appData.locations.main.location,
  },
  {
    title: 'Working Hours',
    icon: IconClockHour8,
    link: '#working-hours',
    label: `${appData.hours.times} (${appData.hours.days})`,
  },
];

export const dataSocials = [
  {
    image: images.icons.social.facebook,
    link: appData.socials.facebook.link,
    label: appData.socials.facebook.platform,
  },
  {
    image: images.icons.social.twitterx,
    link: appData.socials.twitter.link,
    label: appData.socials.twitter.platform,
  },
  {
    image: images.icons.social.instagram,
    link: appData.socials.instagram.link,
    label: appData.socials.instagram.platform,
  },
  {
    image: images.icons.social.linkedin,
    link: appData.socials.linkedin.link,
    label: appData.socials.linkedin.platform,
  },
];
