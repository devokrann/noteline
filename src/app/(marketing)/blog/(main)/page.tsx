import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { postsGet } from '@/handlers/requests/database/post';
import { PostRelations } from '@/types/models/post';
import PartialPosts from '@/components/partial/posts';
import { REVALIDATE } from '@/data/constants';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export default async function Blog() {
  const { posts }: { posts: PostRelations[] } = await postsGet();

  return (
    <LayoutPage>
      <LayoutSection id={'page-blog-grid'} margined containerized={false}>
        <PartialPosts posts={posts} />
      </LayoutSection>
    </LayoutPage>
  );
}
