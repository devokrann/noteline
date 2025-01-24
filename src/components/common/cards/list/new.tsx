'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import {
  ActionIcon,
  Button,
  Card,
  Center,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  ThemeIcon,
  Title,
  Transition,
} from '@mantine/core';
import { IconBookmarkPlus, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import ModalListCreate from '../../modals/list/create';

export default function New() {
  const [opened, setOpened] = useState(true);

  return (
    <Transition
      mounted={opened}
      transition="fade-down"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <Card padding={'xl'} style={{ overflow: 'hidden' }}>
            <Overlay backgroundOpacity={0} zIndex={0}>
              <Group justify="end" p={'sm'}>
                <ActionIcon
                  size={ICON_WRAPPER_SIZE}
                  variant="transparent"
                  onClick={() => setOpened(false)}
                >
                  <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Overlay>

            <Grid>
              <GridCol span={6}>
                <Stack align="start">
                  <Title order={2} fz={'xl'}>
                    Create a list to easily
                    <br /> organize and share stories.
                  </Title>

                  <ModalListCreate>
                    <Button size="xs">Start a list</Button>
                  </ModalListCreate>
                </Stack>
              </GridCol>

              <GridCol span={6} mah={120}>
                <Center h={'100%'}>
                  <ThemeIcon
                    size={ICON_WRAPPER_SIZE * 8}
                    variant="light"
                    radius={999}
                  >
                    <ThemeIcon size={ICON_WRAPPER_SIZE * 2} variant="white">
                      <IconBookmarkPlus
                        size={ICON_SIZE * 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>
                  </ThemeIcon>
                </Center>
              </GridCol>
            </Grid>
          </Card>
        </div>
      )}
    </Transition>
  );
}
