'use client';

import {
  Alert,
  BackgroundImage,
  Box,
  Button,
  Group,
  Text,
} from '@mantine/core';
import React, { useState } from 'react';
import WrapperTransition from '@/components/wrapper/transition';

import classes from './main.module.scss';

export default function Main() {
  const [mounted, setMounted] = useState(true);

  return (
    <WrapperTransition mounted={mounted} transition={'fade-down'}>
      <BackgroundImage
        src={
          'https://cdn.pixabay.com/photo/2021/02/05/18/05/paper-5985445_1280.jpg  '
        }
        pos={'relative'}
        style={{ overflow: 'hidden' }}
      >
        <Box
          component="span"
          pos={'absolute'}
          top={0}
          left={0}
          w={'100%'}
          h={'100%'}
          bg={'rgba(0,0,0,0.25)'}
        ></Box>

        <Alert
          variant="filled"
          withCloseButton
          onClick={() => setMounted(false)}
          classNames={classes}
          bg={'transparent'}
          pos={'relative'}
        >
          <Group justify="center">
            <Text inherit fw={500} ta={'center'}>
              Unlimited download! Starting from just $15/m
            </Text>

            <Button size="compact-xs">Grab Now!</Button>
          </Group>
        </Alert>
      </BackgroundImage>
    </WrapperTransition>
  );
}
