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

export default function Post() {
  return (
    <Menu
      shadow="md"
      width={220}
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
        <MenuItem
          leftSection={
            <IconCirclePlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          <Stack gap={0}>
            <Text component="span" inherit>
              Show more
            </Text>
            <Text component="span" inherit fz={'xxs'}>
              Recommend more stories like this to me.
            </Text>
          </Stack>
        </MenuItem>
        <MenuItem
          leftSection={
            <IconCircleMinus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          <Stack gap={0}>
            <Text component="span" inherit>
              Show less
            </Text>
            <Text component="span" inherit fz={'xxs'}>
              Recommend fewer stories like this to me.
            </Text>
          </Stack>
        </MenuItem>

        <MenuDivider />

        <MenuItem>Follow author</MenuItem>

        <MenuDivider />

        <MenuItem>Mute author</MenuItem>
        <MenuItem color="red.6">Report story</MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
