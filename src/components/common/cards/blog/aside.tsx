import React from 'react';
import Link from 'next/link';
import {
  Anchor,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { linkify } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { IconCircleFilled } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';

export default function Aside({ post }: { post: PostRelations }) {
  const path = `/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Grid>
      <GridCol span={4}>
        <Anchor
          component={Link}
          underline="hover"
          inherit
          href={path}
          title={post.title}
        >
          <ImageDefault
            src={post.image}
            alt={post.title}
            height={64}
            radius={'sm'}
            mode="grid"
          />
        </Anchor>
      </GridCol>

      <GridCol span={8}>
        <Stack gap={'xs'}>
          <Stack gap={4}>
            <Title order={3} fz={'sm'} lh={1.2} lineClamp={2}>
              <Anchor
                component={Link}
                underline="hover"
                inherit
                href={path}
                c={'inherit'}
                title={post.title}
              >
                {post.title}
              </Anchor>
            </Title>
          </Stack>

          <Group gap={'xs'} fz={'xs'}>
            <Text inherit>{getRegionalDate(post.createdAt).date}</Text>

            <IconCircleFilled size={4} />

            <Anchor
              component={Link}
              href={`/blog/categories/${post.category?.id}`}
              underline="never"
              inherit
            >
              {post.category?.title}
            </Anchor>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  );
}
