import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Group, Title } from '@mantine/core';
import MenuProfile from '@/components/common/menus/profile';
import TabsProfile from '@/components/common/tabs/profile';
import { SECTION_SPACING } from '@/data/constants';
import CardProfileAside from '@/components/common/cards/profile/aside';
import { ProfileRelations } from '@/types/models/profile';
import { profileGet } from '@/handlers/requests/database/profile';
import { typeParams } from '../layout';

export default async function Profile({ params }: { params: typeParams }) {
  const { profile }: { profile: ProfileRelations } = await profileGet({
    userName: params.userName,
  });

  return (
    <LayoutPage>
      <LayoutSection id="page-notifications" containerized={false}>
        <Group hiddenFrom="md" grow>
          <CardProfileAside
            props={profile}
            options={{ orientation: 'horizontal' }}
          />
        </Group>

        <Group gap={'xl'} justify="space-between" visibleFrom="md">
          <Title order={1} fw={500}>
            {`${profile.firstName || ''} ${profile.lastName || ''}`.trim() ||
              profile.userName}
          </Title>

          <MenuProfile />
        </Group>
      </LayoutSection>

      <LayoutSection
        id="page-notifications"
        containerized={false}
        mt={SECTION_SPACING / 2}
      >
        <TabsProfile props={profile} />
      </LayoutSection>
    </LayoutPage>
  );
}
