import React from 'react';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { typeParams } from '../layout';
import { postGet } from '@/handlers/requests/database/post';
import { Anchor, Stack, Text } from '@mantine/core';
import IntroPage from '@/components/layout/intro/page';
import CardBlogAuthor from '@/components/common/cards/blog/author';
import PartialComments from '@/components/partial/comments';
import { PostRelations } from '@/types/static';
import Link from 'next/link';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import BadgePost from '@/components/common/badges/post';
import { linkify } from '@/utilities/formatters/string';
import FooterCardPost from '@/components/layout/footers/card/post';
import BlogContent from '@/components/partial/blog-content';

export default async function Post({ params }: { params: typeParams }) {
  const postId = extractUuidFromParam(params['postTitle-postId']);

  if (!postId) redirect('/not-found');

  const { post }: { post: PostRelations } = await postGet({
    postId: postId,
    options: { cache: 'no-store' },
  });

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: (
            <Anchor
              component={Link}
              href={`/blog/categories/${linkify(post.category?.title || '')}-${post.category?.id}`}
            >
              <BadgePost props={post.category} />
            </Anchor>
          ),
          title: post.title,
          desc: <FooterCardPost props={post} options={{ withBgImage: true }} />,
        }}
        options={{ bgImage: post.image, withoutCumbs: true }}
      />

      <LayoutSection
        id={'page-post-content'}
        margined
        mt={'xl'}
        containerized={'sm'}
      >
        <Stack gap={'xl'}>
          <Text>{post.excerpt}</Text>

          <BlogContent content={post.content} />
        </Stack>
      </LayoutSection>

      <LayoutSection id={'page-post-author'} margined containerized={'sm'}>
        <CardBlogAuthor props={post.profile} />
      </LayoutSection>

      <PartialComments props={{ post }} />
    </LayoutPage>
  );
}
