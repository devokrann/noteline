import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import IntroPage from '@/components/layout/intro/page';
import IntroSection from '@/components/layout/intro/section';
import { Grid, GridCol, Group, Title } from '@mantine/core';
import { SECTION_SPACING } from '@/data/constants';
import CardPricing from '@/components/common/cards/pricing';
import CtaMain from '@/components/layout/cta/main';

export const metadata: Metadata = { title: 'Pricing' };

export default async function Pricing() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'Support human stories',
          desc: 'Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.',
        }}
        options={{ withoutCumbs: true }}
      />

      <LayoutSection
        id={'why'}
        mt={SECTION_SPACING}
        pb={SECTION_SPACING}
        bordered
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 4 }}>
            <Group pos={'sticky'} top={SECTION_SPACING * 1.5}>
              <Title
                order={1}
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: '2.5rem', lg: '3.5rem' }}
                lh={1}
              >
                Why membership?
              </Title>
            </Group>
          </GridCol>

          <GridCol span={{ base: 12, md: 8 }}>
            <LayoutSection id={'reward'} containerized={false}>
              <IntroSection
                props={{
                  title: 'Reward writers',
                  desc: 'Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.',
                }}
                options={{ alignment: 'start' }}
              />
            </LayoutSection>

            <LayoutSection id={'reward'} containerized={false} margined>
              <IntroSection
                props={{
                  title: 'Unlock every story',
                  desc: 'Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.',
                }}
                options={{ alignment: 'start' }}
              />
            </LayoutSection>

            <LayoutSection id={'reward'} containerized={false} margined>
              <IntroSection
                props={{
                  title: 'Enhance your reading experience',
                  desc: 'Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.',
                }}
                options={{ alignment: 'start' }}
              />
            </LayoutSection>

            <LayoutSection id={'reward'} containerized={false} margined>
              <IntroSection
                props={{
                  title: 'Elevate your writing',
                  desc: 'Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.',
                }}
                options={{ alignment: 'start' }}
              />
            </LayoutSection>

            <LayoutSection id={'reward'} containerized={false}>
              <IntroSection
                props={{
                  title: 'Support a mission that matters',
                  desc: 'Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.',
                }}
                options={{ alignment: 'start' }}
              />
            </LayoutSection>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id={'why'} padded>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 4 }}>
            <Group pos={'sticky'} top={SECTION_SPACING * 1.5}>
              <Title
                order={1}
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: '2.5rem', lg: '3.5rem' }}
                lh={1}
              >
                Membership plans
              </Title>
            </Group>
          </GridCol>

          <GridCol span={{ base: 12, md: 8 }}>
            <LayoutSection id={'reward'} containerized={false}>
              <Grid>
                {tiers.map((item, index) => (
                  <GridCol key={index} span={{ base: 12, md: 6 }}>
                    <CardPricing
                      props={item}
                      options={{
                        lowerTier:
                          tiers.indexOf(item) > 0
                            ? tiers[tiers.indexOf(item) - 1].tier
                            : undefined,
                      }}
                    />
                  </GridCol>
                ))}
              </Grid>
            </LayoutSection>
          </GridCol>
        </Grid>
      </LayoutSection>

      <CtaMain />
    </LayoutPage>
  );
}

const tiers = [
  {
    tier: 'Medium Member',
    rate: '$5/month or $60/year',
    benefits: [
      'Read member-only stories',
      'Support writers you read most',
      'Earn money for your writing',
      'Listen to audio narrations',
      'Read offline with the Medium app',
      'Access our Mastodon community',
      'Connect your custom domain',
      'Create your own publications',
    ],
  },
  {
    tier: 'Friend of Medium',
    rate: '$15/month or $150/year',
    benefits: [
      'Give 4x more to the writers you read',
      'Share member-only stories with anyone and drive more earnings for writers',
      'Customize app icon',
    ],
  },
];
