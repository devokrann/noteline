import React from 'react';
import Link from 'next/link';
import { Anchor, Avatar, Card, Group, Stack, Text, Title } from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { linkify } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { getAppropriateDuration } from '@/utilities/helpers/time';
import HovercardAuthor from '../../hovercard/author';
import { ICON_WRAPPER_SIZE } from '@/data/constants';

export default function Aside({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;
  const duration = getAppropriateDuration(getRegionalDate(post.createdAt).date);

  return (
    <Card padding={0} bg={'transparent'}>
      <Stack gap={'xs'} align="start">
        <Anchor
          component={Link}
          inherit
          href={`/${post.profile?.userName}`}
          underline="hover"
        >
          <HovercardAuthor props={post.profile}>
            <Group gap={6}>
              <Avatar
                src={post.profile?.avatar}
                size={ICON_WRAPPER_SIZE / 1.5}
              />

              <Text fz={'xxs'} c={'var(--mantine-color-text)'}>
                {`${post.profile?.firstName || ''} ${post.profile?.lastName || ''}`.trim() ||
                  post.profile?.userName}
              </Text>
            </Group>
          </HovercardAuthor>
        </Anchor>

        <Title order={3} fz={'md'} lh={1.2} lineClamp={2}>
          <Anchor
            component={Link}
            inherit
            href={path}
            c={'inherit'}
            title={post.title}
          >
            {post.title}
          </Anchor>
        </Title>

        <Text inherit fz={'xs'} c={'dimmed'} fw={500}>
          {duration?.value}
          {duration?.unit[0]} ago
        </Text>
      </Stack>
    </Card>
  );
}
