import React from 'react';
import {
  Anchor,
  Divider,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from '@mantine/core';
import classes from './profile.module.scss';
import LayoutSection from '@/components/layout/section';
import { SECTION_SPACING } from '@/data/constants';
import { IconCircleFilled } from '@tabler/icons-react';
import CardBlogMain from '../cards/blog/main';
import { getCount } from '@/utilities/formatters/number';
import { ProfileRelations } from '@/types/models/profile';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';

export default async function Profile({ props }: { props: ProfileRelations }) {
  const { posts }: { posts: PostRelations[] } = await postsGet();
  const filteredPosts = posts.filter(
    (p) => p.profile?.userName == props.userName
  );

  return (
    <Tabs defaultValue="stories" keepMounted={false} classNames={classes}>
      <TabsList>
        <TabsTab value="stories">Stories</TabsTab>
        <TabsTab value="about">About</TabsTab>
      </TabsList>

      <TabsPanel value="stories">
        <LayoutSection id="tab-stories" containerized={false} pt={'xl'}>
          <Stack gap={SECTION_SPACING / 2}>
            {filteredPosts
              .filter((p) => p.profile?.userName == props.userName)
              .map((post) => (
                <Stack key={post.id} gap={SECTION_SPACING / 2}>
                  {filteredPosts.indexOf(post) !== 0 && <Divider />}

                  <CardBlogMain post={post} orientation="horizontal" />
                </Stack>
              ))}
          </Stack>
        </LayoutSection>
      </TabsPanel>
      <TabsPanel value="about">
        <LayoutSection id="tab-about" containerized={false} pt={'xl'}>
          <Stack gap={SECTION_SPACING / 2}>
            <div>
              <Text>
                Poet and essayist. Author of The Unreality of Memory, The Word
                Pretty, and other books. On Twitter at @egabbert. More info at
                http://www.elisagabbert.com/
              </Text>
            </div>

            <Divider />

            <Group fz={'xs'} gap={'xs'}>
              <Anchor inherit href={'#'}>
                {getCount(props.followers)} Followers
              </Anchor>
              <IconCircleFilled size={2} />
              <Anchor inherit href={'#'}>
                {getCount(props.following)} Following
              </Anchor>
            </Group>
          </Stack>
        </LayoutSection>
      </TabsPanel>
    </Tabs>
  );
}
