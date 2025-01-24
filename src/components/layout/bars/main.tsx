'use client';

import { Alert, Anchor, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import WrapperTransition from '@/components/wrapper/transition';

export default function Main() {
  const [mounted, setMounted] = useState(true);

  return (
    <WrapperTransition mounted={mounted} transition={'fade'}>
      <Alert
        radius={0}
        withCloseButton
        py={'xs'}
        onClick={() => setMounted(false)}
      >
        <Group justify="center" fz={'xs'}>
          <Text inherit ta={'center'}>
            Get unlimited access to the best of Medium for less than $1/week.{' '}
            <Anchor inherit href="#" underline="always" fw={500}>
              Become a member
            </Anchor>
          </Text>
        </Group>
      </Alert>
    </WrapperTransition>
  );
}
