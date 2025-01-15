'use client';

import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Badge, Card, Group, Grid, GridCol, Anchor } from '@mantine/core';
import classes from './trending.module.scss';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { linkify } from '@/utilities/formatters/string';
import { PostRelations } from '@/types/models/post';

export default function Trending({ posts }: { posts: PostRelations[] }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = posts.map((post, index) => (
    <CarouselSlide key={index}>
      <Anchor
        inherit
        href={`#${linkify(post.title)}`}
        underline="hover"
        fz={'sm'}
        c={'var(--mantine-color-text)'}
      >
        {post.title}
      </Anchor>
    </CarouselSlide>
  ));

  return (
    <Card bg={'var(--mantine-color-pri-light)'} shadow="xs" padding={'xs'}>
      <Grid columns={20} align="center">
        <GridCol span={{ base: 20, md: 2.5, lg: 2 }}>
          <Group>
            <Badge
              variant="filled"
              color="blue.6"
              radius={'sm'}
              size="lg"
              tt={'capitalize'}
            >
              Trending:
            </Badge>
          </Group>
        </GridCol>

        <GridCol span={{ base: 20, md: 17.5, lg: 18 }}>
          <Carousel
            classNames={classes}
            controlSize={24}
            loop
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slides}
          </Carousel>
        </GridCol>
      </Grid>
    </Card>
  );
}
