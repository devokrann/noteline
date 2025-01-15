import { linkify } from '@/utilities/formatters/string';
import {
  Anchor,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import React from 'react';
import classes from './featured.module.scss';
import ImageDefault from '../../images/default';
import { ICON_SIZE } from '@/data/constants';
import { PostRelations } from '@/types/models/post';
import BadgePost from '../../badges/post';
import FooterCardPost from '@/components/layout/footers/card/post';

export default function Featured({
  props,
  minimal,
  newest,
}: {
  props: PostRelations;
  minimal?: boolean;
  newest?: boolean;
}) {
  return (
    <Card
      shadow="xs"
      radius={'md'}
      bg={'transparent'}
      c={'white'}
      padding={0}
      h={'100%'}
      className={classes.card}
    >
      <Overlay style={{ zIndex: 0 }}>
        <ImageDefault
          src={props.image}
          alt={props.title}
          height={{ base: '100%' }}
          width={{ base: '100%' }}
          mode="wide"
          className={classes.image}
        />

        <Overlay color="#000" backgroundOpacity={0.4} style={{ zIndex: 0 }} />
      </Overlay>

      {newest && (
        <Group justify="center" className={classes.newest}>
          <IconStarFilled size={ICON_SIZE} />
        </Group>
      )}

      <Stack
        p={minimal ? 'lg' : 'xl'}
        pos={'relative'}
        h={'100%'}
        justify="end"
      >
        {props.category?.title && (
          <Anchor
            href={`/blog/categories/${linkify(props.category.title)}-${props.category.id}`}
          >
            <Group>
              <BadgePost props={props.category} />
            </Group>
          </Anchor>
        )}

        <Anchor
          c={'inherit'}
          underline="hover"
          href={`/blog/${linkify(props.title)}-${props.id}`}
        >
          <Title order={3} fz={!minimal ? 32 : 'xl'} fw={'bold'} lineClamp={2}>
            {props.title}
          </Title>
        </Anchor>

        {!minimal && <Text fz={'sm'}>{props.excerpt}</Text>}

        <FooterCardPost
          props={props}
          options={{ minimal, withBgImage: true }}
        />
      </Stack>
    </Card>
  );
}
