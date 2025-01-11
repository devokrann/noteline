'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
  Image,
  Center,
  ImageProps,
  MantineStyleProps,
  Skeleton,
} from '@mantine/core';
import { getFallbackSrc } from '@/utilities/helpers/image';
import { useEffect, useState } from 'react';

type DefaultImageProps = {
  src: string;
  alt?: string;
  height: MantineStyleProps['h'];
  width?: MantineStyleProps['w'];
  fallback?: { width: number; height: number; text: string };
  sizes?: string;
  mode?: 'default' | 'grid' | 'wide';
  decorative?: boolean;
  customSizes?: string;
  dynamic?: boolean;
};

export type ImagePropsComponent = DefaultImageProps &
  Omit<ImageProps, keyof DefaultImageProps> &
  Omit<NextImageProps, keyof DefaultImageProps>;

export default function Default({
  src,
  alt,
  fallback,
  width,
  height,
  sizes,
  mode = 'default',
  decorative,
  customSizes,
  dynamic,
  ...restProps
}: ImagePropsComponent) {
  // Define default size rules for each mode
  const sizeRules: any = {
    default:
      '(max-width: 36em) 100vw, (max-width: 62em) 75vw, (max-width: 75em) 50vw, (max-width: 88em) 40vw, 33vw',
    grid: '(max-width: 36em) 100vw, (max-width: 62em) 50vw, (max-width: 75em) 33.33vw, (max-width: 88em) 25vw, 25vw',
    wide: '100vw', // Always takes full viewport width
  };

  // Use provided sizes, mode, or custom sizes
  const resolvedSizes = sizes || customSizes || sizeRules[mode];

  if (!decorative && !alt) {
    throw new Error('Image must have alt text when not decorative');
  }

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return dynamic && !hydrated ? (
    <Skeleton w={width} h={height} />
  ) : (
    <Center pos="relative" h={height} w={width}>
      <Image
        src={src}
        alt={alt || ''}
        sizes={resolvedSizes}
        fallbackSrc={getFallbackSrc(fallback)}
        component={NextImage}
        loading={restProps.priority ? undefined : 'lazy'}
        fill
        quality={restProps.quality || 100}
        {...restProps}
      />
    </Center>
  );
}
