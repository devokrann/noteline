import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import HeaderMain from '@/components/layout/headers/main';
import LayoutSection from '@/components/layout/section';
import LayoutBarMain from '@/components/layout/bars/main';
// import LayoutHeroHome from '@/components/layout/hero/home';
import CarouselTrending from '@/components/common/carousels/trending';
import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';
import CardBlogFeatured from '@/components/common/cards/blog/featured';
import {
  Button,
  Divider,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  ThemeIcon,
} from '@mantine/core';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import IntroSection from '@/components/layout/intro/section';
import { IconArrowDown } from '@tabler/icons-react';
import CardBlogMain from '@/components/common/cards/blog/main';
import CarouselSponsored from '@/components/common/carousels/sponsored';
import { postsGet } from '@/handlers/requests/database/post';
import { categoriesGet } from '@/handlers/requests/database/category';
import { PostRelations } from '@/types/models/post';
import AsideBlog from '@/components/layout/asides/blog';
import { CategoryRelations } from '@/types/models/category';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { posts }: { posts: PostRelations[] } = await postsGet();
  const { categories }: { categories: CategoryRelations[] } =
    await categoriesGet();

  return (
    <LayoutBody
      bar={<LayoutBarMain />}
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <main>
        {/* <LayoutHeroHome /> */}

        <LayoutSection id="carousel" margined={'md'}>
          <CarouselTrending posts={posts} />
        </LayoutSection>

        <LayoutSection id="main" margined mt={SECTION_SPACING / 1.5}>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 'md', lg: 'xl' }}
          >
            <Grid gutter={{ base: 'md', lg: 'xl' }}>
              <GridCol span={12} h={560}>
                <CardBlogFeatured props={posts[0]} newest />
              </GridCol>
            </Grid>

            <Grid gutter={{ base: 'md', lg: 'xl' }}>
              <GridCol span={12} h={280}>
                <CardBlogFeatured props={posts[1]} minimal />
              </GridCol>

              <GridCol span={{ base: 12, sm: 6 }} h={280}>
                <CardBlogFeatured props={posts[2]} minimal />
              </GridCol>

              <GridCol span={{ base: 12, sm: 6 }} h={280}>
                <CardBlogFeatured props={posts[3]} minimal />
              </GridCol>
            </Grid>
          </SimpleGrid>
        </LayoutSection>

        <LayoutSection id="carousel" margined mt={'sm'}>
          <Grid gutter={'xl'}>
            <GridCol span={{ base: 12, md: 8, lg: 9 }}>
              <IntroSection
                props={{
                  title: `Today's top highlights`,
                  desc: 'Latest breaking news, pictures, videos, and special reports',
                }}
                options={{ spacing: true, alignment: 'start' }}
              />

              <Grid gutter={{ md: 'xl', lg: 'md' }}>
                {posts.map(
                  (post, index) =>
                    posts.indexOf(post) < 6 && (
                      <GridCol key={index} span={{ base: 12, xs: 6, lg: 4 }}>
                        <CardBlogMain post={post} minimal />
                      </GridCol>
                    )
                )}

                <GridCol span={12}>
                  <Group justify="center">
                    <Button
                      variant="light"
                      rightSection={
                        <ThemeIcon
                          variant="outline"
                          size={ICON_SIZE - 4}
                          radius={'xl'}
                        >
                          <IconArrowDown
                            size={ICON_SIZE - 8}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ThemeIcon>
                      }
                    >
                      Load More Posts
                    </Button>
                  </Group>
                </GridCol>
              </Grid>
            </GridCol>

            <GridCol span={{ base: 12, md: 4, lg: 3 }}>
              <AsideBlog posts={posts} categories={categories} />
            </GridCol>
          </Grid>
        </LayoutSection>

        <LayoutSection id="divider">
          <Divider color={'var(--mantine-color-default-border)'} />
        </LayoutSection>

        <LayoutSection id="sponsored" margined>
          <IntroSection
            props={{
              title: `Sponsored News`,
              desc: 'Latest breaking news, pictures, videos, and special reports',
            }}
            options={{ spacing: true, alignment: 'start' }}
          />

          <CarouselSponsored posts={posts} />
        </LayoutSection>
      </main>

      <AffixTop />
      <AffixNavbar />
    </LayoutBody>
  );
}
