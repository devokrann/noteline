'use client';

import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Badge, Card, Group, Grid, GridCol, Anchor } from '@mantine/core';
import classes from './trending.module.scss';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function Trending() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Card bg={'var(--mantine-color-blue-light)'} shadow="xs" padding={'xs'}>
      <Grid columns={20} align="center">
        <GridCol span={{ base: 20, md: 2.5, lg: 2 }}>
          <Group>
            <Badge
              variant="filled"
              color="blue"
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
            withIndicators
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

const trendingPosts = [
  {
    title:
      'How the 10 worst business fails of all time could have been prevented',
    link: '#',
  },
  {
    title:
      "The most common business debate isn't as black and white as you might think",
    link: '#',
  },
  {
    title: 'Lifestyle Ten tell-tale signs you need to get a new startup.',
    link: '#',
  },
  {
    title: 'Business Five intermediate guide to business',
    link: '#',
  },
  {
    title:
      'How the 10 worst business fails of all time could have been prevented',
    link: '#',
  },
  {
    title:
      "The most common business debate isn't as black and white as you might think",
    link: '#',
  },
  {
    title: 'Lifestyle Ten tell-tale signs you need to get a new startup.',
    link: '#',
  },
  {
    title: 'Business Five intermediate guide to business',
    link: '#',
  },
  {
    title:
      'How the 10 worst business fails of all time could have been prevented',
    link: '#',
  },
  {
    title:
      "The most common business debate isn't as black and white as you might think",
    link: '#',
  },
  {
    title: 'Lifestyle Ten tell-tale signs you need to get a new startup.',
    link: '#',
  },
  {
    title: 'Business Five intermediate guide to business',
    link: '#',
  },
];

const slides = trendingPosts.map((post) => (
  <CarouselSlide key={post.title}>
    <Anchor
      inherit
      href={post.link}
      underline="hover"
      fz={'sm'}
      c={'var(--mantine-color-text)'}
    >
      {post.title}
    </Anchor>
  </CarouselSlide>
));
