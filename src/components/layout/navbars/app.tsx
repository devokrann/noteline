import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Button, ActionIcon } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import ImageBrand from '@/components/common/images/brand';
import { IconBell, IconPencilPlus } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import MenuUser from '@/components/common/menus/user';
import BarMain from '../bars/main';
import ComboboxSearch from '@/components/common/combobox/search';

export default function App() {
  return (
    <>
      <LayoutSection id={'partial-navbar-main'} padded={4} bordered>
        <Group justify="space-between">
          <Group gap={'xl'}>
            <Anchor component={Link} href={'/'}>
              <ImageBrand height={{ base: 40 }} width={{ base: 88 }} />
            </Anchor>

            <Group visibleFrom="sm">
              <ComboboxSearch />
            </Group>
          </Group>

          <Group>
            <Button
              variant="transparent"
              size="xs"
              px={0}
              leftSection={
                <IconPencilPlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              Write
            </Button>

            <ActionIcon size={ICON_WRAPPER_SIZE} variant="transparent">
              <IconBell size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            <MenuUser />
          </Group>
        </Group>
      </LayoutSection>

      <BarMain />
    </>
  );
}
