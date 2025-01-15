'use client';

import { usePaginate } from '@/hooks/paginate';
import { PostRelations } from '@/types/models/post';
import { Grid, GridCol, Group, Pagination, Stack } from '@mantine/core';
import React from 'react';
import CardBlogMain from '@/components/common/cards/blog/main';
import { SECTION_SPACING } from '@/data/constants';

export default function Posts({ posts }: { posts: PostRelations[] }) {
  const { items, activePage, setActivePage, chunkedList } = usePaginate({
    list: posts,
    pageSize: 5,
  });

  return (
    <Stack gap={SECTION_SPACING}>
      <Grid gutter={'xl'}>
        {items.map((post, index) => (
          <GridCol key={index} span={12}>
            <CardBlogMain post={post} orientation="horizontal" />
          </GridCol>
        ))}
      </Grid>

      <Group justify="center">
        <Pagination
          total={chunkedList.length}
          value={activePage}
          onChange={setActivePage}
          siblings={1}
        />
      </Group>
    </Stack>
  );
}
