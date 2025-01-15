import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardBlogMain from '@/components/common/cards/blog/main';
import { typeParams } from '../layout';
import { tagGet } from '@/handlers/requests/database/tag';
import { TagRelations } from '@/types/models/tag';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';

export default async function Tag({ params }: { params: typeParams }) {
  const tagId = extractUuidFromParam(params['tagTitle-tagId']);

  if (!tagId) redirect('/not-found');

  const { tag }: { tag: TagRelations } = await tagGet({ tagId });

  return (
    <LayoutPage>
      <LayoutSection id={'page-blog'} margined containerized={false}>
        <Grid gutter={'xl'}>
          {tag.posts.map((post, index) => (
            <GridCol key={index} span={12}>
              <CardBlogMain post={post} orientation="horizontal" />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
