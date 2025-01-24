import React from 'react';
import LayoutSection from '../section';
import { Button, Divider, Group, Stack, Title } from '@mantine/core';

export default function Main() {
  return (
    <>
      <Divider />

      <LayoutSection
        id={'cta-main'}
        padded
        bg={'var(--mantine-color-pri-light)'}
      >
        <Stack>
          <Title
            order={2}
            ta={'center'}
            fz={{ base: '2.5rem', md: '3rem', lg: '3.5rem' }}
          >
            Unlock a world of wisdom
          </Title>

          <Group justify="center">
            <Button>Get Started</Button>
          </Group>
        </Stack>
      </LayoutSection>
    </>
  );
}
