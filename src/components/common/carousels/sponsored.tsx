'use client';

import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import CardBlogMain from '../cards/blog/main';
import classes from './sponsored.module.scss';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { useMediaQuery } from '@mantine/hooks';
import { PostRelations } from '@/types/models/post';

export default function Sponsored({ posts }: { posts: PostRelations[] }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const tablet = useMediaQuery('(min-width: 48em)');
  const desktop = useMediaQuery('(min-width: 62em)');
  const desktoplg = useMediaQuery('(min-width:72em)');

  const slides = posts.map((post, index) => (
    <CarouselSlide key={index}>
      <CardBlogMain post={post} minimal withoutExcerpt />
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators
      controlSize={48}
      loop
      slidesToScroll={desktoplg ? 2 : desktop ? 1 : tablet ? 2 : 1}
      slideSize={{ base: '100%', xs: '50%', md: '33.333333%', lg: '25%' }}
      slideGap={'xl'}
      nextControlIcon={
        <IconChevronRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH * 2} />
      }
      previousControlIcon={
        <IconChevronLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH * 2} />
      }
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
}
