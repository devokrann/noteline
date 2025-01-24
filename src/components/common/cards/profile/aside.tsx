import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Text,
  Title,
  Button,
  Flex,
  Anchor,
} from '@mantine/core';
import { IconMessageCirclePlus } from '@tabler/icons-react';
import React from 'react';
import MenuProfile from '@/components/common/menus/profile';
import { getCount } from '@/utilities/formatters/number';
import { ProfileRelations } from '@/types/models/profile';
import Link from 'next/link';

export default function Profile({
  props,
  options = { orientation: 'vertical' },
}: {
  props: ProfileRelations;
  options?: { orientation?: 'horizontal' | 'vertical' };
}) {
  return (
    <Card bg={'transparent'} padding={0}>
      <Flex
        direction={{
          base: 'column',
          xs: options?.orientation === 'vertical' ? 'column' : 'row',
        }}
        justify={
          options?.orientation === 'horizontal' ? 'space-between' : undefined
        }
        align={{
          base: 'stretch',
          xs: options?.orientation === 'vertical' ? 'stretch' : 'center',
        }}
        gap={'xl'}
      >
        <Flex
          gap={'lg'}
          direction={options?.orientation === 'vertical' ? 'column' : 'row'}
          align={options?.orientation === 'vertical' ? 'stretch' : 'center'}
        >
          <Avatar
            src={props.avatar}
            size={options?.orientation === 'vertical' ? 80 : 64}
          />

          <div>
            <Title
              order={2}
              fw={'bold'}
              fz={options?.orientation === 'vertical' ? 'md' : 'xl'}
            >
              {`${props.firstName || ''} ${props.lastName || ''}`.trim() ||
                props.userName}
            </Title>

            <Anchor
              component={Link}
              href={'/activity/followers'}
              fz={'sm'}
              c={'dimmed'}
            >
              {getCount(props.followers)} followers
            </Anchor>
          </div>

          {options?.orientation === 'vertical' && (
            <Text fz={'sm'}>{props.bio}</Text>
          )}
        </Flex>

        <div>
          <Group gap={'xs'} grow preventGrowOverflow={false}>
            <Button size="xs" h={ICON_WRAPPER_SIZE}>
              Follow
            </Button>

            <ActionIcon size={ICON_WRAPPER_SIZE}>
              <IconMessageCirclePlus
                size={ICON_SIZE}
                stroke={ICON_STROKE_WIDTH}
              />
            </ActionIcon>

            <Group justify="end" hiddenFrom="md">
              <MenuProfile />
            </Group>
          </Group>
        </div>
      </Flex>
    </Card>
  );
}
