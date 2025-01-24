import React from 'react';
import { Anchor, Badge, Divider, Group, Stack, Title } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import FooterAside from '../footers/aside';
import CardBlogAside from '@/components/common/cards/blog/aside';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';
import Link from 'next/link';
import { TagRelations } from '@/types/models/tag';
import { tagsGet } from '@/handlers/requests/database/tag';
import { profilesGet } from '@/handlers/requests/database/profile';
import { ProfileRelations } from '@/types/models/profile';
import CardProfileFollow from '@/components/common/cards/profile/follow';

export default async function Content() {
  const { posts }: { posts: PostRelations[] } = await postsGet();
  const { tags }: { tags: TagRelations[] } = await tagsGet();
  const { profiles }: { profiles: ProfileRelations[] } = await profilesGet();

  return (
    <LayoutSection
      containerized={false}
      id={'partial-aside-profile'}
      pos={'sticky'}
      top={0}
    >
      <Stack mih={'100vh'} justify="space-between" py={SECTION_SPACING / 2}>
        <div>
          <LayoutSection containerized={false} id={'picks'}>
            <Stack>
              <Title order={3} fz={'md'}>
                Top Picks
              </Title>

              <Stack>
                {posts.map(
                  (post) =>
                    posts.indexOf(post) < 3 && (
                      <Stack key={post.id}>
                        {posts.indexOf(post) !== 0 && <Divider />}

                        <CardBlogAside post={post} />
                      </Stack>
                    )
                )}
              </Stack>

              {posts.length > 3 && (
                <Anchor
                  inherit
                  c={'dimmed'}
                  fz={'xs'}
                  underline="hover"
                  component={Link}
                  href={'#'}
                >
                  See the full list
                </Anchor>
              )}
            </Stack>
          </LayoutSection>

          <LayoutSection
            containerized={false}
            id={'picks'}
            margined={SECTION_SPACING / 2}
          >
            <Stack>
              <Title order={3} fz={'md'}>
                Recommended Topics
              </Title>

              <Group gap={'xs'}>
                {tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    size="xl"
                    color="gray"
                    variant="light"
                    tt={'capitalize'}
                    fw={500}
                    fz={'xs'}
                    component={Link}
                    href={`/topics/${tag.id}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {tag.title}
                  </Badge>
                ))}
              </Group>

              {tags.length > 3 && (
                <Anchor
                  inherit
                  c={'dimmed'}
                  fz={'xs'}
                  underline="hover"
                  component={Link}
                  href={'/topics'}
                >
                  See more topics
                </Anchor>
              )}
            </Stack>
          </LayoutSection>

          <LayoutSection
            containerized={false}
            id={'picks'}
            margined={SECTION_SPACING / 2}
          >
            <Stack>
              <Title order={3} fz={'md'}>
                Who To Follow
              </Title>

              <Stack>
                {profiles.map(
                  (profile) =>
                    profiles.indexOf(profile) < 3 && (
                      <Stack key={profile.id}>
                        {profiles.indexOf(profile) !== 0 && <Divider />}

                        <CardProfileFollow props={profile} />
                      </Stack>
                    )
                )}
              </Stack>

              {tags.length > 3 && (
                <Anchor
                  inherit
                  c={'dimmed'}
                  fz={'xs'}
                  underline="hover"
                  component={Link}
                  href={'/activity/suggestions'}
                >
                  See more suggestions
                </Anchor>
              )}
            </Stack>
          </LayoutSection>
        </div>

        <FooterAside />
      </Stack>
    </LayoutSection>
  );
}
