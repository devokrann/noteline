import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';

import { typeParams } from '../layout';
import { categoriesGet } from '@/handlers/requests/database/category';
import { CategoryRelations } from '@/types/models/category';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import IntroPage from '@/components/layout/intro/page';
import AsideBlog from '@/components/layout/asides/blog';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const { categories }: { categories: CategoryRelations[] } =
    await categoriesGet();
  const categoryId = extractUuidFromParam(params['categoryTitle-categoryId']);

  return {
    title: categories.find((p) => p.id == categoryId)?.title,
  };
};

export default async function LayoutCategory({
  children,
  params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  const categoryId = extractUuidFromParam(params['categoryTitle-categoryId']);
  const { categories }: { categories: CategoryRelations[] } =
    await categoriesGet();
  const category = categories.find((p) => p.id == categoryId);

  return (
    <LayoutBody
      aside={{
        right: {
          component: (
            <AsideBlog
              posts={category?.posts || []}
              categories={categories}
              margined
            />
          ),
          width: { md: 25, lg: 25 },
        },
      }}
      hero={
        <IntroPage
          props={{
            // path: 'Categories',
            title: categories.find((p) => p.id == categoryId)?.title,
          }}
        />
      }
    >
      {children}
    </LayoutBody>
  );
}
