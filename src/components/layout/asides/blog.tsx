import React from 'react';

import LayoutSection from '@/components/layout/section';
import CardBlogAside from '@/components/common/cards/blog/aside';
import {
  Anchor,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { CategoryRelations } from '@/types/models/category';
import CardCategory from '@/components/common/cards/category';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';
import appData from '@/data/app';
import { shuffleArray } from '@/utilities/helpers/array';

export default async function Blog({
  posts,
  categories,
  margined,
}: {
  posts: PostRelations[];
  categories: CategoryRelations[];
  margined?: boolean;
}) {
  return (
    <LayoutSection
      id={'partial-aside-blog'}
      containerized={false}
      margined={margined}
    >
      <Stack gap={'xl'}>
        <Group gap={4} grow>
          {socialStats.map((stat, index) => (
            <Anchor key={index} href={stat.link}>
              <Card bg={stat.bg} miw={72} c={'white'} shadow="xs">
                <Stack align="center" gap={4}>
                  <stat.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />

                  <div>
                    <Text ta={'center'} fz={'sm'} fw={'bold'}>
                      {stat.number}
                    </Text>

                    <Text ta={'center'} fz={'xs'}>
                      {stat.label}
                    </Text>
                  </div>
                </Stack>
              </Card>
            </Anchor>
          ))}
        </Group>

        <Stack>
          <Title order={2} fz={24}>
            Trending topics
          </Title>

          <Stack>
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 1 }}>
              {shuffleArray(categories).map(
                (cat, index) =>
                  categories.indexOf(cat) < 5 && (
                    <CardCategory key={index} props={cat} />
                  )
              )}
            </SimpleGrid>

            <Group justify="center">
              <Anchor href="#" underline="always" fw={'bold'} fz={'sm'}>
                View all categories
              </Anchor>
            </Group>
          </Stack>
        </Stack>

        <Stack>
          <Title order={2} fz={24}>
            Recent Posts
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 1 }}>
            {posts.map(
              (post, index) =>
                posts.indexOf(post) < 4 && (
                  <CardBlogAside key={index} post={post} />
                )
            )}
          </SimpleGrid>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}

const socialStats = [
  {
    bg: '#5d82d1',
    link: appData.socials.facebook.link,
    icon: IconBrandFacebook,
    number: '1.5K',
    label: 'Fans',
  },
  {
    bg: 'radial-gradient(circle at 20% 130%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    link: appData.socials.instagram.link,
    icon: IconBrandInstagram,
    number: '1.8M',
    label: 'Followers',
  },
  {
    bg: '#e60000',
    link: appData.socials.youtube.link,
    icon: IconBrandYoutube,
    number: '22K',
    label: 'Subs',
  },
];
