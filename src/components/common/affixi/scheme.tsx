'use client';

import React from 'react';

import { Affix, AffixBaseProps, Paper } from '@mantine/core';

import WrapperTransition from '@/components/wrapper/transition';
import SegmentedControlTheme from '../segmented-control/theme';
import { useHeadroom, useWindowScroll } from '@mantine/hooks';

export default function Scheme({
  position = {
    bottom: 'var(--mantine-spacing-xl)',
    left: 0,
  },
  ...restProps
}: { position?: AffixBaseProps['position'] } & Omit<
  AffixBaseProps,
  'position' | 'children'
>) {
  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <Affix position={position} {...restProps}>
      <WrapperTransition
        transition={'slide-right'}
        mounted={scroll.y > 0 && !pinned}
        exitDelay={1000}
      >
        <Paper
          bg={'pri'}
          p={4}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <SegmentedControlTheme size="xs" />
        </Paper>
      </WrapperTransition>
    </Affix>
  );
}
