'use client';

import React, { useEffect } from 'react';
import ImageDefault, { ImagePropsComponent } from './default';
import { useAppSelector } from '@/hooks/redux';
import { getBrandColorScheme } from '@/utilities/helpers/image';
import { images } from '@/assets/images';
import appData from '@/data/app';

export default function Brand({
  staticImage,
  ...restProps
}: Omit<ImagePropsComponent, 'src' | 'alt' | 'fit'> & {
  staticImage?: string;
}) {
  const colorScheme = useAppSelector((state) => state.colorScheme.value);
  useEffect(() => {}, [colorScheme]);

  return (
    <ImageDefault
      src={staticImage || getBrandColorScheme(images.brand.logo)}
      alt={appData.name.app}
      fit="contain"
      mode="grid"
      dynamic={true}
      {...restProps}
    />
  );
}
