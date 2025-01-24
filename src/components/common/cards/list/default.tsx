import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import {
  Anchor,
  Avatar,
  Box,
  Card,
  Grid,
  GridCol,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import React from 'react';
import MenuList from '../../menus/list';
import { IconLock, IconLockOpen } from '@tabler/icons-react';
import { getPartitions } from '@/utilities/generators/number';
import Link from 'next/link';
import { getCount } from '@/utilities/formatters/number';
import ImageDefault from '../../images/default';
import { ProfileRelations } from '@/types/models/profile';

export default function Default({
  props,
}: {
  props?: FlatArray<ProfileRelations['categories'], 1>;
}) {
  if (!props) {
    return;
  }

  const link = `/${props.profile?.userName}/lists/default`;

  return (
    <Card padding={0} bg={'var(--mantine-color-gray-0)'}>
      <Grid gutter={0}>
        <GridCol span={7}>
          <Stack p={'lg'}>
            <Group>
              <Anchor
                component={Link}
                href={link}
                inherit
                c={'var(--mantine-color-black)'}
              >
                <Group gap={'xs'}>
                  <Avatar
                    src={props.profile?.avatar}
                    size={ICON_WRAPPER_SIZE / 1.25}
                  />
                  <Text
                    component="span"
                    inherit
                    fz={'xs'}
                    c={'var(--mantine-color-black)'}
                  >
                    {`${props.profile?.firstName || ''} ${props.profile?.lastName}`.trim() ||
                      props.profile?.userName}
                  </Text>
                </Group>
              </Anchor>
            </Group>

            <Title order={2} fz={'xl'}>
              <Anchor
                component={Link}
                href={link}
                inherit
                c={'var(--mantine-color-black)'}
              >
                {props.title}
              </Anchor>
            </Title>

            <Group justify="space-between">
              <Group gap={'xs'}>
                <Anchor
                  component={Link}
                  href={link}
                  inherit
                  fz={'xs'}
                  c={'var(--mantine-color-text)'}
                >
                  {!props._count.posts ? 'No' : getCount(props._count.posts)}{' '}
                  stories
                </Anchor>

                <Tooltip label="Public" withArrow>
                  <Group>
                    <IconLockOpen
                      size={ICON_SIZE / 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </Group>
                </Tooltip>

                <Tooltip label="Private" withArrow>
                  <Group>
                    <IconLock
                      size={ICON_SIZE / 1.5}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </Group>
                </Tooltip>
              </Group>

              <MenuList />
            </Group>
          </Stack>
        </GridCol>

        <GridCol span={5} mih={120}>
          <Anchor
            component={Link}
            href={link}
            inherit
            c={'var(--mantine-color-black)'}
          >
            <Group h={'100%'} gap={3} wrap="nowrap">
              <Box w={`${getPartitions(3, 2, 100)[2]}%`} h={'100%'}>
                <Skeleton
                  visible={!props.posts[0]}
                  animate={false}
                  radius={0}
                  h={'100%'}
                >
                  {props.posts[0] && (
                    <ImageDefault
                      src={props.posts[0].image}
                      alt={props.posts[0].title}
                      height={{ base: '100%' }}
                      mode="grid"
                    />
                  )}
                </Skeleton>
              </Box>

              <Box w={`${getPartitions(3, 2, 100)[1]}%`} h={'100%'}>
                <Skeleton
                  visible={!props.posts[1]}
                  animate={false}
                  radius={0}
                  h={'100%'}
                >
                  {props.posts[1] && (
                    <ImageDefault
                      src={props.posts[1].image}
                      alt={props.posts[1].title}
                      height={{ base: '100%' }}
                      mode="grid"
                    />
                  )}
                </Skeleton>
              </Box>

              <Box w={`${getPartitions(3, 2, 100)[0]}%`} h={'100%'}>
                <Skeleton
                  visible={!props.posts[2]}
                  animate={false}
                  radius={0}
                  h={'100%'}
                >
                  {props.posts[2] && (
                    <ImageDefault
                      src={props.posts[2].image}
                      alt={props.posts[2].title}
                      height={{ base: '100%' }}
                      mode="grid"
                    />
                  )}
                </Skeleton>
              </Box>
            </Group>
          </Anchor>
        </GridCol>
      </Grid>
    </Card>
  );
}
