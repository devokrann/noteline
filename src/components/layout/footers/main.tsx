import React from 'react';
import Link from 'next/link';
import {
  Flex,
  Grid,
  Text,
  Title,
  List,
  Anchor,
  Group,
  GridCol,
  ListItem,
  Stack,
  Badge,
  Divider,
} from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import classes from './main.module.scss';
import appData from '@/data/app';
import ImageBrand from '@/components/common/images/brand';
import { images } from '@/assets/images';
import ImageDefault from '@/components/common/images/default';
import { getRandomColor } from '@/utilities/generators/color';
import { SECTION_SPACING } from '@/data/constants';

export default function Main() {
  return (
    <LayoutSection id={'partial-footer-main'} padded className={classes.footer}>
      <Grid gutter={{ base: 'xl', md: 'md' }}>
        <GridCol span={{ base: 12, md: 4.5 }}>
          <Stack ta={{ base: 'center', md: 'start' }}>
            <Flex align={'center'} justify={{ base: 'center', md: 'start' }}>
              <Anchor component={Link} href={'/'}>
                <ImageBrand height={{ base: 56 }} width={{ base: 112 }} />
              </Anchor>
            </Flex>

            <Text inherit maw={{ base: '100%', md: '85%' }}>
              At {appData.name.app}, we believe in the power of stories. From
              personal musings to professional insights, our platform is
              designed to amplify your voice and connect you with a world of
              readers. Join a vibrant community where creativity meets
              connection, and let your words leave a lasting impact.
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 7.5 }} visibleFrom="sm">
          <Grid gutter={{ base: 'xl' }}>
            <GridCol span={{ base: 6, sm: 4 }}>
              <Flex
                direction={'column'}
                align={{ base: 'center', md: 'start' }}
                gap={'xl'}
              >
                <Title order={4}>Navigation</Title>

                <Grid gutter={'xs'}>
                  {linkSets.navigation.map((link) => (
                    <GridCol key={link.link} span={6}>
                      <Flex justify={{ base: 'center', md: 'start' }}>
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

            <GridCol span={{ base: 6, sm: 4 }}>
              <Flex
                direction={'column'}
                align={{ base: 'center', md: 'start' }}
                gap={'xl'}
              >
                <Title order={4}>Browse By Tag</Title>

                <Flex
                  align={'center'}
                  gap={'xs'}
                  justify={{ base: 'center', md: 'start' }}
                  wrap={'wrap'}
                >
                  {linkSets.tags.map((link) => (
                    <Badge
                      key={link.link}
                      variant="light"
                      component={Link}
                      href={link.link}
                      title={link.label}
                      style={{ cursor: 'pointer' }}
                      radius={'md'}
                      color={getRandomColor()}
                      size="md"
                    >
                      {link.label}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </GridCol>

            <GridCol span={{ base: 6, sm: 4 }}>
              <Flex
                direction={'column'}
                align={{ base: 'center', md: 'start' }}
                gap={'xl'}
              >
                <Title order={4}>Community</Title>

                <List listStyleType="none" spacing={'xs'}>
                  {linkSets.community.map((link) => (
                    <ListItem key={link.link} className={classes.listItem}>
                      <Anchor
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
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </GridCol>
          </Grid>
        </GridCol>
      </Grid>

      <Divider
        mt={SECTION_SPACING}
        mb={SECTION_SPACING / 2}
        color="var(--mantine-color-default-border)"
      />

      <Text inherit c={'dimmed'} fz={'sm'} mt={'md'} ta={'center'}>
        © {new Date().getFullYear()} {appData.name.app}. All Rights Reserved.
      </Text>
    </LayoutSection>
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
  tags: [
    { label: 'travel', link: '#travel' },
    { label: 'business', link: '#business' },
    { label: 'tech', link: '#tech' },
    { label: 'gadgets', link: '#gadgets' },
    { label: 'lifestyle', link: '#lifestyle' },
    { label: 'vaccine', link: '#vaccine' },
    { label: 'marketing', link: '#marketing' },
    { label: 'sports', link: '#sports' },
    { label: 'politics', link: '#politics' },
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
