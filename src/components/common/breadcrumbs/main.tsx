import React from 'react';
import Link from 'next/link';
import { Anchor, Breadcrumbs, Group } from '@mantine/core';
import { IconCircleFilled, IconHome } from '@tabler/icons-react';
import classes from './main.module.scss';
import { Link as typeLink } from '@/types/link';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Main({
  props,
  options,
}: {
  props: typeLink[];
  options?: { bg: boolean };
}) {
  const active = (breadcrumb: typeLink) =>
    props.indexOf(breadcrumb) == props.length - 1;

  return (
    <Breadcrumbs
      separator={
        <IconCircleFilled
          size={4}
          color={
            options?.bg
              ? 'var(--mantine-color-white)'
              : 'var(--mantine-color-text)'
          }
        />
      }
    >
      {props.map((item) => (
        <Anchor
          key={item.link}
          component={Link}
          href={item.link}
          c={
            active(item)
              ? options?.bg
                ? 'white'
                : 'pri'
              : options?.bg
                ? 'gray.5'
                : undefined
          }
          className={classes.link}
        >
          <Group gap={4}>
            {item.link == '/' && (
              <IconHome size={ICON_SIZE - 6} stroke={ICON_STROKE_WIDTH} />
            )}
            {item.label}
          </Group>
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
