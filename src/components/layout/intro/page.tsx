'use client';

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import {
  BackgroundImage,
  Container,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import BreadcrumbMain from '@/components/common/breadcrumbs/main';
import { crumbify } from '@/utilities/formatters/string';
import { SECTION_SPACING } from '@/data/constants';

type Props = {
  props?: {
    path?: string | React.ReactNode;
    title?: string;
    desc?: string | React.ReactNode;
  };
  options?: {
    spacing?: 'margin' | 'padding';
    bgImage?: string;
    withoutCumbs?: boolean;
    containerized?: string;
  };
};

export default function Page({ props, options }: Props) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  return (
    <LayoutSection
      id={'layout-intro-page'}
      padded={options?.spacing == 'padding' || undefined}
      margined={options?.spacing == 'margin' || true}
      containerized={options?.containerized as any}
    >
      <BackgroundImage
        src={options?.bgImage || ''}
        radius="md"
        py={options?.bgImage ? SECTION_SPACING * 2 : undefined}
        pos={'relative'}
        style={{ overflow: 'hidden' }}
      >
        {options?.bgImage && (
          <Overlay color="#000" backgroundOpacity={0.6} style={{ zIndex: 0 }} />
        )}

        <Stack pos={'relative'}>
          {props?.path &&
            (typeof props.path == 'string' ? (
              <Text
                fw={'bold'}
                ta={'center'}
                c={'pri.6'}
                tt={'uppercase'}
                fz={'sm'}
              >
                {props.path ? props.path : segments[segments.length - 1].label}
              </Text>
            ) : (
              <Group justify="center">{props.path}</Group>
            ))}

          <Container size={'sm'}>
            <Stack>
              <Title
                order={1}
                ta={'center'}
                fz={48}
                c={options?.bgImage ? 'white' : undefined}
              >
                {props?.title || segments[segments.length - 1].label}
              </Title>

              {!options?.withoutCumbs && (
                <Group justify={'center'} pb={'xs'}>
                  <BreadcrumbMain
                    props={segments}
                    options={{ bg: options?.bgImage ? true : false }}
                  />
                </Group>
              )}

              {props?.desc &&
                (typeof props.desc == 'string' ? (
                  <Text ta={'center'} fz={'xl'}>
                    {props.desc}
                  </Text>
                ) : (
                  <Group justify="center">{props.desc}</Group>
                ))}
            </Stack>
          </Container>
        </Stack>
      </BackgroundImage>
    </LayoutSection>
  );
}
