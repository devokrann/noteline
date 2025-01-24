'use client';

import { useAppSelector } from '@/hooks/redux';
import { initialize } from '@/utilities/formatters/string';
import { Avatar, MantineStyleProps, ThemeIcon } from '@mantine/core';
import React from 'react';

import classes from './main.module.scss';
import { IconUserFilled } from '@tabler/icons-react';

export default function Main({
  size = { base: 56, md: 120, lg: 56 },
}: {
  size?: MantineStyleProps['w'];
}) {
  const session = useAppSelector((state) => state.session.value);

  return !session ? (
    <ThemeIcon h={size} w={size} variant="outline" radius={'xl'}>
      <IconUserFilled size={24} />
    </ThemeIcon>
  ) : (
    <Avatar
      className={
        !session.user_metadata.avatar_url
          ? classes.avatarInitials
          : classes.avatarImage
      }
      src={session.user_metadata.avatar_url || null}
      name={session.user_metadata.name || 'User'}
      color={'initials'}
      w={size}
      h={size}
    >
      {initialize(session.user_metadata.name || 'User')}
    </Avatar>
  );
}
