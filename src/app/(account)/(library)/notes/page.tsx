import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Button, Group, Title } from '@mantine/core';
import TabsNotes from '@/components/common/tabs/notes';
import { SECTION_SPACING } from '@/data/constants';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Notes' };

export default async function Notes() {
  return (
    <LayoutPage>
      <LayoutSection id="page-notifications" containerized={false}>
        <Group gap={'xl'} justify="space-between" visibleFrom="md">
          <Title order={1} fw={500}>
            Your Notes
          </Title>

          <Group gap={'xs'}>
            {/* <Button size="xs">New List</Button> */}
            <Button size="xs" variant="outline">
              Write a Story
            </Button>
          </Group>
        </Group>
      </LayoutSection>

      <LayoutSection
        id="page-notifications"
        containerized={false}
        mt={SECTION_SPACING / 2}
      >
        <TabsNotes />
      </LayoutSection>
    </LayoutPage>
  );
}
