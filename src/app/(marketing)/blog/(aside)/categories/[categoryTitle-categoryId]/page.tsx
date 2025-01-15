import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardBlogMain from '@/components/common/cards/blog/main';
import { typeParams } from '../layout';
import { categoryGet } from '@/handlers/requests/database/category';
import { CategoryRelations } from '@/types/models/category';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';

export default async function Category({ params }: { params: typeParams }) {
  const categoryId = extractUuidFromParam(params['categoryTitle-categoryId']);

  if (!categoryId) redirect('/not-found');

  const { category }: { category: CategoryRelations } = await categoryGet({
    categoryId,
  });

  return (
    <LayoutPage>
      <LayoutSection id={'page-blog'} margined containerized={false}>
        <Grid gutter={'xl'}>
          {category.posts.map((post, index) => (
            <GridCol key={index} span={12}>
              <CardBlogMain post={post} orientation="horizontal" />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
