import React from 'react';
import LayoutSection from '@/components/layout/section';
import {
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';

export default function Marketing() {
  return (
    <LayoutSection id="hero" padded>
      <Grid align="center">
        <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
          <Stack gap={'xl'}>
            <Title
              order={1}
              fz={{
                base: '2.5rem',
                xs: '3.5rem',
                md: '4.5rem',
                lg: '5.5rem',
              }}
              lh={1}
              ta={{ base: 'center', md: 'start' }}
            >
              Write once, <br />
              reach the world
            </Title>

            <Text ta={{ base: 'center', md: 'start' }}>
              Turn your thoughts into threads that weave through the digital
              world
            </Text>

            <Flex justify={{ base: 'center', md: 'start' }} align={'center'}>
              <Button size="md">Start Reading</Button>
            </Flex>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
          <Group>
            <ImageDefault
              src={images.backgrounds.home}
              alt={appData.name.app}
              height={{ base: 160, md: 280, lg: 320 }}
              width={{ base: '100%' }}
              fit="contain"
              mode="wide"
            />
          </Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
