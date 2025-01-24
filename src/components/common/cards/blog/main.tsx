import React from 'react';
import Link from 'next/link';
import {
  ActionIcon,
  Anchor,
  Card,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { linkify } from '@/utilities/formatters/string';
import ImageDefault from '@/components/common/images/default';
import { getRegionalDate } from '@/utilities/formatters/date';
import {
  IconBookmarkPlus,
  IconCircleFilled,
  IconMessageCircleFilled,
  IconThumbUpFilled,
} from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import MenuPost from '../../menus/post';
import { getCount } from '@/utilities/formatters/number';

export default function Main({
  post,
  withoutExcerpt,
  orientation = 'vertical',
}: {
  post: PostRelations;
  minimal?: boolean;
  withoutExcerpt?: boolean;
  orientation?: 'vertical' | 'horizontal';
}) {
  return (
    <Card
      bg={'transparent'}
      padding={0}
      pb={orientation == 'vertical' ? 'md' : undefined}
    >
      <Grid gutter={'xl'}>
        <GridCol
          span={{ base: 12, xs: orientation == 'horizontal' ? 4 : undefined }}
          order={{ base: 1, xs: orientation == 'horizontal' ? 2 : undefined }}
        >
          <ImageDefault
            src={post.image}
            alt={post.title}
            height={{ base: 200, xs: 120 }}
            mode="wide"
            radius={'md'}
          />
        </GridCol>

        <GridCol
          span={{ base: 12, xs: orientation == 'horizontal' ? 8 : undefined }}
          order={{ base: 2, xs: orientation == 'horizontal' ? 1 : undefined }}
        >
          <Stack gap={'lg'} justify="space-between">
            <Stack>
              <Title
                order={3}
                fz={{ base: 'xl' }}
                lineClamp={2}
                w={{ md: '75%' }}
              >
                <Anchor
                  component={Link}
                  underline="hover"
                  inherit
                  href={`/blog/${linkify(post.title)}-${post.id}`}
                  c={'inherit'}
                  title={post.title}
                >
                  {post.title}
                </Anchor>
              </Title>

              {!withoutExcerpt && (
                <Text lineClamp={2} fz={'sm'}>
                  {post.excerpt}
                </Text>
              )}
            </Stack>

            <Group justify="space-between">
              <Group gap={'xs'} fz={'xs'} fw={500}>
                <Text inherit>{getRegionalDate(post.createdAt).date}</Text>

                <IconCircleFilled size={2} />

                <Anchor inherit href="#" c={'var(--mantine-color-text)'}>
                  <Tooltip label={'Likes'} withArrow fz={'xs'}>
                    <Group gap={4}>
                      <IconThumbUpFilled size={ICON_SIZE - 6} />

                      <Text inherit component="span">
                        {getCount(post.likes)}
                      </Text>
                    </Group>
                  </Tooltip>
                </Anchor>

                <IconCircleFilled size={2} />

                <Anchor inherit href="#" c={'var(--mantine-color-text)'}>
                  <Tooltip label={'Comments'} withArrow fz={'xs'}>
                    <Group gap={4}>
                      <IconMessageCircleFilled size={ICON_SIZE - 6} />

                      <Text inherit component="span">
                        {getCount(post._count.comments)}
                      </Text>
                    </Group>
                  </Tooltip>
                </Anchor>
              </Group>

              <Group>
                <Tooltip label={'Save'} withArrow fz={'xs'}>
                  <ActionIcon
                    size={ICON_WRAPPER_SIZE}
                    variant="transparent"
                    color={'var(--mantine-color-text)'}
                  >
                    <IconBookmarkPlus
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  </ActionIcon>
                </Tooltip>

                <MenuPost />
              </Group>
            </Group>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
