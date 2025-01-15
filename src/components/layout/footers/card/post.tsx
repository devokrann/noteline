import { estimateReadTime } from '@/services/logic/readingTime';
import { getRegionalDate } from '@/utilities/formatters/date';
import { initialize, linkify } from '@/utilities/formatters/string';
import { generateRandomHexColor } from '@/utilities/generators/color';
import { Anchor, Avatar, Group, Text } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import React from 'react';
import classes from './post.module.scss';
import { PostRelations } from '@/types/static';

export default function Post({
  props,
  options,
}: {
  props: PostRelations;
  options: { minimal?: boolean; withBgImage?: boolean };
}) {
  return (
    <Group
      fz={'sm'}
      c={options.withBgImage ? 'var(--mantine-color-white)' : 'pri'}
      gap={'xs'}
    >
      {props.profile && (
        <Anchor
          inherit
          c={'inherit'}
          href={`/authors/${linkify(props.profile?.id)}`}
          className={classes.linkAuthor}
        >
          <Group gap={'xs'}>
            <Avatar
              src={props.profile?.avatar}
              variant="filled"
              size={32}
              color={generateRandomHexColor()}
            >
              {initialize(
                `${props.profile?.firstName || ''} ${props.profile?.lastName || ''}`.trim()
              )}
            </Avatar>

            <Text inherit>
              by{' '}
              <Text component="span" inherit className={classes.linkAuthorName}>
                {props.profile?.firstName}
              </Text>
            </Text>
          </Group>
        </Anchor>
      )}

      <IconCircleFilled size={4} />

      <Text inherit>{getRegionalDate(props.createdAt).date}</Text>

      {!options.minimal && (
        <>
          <IconCircleFilled size={4} />

          <Text inherit>{estimateReadTime(props.content)} min read</Text>
        </>
      )}
    </Group>
  );
}
