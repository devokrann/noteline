import React from 'react';
import Link from 'next/link';
import {
  Anchor,
  Card,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { linkify } from '@/utilities/formatters/string';
import ImageDefault from '@/components/common/images/default';
import BadgePost from '../../badges/post';
import FooterCardPost from '@/components/layout/footers/card/post';

export default function Main({
  post,
  minimal,
  withoutExcerpt,
  orientation = 'vertical',
}: {
  post: PostRelations;
  minimal?: boolean;
  withoutExcerpt?: boolean;
  orientation?: 'vertical' | 'horizontal';
}) {
  const badge = (
    <Anchor
      href={`/blog/categories/${linkify(post.category?.title || '')}-${post.category?.id}`}
    >
      <Group>
        <BadgePost props={post.category} />
      </Group>
    </Anchor>
  );

  return (
    <Card
      bg={'transparent'}
      padding={0}
      pb={orientation == 'vertical' ? 'md' : undefined}
    >
      <Grid>
        <GridCol
          span={{ base: 12, sm: orientation == 'horizontal' ? 5 : undefined }}
        >
          <Group
            pos={'relative'}
            h={220}
            style={{
              borderRadius: 'var(--mantine-radius-md)',
              overflow: 'hidden',
            }}
          >
            <Overlay style={{ zIndex: 0 }}>
              <ImageDefault
                src={post.image}
                alt={post.title}
                height={{ base: 220 }}
                mode="wide"
              />

              <Overlay
                color="#000"
                backgroundOpacity={0.2}
                style={{ zIndex: 0 }}
              />
            </Overlay>

            <Stack
              pos={'relative'}
              p={'md'}
              h={'100%'}
              justify="end"
              display={orientation == 'horizontal' ? 'none' : undefined}
            >
              {post.category?.title && badge}
            </Stack>
          </Group>
        </GridCol>

        <GridCol
          span={{ base: 12, sm: orientation == 'horizontal' ? 7 : undefined }}
        >
          <Stack gap={'lg'} justify="space-between" h={'100%'}>
            <Stack>
              {orientation == 'horizontal' && <Group>{badge}</Group>}

              <Title order={3} fz={{ base: 'xl' }} lineClamp={1}>
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

              {!withoutExcerpt && <Text lineClamp={3}>{post.excerpt}</Text>}
            </Stack>

            <FooterCardPost props={post} options={{ minimal }} />
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
