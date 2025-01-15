import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import { TagGet, TagRelations } from '@/types/models/tag';
import { tagsGet } from '@/handlers/requests/database/tag';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import IntroPage from '@/components/layout/intro/page';
import AsideBlog from '@/components/layout/asides/blog';
import { CategoryRelations } from '@/types/models/category';
import { categoriesGet } from '@/handlers/requests/database/category';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const { tags }: { tags: TagGet[] } = await tagsGet();
  const tagId = extractUuidFromParam(params['tagTitle-tagId']);

  return {
    title: tags.find((t) => t.id == tagId)?.title,
  };
};

export default async function LayoutTag({
  children,
  params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  const { categories }: { categories: CategoryRelations[] } =
    await categoriesGet();
  const { tags }: { tags: TagRelations[] } = await tagsGet();
  const tagId = extractUuidFromParam(params['tagTitle-tagId']);
  const tag = tags.find((t) => t.id == tagId);

  return (
    <LayoutBody
      aside={{
        right: {
          component: (
            <AsideBlog
              posts={tag?.posts || []}
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
            // path: 'Tags',
            title: tags.find((p) => p.id == tagId)?.title,
          }}
        />
      }
    >
      {children}
    </LayoutBody>
  );
}
