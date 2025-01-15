import { CategoryGet } from '@/types/models/category';
import { linkify } from '@/utilities/formatters/string';
import { Anchor, Card, Center, Overlay, Text } from '@mantine/core';
import React from 'react';
import classes from './category.module.scss';
import ImageDefault from '../images/default';

export default function Category({ props }: { props: CategoryGet }) {
  return (
    <Anchor
      href={`/blog/categories/${linkify(props.title)}-${linkify(props.id)}`}
      underline="hover"
      fw={'bold'}
      c={'white'}
    >
      <Card bg={'transparent'} padding={0} className={classes.card}>
        <Overlay style={{ zIndex: 0 }}>
          <ImageDefault
            src={props.image || ''}
            alt={props.title}
            height={{ base: '100%' }}
            width={{ base: '100%' }}
            mode="wide"
            className={classes.image}
            radius={'md'}
          />

          <Overlay color="#000" backgroundOpacity={0.4} style={{ zIndex: 0 }} />
        </Overlay>

        <Center pos={'relative'} p={'lg'}>
          <Text component={'span'} inherit c={'white'}>
            {props.title}
          </Text>
        </Center>
      </Card>
    </Anchor>
  );
}
