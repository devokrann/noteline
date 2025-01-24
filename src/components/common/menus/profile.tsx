import { ICON_SIZE, ICON_WRAPPER_SIZE } from '@/data/constants';
import {
  ActionIcon,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import React from 'react';

export default function Profile() {
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
        <ActionIcon
          size={ICON_WRAPPER_SIZE}
          variant="transparent"
          color={'var(--mantine-color-text)'}
        >
          <IconDots size={ICON_SIZE} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        <MenuItem>Copy link to profile</MenuItem>
        <MenuItem>Mute author</MenuItem>
        <MenuItem>Block this author</MenuItem>
        <MenuItem>Report this author</MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
