import React from 'react';
import {
  Anchor,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from '@mantine/core';
import classes from './library.module.scss';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import Link from 'next/link';
import CardListNew from '../cards/list/new';
import CardListDefault from '../cards/list/default';
import { profileGet } from '@/handlers/requests/database/profile';
import { ProfileRelations } from '@/types/models/profile';

export default async function Library() {
  const { profile }: { profile: ProfileRelations } = await profileGet({
    userName: 'janedoe',
  });

  return (
    <Tabs defaultValue="your-lists" keepMounted={false} classNames={classes}>
      <TabsList>
        <TabsTab value="your-lists">Your Lists</TabsTab>
        <TabsTab value="saved-lists">Saved Lists</TabsTab>
        <TabsTab value="note-history">Reading History</TabsTab>
      </TabsList>

      <TabsPanel value="your-lists">
        <LayoutSection id="tab-your-lists" containerized={false} pt={'xl'}>
          <Stack>
            <CardListNew />

            <CardListDefault
              props={profile.categories.find((c) => c.title == 'Reading List')}
            />

            {profile.categories
              .filter((c) => c.title != 'Reading List')
              .map((c) => (
                <CardListDefault key={c.id} props={c} />
              ))}
          </Stack>
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="saved-lists">
        <LayoutSection id="tab-saved-lists" containerized={false} pt={'xl'}>
          <Stack align="center" py={SECTION_SPACING} fz={'xs'}>
            <Text inherit ta={'center'}>
              You haven&apos;t saved any lists yet.
            </Text>

            <Text inherit ta={'center'}>
              Lists will appear here when you save them.
            </Text>
          </Stack>
        </LayoutSection>
      </TabsPanel>

      <TabsPanel value="note-history">
        <LayoutSection id="tab-note-history" containerized={false} pt={'xl'}>
          <Stack align="center" py={SECTION_SPACING} fz={'xs'}>
            <Text inherit ta={'center'}>
              You don&apos;t have any reading history yet.
            </Text>

            <Text inherit ta={'center'}>
              <Anchor inherit underline="always" component={Link} href={'/'}>
                Find
              </Anchor>{' '}
              stories to read.
            </Text>
          </Stack>
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}
