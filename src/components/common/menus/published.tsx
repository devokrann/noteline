import { ICON_SIZE, ICON_WRAPPER_SIZE } from '@/data/constants';
import {
  ActionIcon,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Tooltip,
} from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import React from 'react';

export default function Published() {
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

        <MenuItem color="red.6">Delete Draft</MenuItem>
      </MenuDropdown>
    </Menu>
  );
}

const items = ['Edit Draft'];
