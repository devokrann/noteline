import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import {
  ActionIcon,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { IconCircleMinus, IconCirclePlus, IconDots } from '@tabler/icons-react';
import React from 'react';

export default function List() {
  return (
    <Menu
      shadow="md"
      width={160}
      position="bottom-end"
      withArrow
      arrowOffset={8}
      styles={{
        item: {
          fontSize: 'var(--mantine-font-size-xs)',
        },
      }}
    >
      <MenuTarget>
        <Tooltip label={'More'} withArrow fz={'xs'}>
          <ActionIcon
            size={ICON_WRAPPER_SIZE}
            variant="transparent"
            color={'var(--mantine-color-text)'}
          >
            <IconDots size={ICON_SIZE} />
          </ActionIcon>
        </Tooltip>
      </MenuTarget>

      <MenuDropdown>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}

        <MenuItem color="red.6">Delete list</MenuItem>
      </MenuDropdown>
    </Menu>
  );
}

const items = [
  'Copy link',
  'Edit list info',
  'Remove items',
  'Make list public',
  'Reorder items',
  'Hide responses',
];
