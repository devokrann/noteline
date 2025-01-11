import React from 'react';
import Link from 'next/link';
import {
  Flex,
  Grid,
  Text,
  Title,
  Anchor,
  Group,
  GridCol,
  Stack,
  Divider,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import classes from './main.module.scss';
import appData from '@/data/app';
import ImageBrand from '@/components/common/images/brand';
import { images } from '@/assets/images';
import ImageDefault from '@/components/common/images/default';
import { SECTION_SPACING } from '@/data/constants';
import FormNewsletter from '@/components/form/newsletter';

export default function Main() {
  return (
    <div className={classes.footer}>
      <LayoutSection id={'partial-footer-main'} pt={SECTION_SPACING}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 2.5 }}>
            <Flex align={'center'} justify={{ base: 'center', md: 'start' }}>
              <Anchor component={Link} href={'/'}>
                <ImageBrand
                  staticImage={images.brand.logo.dark}
                  height={{ base: 64 }}
                  width={{ base: 160 }}
                />
              </Anchor>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 5, lg: 5.5 }}>
            <Text inherit fz={'sm'} ta={{ base: 'center', sm: 'start' }}>
              At {appData.name.app}, we believe in the power of stories. From
              personal musings to professional insights, our platform is
              designed to amplify your voice and connect you with a world of
              readers.
            </Text>
          </GridCol>

          <GridCol span={{ base: 12, md: 4.5, lg: 4 }}>
            <Flex
              direction={'column'}
              align={{ base: 'center', sm: 'end' }}
              gap={'xs'}
            >
              <FormNewsletter />

              <Stack gap={'xs'}>
                <Text c={'dimmed'} ta={{ base: 'center', sm: 'end' }} fz={'xs'}>
                  By subscribing you agree to our{' '}
                  <Anchor href="#" inherit underline="always">
                    Privacy Policy
                  </Anchor>
                  .
                </Text>
              </Stack>
            </Flex>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={'partial-footer-divider'} margined>
        <Divider
          mt={SECTION_SPACING}
          mb={SECTION_SPACING / 2}
          color="var(--mantine-color-default-border)"
        />
      </LayoutSection>

      <LayoutSection id={'partial-footer-main'} margined>
        <Grid gutter={{ base: 'xl', md: 'md' }} fz={'sm'}>
          <GridCol span={{ base: 12, xs: 6, md: 3 }}></GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 3 }}>
            <Flex
              direction={'column'}
              align={{ base: 'center', xs: 'start' }}
              gap={'xl'}
            >
              <Title order={4}>Navigation</Title>

              <Grid gutter={'xs'}>
                {linkSets.navigation.map((link) => (
                  <GridCol key={link.link} span={6}>
                    <Flex justify={{ base: 'center', xs: 'start' }}>
                      <Anchor
                        component={Link}
                        href={link.link}
                        title={link.label}
                        className={classes.link}
                      >
                        {link.label}
                      </Anchor>
                    </Flex>
                  </GridCol>
                ))}
              </Grid>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 3 }}>
            <Flex
              direction={'column'}
              align={{ base: 'center', xs: 'start' }}
              gap={'xl'}
            >
              <Title order={4}>Get Regular Updates</Title>

              <Flex
                direction={'column'}
                align={{ base: 'center', xs: 'start' }}
                gap={'xs'}
              >
                {linkSets.community.map((link) => (
                  <Anchor
                    key={link.link}
                    component={Link}
                    href={link.link}
                    title={link.label}
                    className={classes.link}
                  >
                    <Group gap={'xs'}>
                      <ImageDefault
                        src={link.image}
                        alt={link.label}
                        height={{ base: 20 }}
                        width={{ base: 20 }}
                      />

                      {link.label}
                    </Group>
                  </Anchor>
                ))}
              </Flex>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, xs: 6, md: 3 }}>
            <Flex
              direction={'column'}
              align={{ base: 'center', xs: 'start' }}
              gap={'xl'}
            >
              <Title order={4}>Our Mobile App</Title>

              <Flex
                align={{ base: 'center', xs: 'start' }}
                direction={'column'}
              >
                <Text inherit ta={{ base: 'center', xs: 'start' }}>
                  Download our App and get the latest Breaking News Alerts and
                  latest headlines and daily articles near you.
                </Text>

                <Flex
                  align={'center'}
                  gap={'xs'}
                  justify={{ base: 'center', xs: 'start' }}
                >
                  <Anchor href={'/'}>
                    <ImageBrand
                      staticImage={images.icons.store.apple}
                      height={{ base: 64 }}
                      width={{ base: 104 }}
                    />
                  </Anchor>

                  <Anchor href={'/'}>
                    <ImageBrand
                      staticImage={images.icons.store.google}
                      height={{ base: 64 }}
                      width={{ base: 104 }}
                    />
                  </Anchor>
                </Flex>
              </Flex>
            </Flex>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={'partial-footer-topicx'} margined>
        <Stack>
          <Title order={3} ta={{ base: 'center', xs: 'start' }}>
            Hot Topics
          </Title>

          <Flex
            gap={'md'}
            align={'center'}
            wrap="wrap"
            justify={{ base: 'center', xs: 'start' }}
          >
            {tags.map((tag, index) => (
              <Anchor key={index} href={'#'} fw={500} className={classes.link}>
                {tag}
              </Anchor>
            ))}
          </Flex>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id={'partial-footer-fine-print'}
        pt={SECTION_SPACING / 1.5}
        pb={SECTION_SPACING * 1.5}
        bg={
          'light-dark(var(--mantine-color-priLight-9), var(--mantine-color-priLight-8))'
        }
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: 'center', sm: 'space-between' }}
          align={'center'}
          gap={'xs'}
          fw={500}
        >
          <Text inherit ta={'center'}>
            © {new Date().getFullYear()} {appData.name.app}. All Rights
            Reserved.
          </Text>

          <Group>
            {linkSets.legal.map((link) => (
              <Anchor
                key={link.link}
                href={link.link}
                title={link.label}
                className={classes.link}
                inherit
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Flex>
      </LayoutSection>
    </div>
  );
}

const linkSets = {
  navigation: [
    { label: 'Features', link: '#Features' },
    { label: 'Style Guide', link: '#Guide' },
    { label: 'Career', link: '#Career' },
    { label: 'Contact us', link: '#Contact' },
    { label: 'Get Theme', link: '#Theme' },
    { label: 'Support', link: '#Support' },
    { label: 'News', link: '#News' },
    { label: 'Technology', link: '#Technology' },
    { label: 'Startups', link: '#Startups' },
    { label: 'Gadgets', link: '#Gadgets' },
  ],

  legal: [
    { label: 'Terms', link: '#terms' },
    { label: 'Privacy', link: '#privacy' },
    { label: 'Cookies', link: '#cookies' },
  ],

  community: [
    {
      label: 'Facebook',
      link: '#Facebook',
      image: images.icons.social.facebook,
    },
    {
      label: 'Twitter',
      link: '#Twitter',
      image: images.icons.social.twitterx,
    },
    {
      label: 'Linkedin',
      link: '#Linkedin',
      image: images.icons.social.linkedin,
    },
    {
      label: 'Instagram',
      link: '#Instagram',
      image: images.icons.social.instagram,
    },
  ],
};

const tags = [
  'Covid-19',
  'Politics',
  'Entertainment',
  'Media',
  'Royalist',
  'World',
  'Half',
  'Full',
  'Scouted',
  'Travel',
  'Beast',
  'Inside',
  'Crossword',
  'Newsletters',
  'Podcasts',
  'Auction',
  '2022',
  'Protests',
  'NewsCyber',
  'Education',
  'Sports',
  'Tech',
  'And',
  'Auto',
  'Opinion',
  'Share',
  'Market',
];
