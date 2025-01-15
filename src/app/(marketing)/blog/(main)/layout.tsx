import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import appData from '@/data/app';
import AsideBlog from '@/components/layout/asides/blog';
import { CategoryRelations } from '@/types/models/category';
import { categoriesGet } from '@/handlers/requests/database/category';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';
import IntroPage from '@/components/layout/intro/page';

export const metadata: Metadata = {
  title: { default: 'Blog', template: `%s - Blog - ${appData.name.app}` },
};

export default async function LayoutBlogAside({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { posts }: { posts: PostRelations[] } = await postsGet();
  const { categories }: { categories: CategoryRelations[] } =
    await categoriesGet();

  return (
    <LayoutBody
      aside={{
        right: {
          component: (
            <AsideBlog posts={posts} categories={categories} margined />
          ),
          width: { md: 25, lg: 25 },
        },
      }}
      hero={<IntroPage />}
    >
      {children}
    </LayoutBody>
  );
}
