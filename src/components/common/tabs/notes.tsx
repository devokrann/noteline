import React from 'react';
import {
  Anchor,
  Divider,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from '@mantine/core';
import classes from './notes.module.scss';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import Link from 'next/link';
import appData from '@/data/app';
// import { profileGet } from '@/handlers/requests/database/profile';
// import { ProfileRelations } from '@/types/models/profile';
import CardBlogDraft from '../cards/blog/draft';
import CardBlogPublished from '../cards/blog/published';

export default async function Notes() {
  // const { profile }: { profile: ProfileRelations } = await profileGet({
  //   userName: 'janedoe',
  // });

  return (
    <Tabs defaultValue="drafts" keepMounted={false} classNames={classes}>
      <TabsList>
        <TabsTab value="drafts">
          Drafts{drafts && ` (${drafts.length})`}
        </TabsTab>
        <TabsTab value="published">Published</TabsTab>
        <TabsTab value="responses">Responses</TabsTab>
      </TabsList>

      <TabsPanel value="drafts">
        <LayoutSection id="tab-drafts" containerized={false} pt={'xl'}>
          {!drafts ? (
            <Stack align="center" py={SECTION_SPACING} fz={'xs'}>
              <>
                <Text inherit ta={'center'}>
                  You have no drafts.
                </Text>

                <Text inherit ta={'center'}>
                  <Anchor
                    inherit
                    underline="always"
                    component={Link}
                    href={'#'}
                  >
                    Write
                  </Anchor>{' '}
                  a story or{' '}
                  <Anchor
                    inherit
                    underline="always"
                    component={Link}
                    href={'/'}
                  >
                    read
                  </Anchor>{' '}
                  on {appData.name.app}.
                </Text>
              </>
            </Stack>
          ) : (
            <Stack>
              {drafts.map((item, index) => (
                <Stack key={index}>
                  {drafts.indexOf(item) != 0 && <Divider />}

                  <CardBlogDraft props={item} />
                </Stack>
              ))}
            </Stack>
          )}
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="published">
        <LayoutSection id="tab-published" containerized={false} pt={'xl'}>
          {!drafts ? (
            <Stack align="center" py={SECTION_SPACING} fz={'xs'}>
              <Text inherit ta={'center'}>
                You haven&apos;t published any public stories yet.
              </Text>

              <Text inherit ta={'center'}>
                Stories will appear here when you publish them.
              </Text>
            </Stack>
          ) : (
            <Stack>
              {drafts.map((item, index) => (
                <Stack key={index}>
                  {drafts.indexOf(item) != 0 && <Divider />}

                  <CardBlogPublished props={item} />
                </Stack>
              ))}
            </Stack>
          )}
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="responses">
        <LayoutSection id="tab-responses" containerized={false} pt={'xl'}>
          <Stack align="center" py={SECTION_SPACING} fz={'xs'}>
            <Text inherit ta={'center'}>
              You haven&apos;t published any public stories yet.
            </Text>

            <Text inherit ta={'center'}>
              Responses will appear here when others respond to your stories.
            </Text>
          </Stack>
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}

const drafts = [
  {
    title: 'First Story',
    content:
      'I got up, changed, and started packing. For some reason, I thought I could only pack my most precious items — even though I had about 20 minutes and had room to pack more. My parents were both outside — my mom, hosing down the house, and my dad, driving to the nearest lookout point to try and locate the fire. I went into my sister’s room to grab anything for her, and through the window, saw the embers flying from across the freeway onto our property — and rapidly moving in the 80mph Santa Ana winds towards our house. I knew it was go-time, and ran around the house looking for my parents, and soaking in the last moments I would have in my childhood home.',
    updatedAt: new Date(new Date().getTime() - 20 * 1000),
  },
  {
    title: 'My Second Story',
    content:
      'I got up, changed, and started packing. For some reason, I thought I could only pack my most precious items — even though I had about 20 minutes and had room to pack more. My parents were both outside — my mom, hosing down the house, and my dad, driving to the nearest lookout point to try and locate the fire. I went into my sister’s room to grab anything for her, and through the window, saw the embers flying from across the freeway onto our property — and rapidly moving in the 80mph Santa Ana winds towards our house. I knew it was go-time, and ran around the house looking for my parents, and soaking in the last moments I would have in my childhood home.',
    updatedAt: new Date(new Date().getTime() - 20 * 1000),
  },
];
