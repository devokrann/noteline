import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { NavLink } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import classes from './about.module.scss';

export default function About({
  props,
}: {
  props: { link: string; label: string };
}) {
  return (
    <NavLink
      label={props.label}
      rightSection={
        <IconArrowRight size={ICON_SIZE * 2} stroke={ICON_STROKE_WIDTH} />
      }
      component={Link}
      href={props.link}
      classNames={classes}
    />
  );
}
