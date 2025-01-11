import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import IntroPage from '@/components/layout/intro/page';
import IntroSection from '@/components/layout/intro/section';
import LayoutSection from '@/components/layout/section';
import {
  Card,
  Grid,
  GridCol,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconBolt, IconChartBarPopular, IconRocket } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import appData from '@/data/app';
import CardCtaNewsletter from '@/components/common/cards/cta/newsletter';

export const metadata: Metadata = { title: 'About' };

export default async function About() {
  return (
    <LayoutPage>
      <IntroPage
        props={{ title: 'About Us' }}
        options={{
          bgImage:
            'https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955_1280.jpg',
          containerized: 'md',
        }}
      />

      <LayoutSection id={'intro'} margined containerized={'md'}>
        <IntroSection
          props={{
            title: `Our Story`,
            desc: 'Founded in 2006, passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty direct me so.',
          }}
          options={{ spacing: true }}
        />

        <Grid grow>
          {points.map((point) => (
            <GridCol span={{ base: 12, xs: 6, md: 4 }} key={point.title}>
              <Card
                shadow="xs"
                padding={'xl'}
                bg={
                  'light-dark(var(--mantine-color-white), var(--mantine-color-white))'
                }
                h={'100%'}
              >
                <Stack gap={'lg'}>
                  <point.icon size={ICON_SIZE * 2} stroke={ICON_STROKE_WIDTH} />

                  <Stack gap={'xs'}>
                    <Title order={3} fz={'lg'}>
                      {point.title}
                    </Title>
                    <Text fz={'sm'}>{point.desc}</Text>
                  </Stack>
                </Stack>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id={'prose'}
        containerized={'sm'}
        bordered
        pb={SECTION_SPACING}
      >
        <Stack>
          <Text>
            By 2016, we began to see the fruits of our labor as word spread
            about our work, leading us to our first major client — a regional
            retail chain. This was a pivotal moment for us, as it allowed us to
            hire our first employee. Emma stepped up to lead user experience
            design, while Liam and I focused on coding and project management.
          </Text>
          <Text>
            As we gathered to reflect on our incredible journey, hosting a
            community event to showcase local tech talent felt like the perfect
            way to give back and inspire the next generation of innovators. It
            reminded us that with passion, collaboration, and a bit of code,
            anything is possible.
          </Text>
        </Stack>
      </LayoutSection>

      <LayoutSection id={'team'} margined containerized={'md'}>
        <IntroSection
          props={{
            title: `Our Team`,
            desc: `Meet the passionate individuals driving ${appData.name.app} forward. Our diverse team of experts brings a unique blend of skills and experience to every project, ensuring we deliver innovative and impactful solutions.`,
          }}
          options={{ spacing: true }}
        />

        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
          {team.map((member) => (
            <Card
              key={member.name}
              padding={'xl'}
              shadow="xs"
              bg={'var(--mantine-color-pri-light)'}
              h={'100%'}
            >
              <Stack gap={'lg'} align="center">
                <ImageDefault
                  src={member.image}
                  alt={member.name}
                  height={120}
                  width={120}
                  mode="grid"
                  radius={999}
                />

                <Stack gap={'xs'}>
                  <Title order={3} fz={'lg'} ta={'center'}>
                    {member.name}
                  </Title>
                  <Text fz={'sm'} ta={'center'}>
                    {member.position}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </LayoutSection>

      <LayoutSection id={'newsletter'} margined containerized={'sm'}>
        <CardCtaNewsletter />
      </LayoutSection>
    </LayoutPage>
  );
}

const points = [
  {
    icon: IconRocket,
    title: 'Empowering Innovation',
    desc: 'We consistently push the boundaries of technology, leading to unique and effective solutions.',
  },
  {
    icon: IconBolt,
    title: 'Community Approach',
    desc: 'Our commitment to giving back not only enhances their reputation but also strengthens ties within the community.',
  },
  {
    icon: IconChartBarPopular,
    title: 'Flexibility & Adaptability',
    desc: 'Our team agile work environment allows them to quickly adapt to changing market needs.',
  },
];

const team = [
  {
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Louis Ferguson',
    position: 'Editor in Chief',
  },
  {
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Frances Guerrero',
    position: 'Managing Editor',
  },
  {
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
    name: 'Larry Lawson',
    position: 'Director Graphics',
  },
  {
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    name: 'Louis Crawford',
    position: 'Editor, Coverage',
  },
];
