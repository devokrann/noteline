'use client';

import React from 'react';
import {
  Menu,
  Group,
  MenuTarget,
  ActionIcon,
  MenuDropdown,
  MenuItem,
} from '@mantine/core';
import { IconCircleFilled, IconPercentage50 } from '@tabler/icons-react';
import { useColorSchemeHandler } from '@/hooks/color-scheme';
import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { capitalizeWord } from '@/utilities/formatters/string';
import classes from './theme.module.scss';

export default function Theme() {
  const { colorScheme, handleChange } = useColorSchemeHandler();

  return (
    <Menu
      shadow="xs"
      width={120}
      trigger="click-hover"
      openDelay={50}
      closeDelay={50}
      transitionProps={{ transition: 'fade-up' }}
      position="bottom-end"
      classNames={classes}
    >
      <MenuTarget>
        <ActionIcon size={ICON_WRAPPER_SIZE - 4} radius={'xl'}>
          <IconPercentage50 size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleChange(option.value)}
            leftSection={
              <Group gap={'xs'}>
                <IconCircleFilled
                  size={4}
                  color={
                    colorScheme === option.value ? undefined : 'transparent'
                  }
                />
                <option.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </Group>
            }
            className={`${classes.item} ${colorScheme == option.value ? classes.itemActive : ''}`}
          >
            {capitalizeWord(option.value)}
          </MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
}

const options = [
  {
    icon: IconSun,
    value: 'light',
  },
  {
    icon: IconMoon,
    value: 'dark',
  },
  {
    icon: IconDeviceDesktop,
    value: 'auto',
  },
];
