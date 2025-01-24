import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Button, Group, Title } from '@mantine/core';
import TabsLibrary from '@/components/common/tabs/library';
import { SECTION_SPACING } from '@/data/constants';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Library' };

export default async function Library() {
  return (
    <LayoutPage>
      <LayoutSection id="page-notifications" containerized={false}>
        <Group gap={'xl'} justify="space-between" visibleFrom="md">
          <Title order={1} fw={500}>
            Your Library
          </Title>

          <Group gap={'xs'}>
            <Button size="xs">New List</Button>
          </Group>
        </Group>
      </LayoutSection>

      <LayoutSection
        id="page-notifications"
        containerized={false}
        mt={SECTION_SPACING / 2}
      >
        <TabsLibrary />
      </LayoutSection>
    </LayoutPage>
  );
}
