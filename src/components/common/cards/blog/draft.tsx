import { estimateReadTime } from '@/services/logic/readingTime';
import { PostRelations } from '@/types/models/post';
import { getAppropriateDuration } from '@/utilities/helpers/time';
import { Card, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandXFilled } from '@tabler/icons-react';
import React from 'react';
import MenuDraft from '../../menus/draft';

export default function Draft({ props }: { props: PostRelations }) {
  const dateCreated = getAppropriateDuration(props.updatedAt || '');
  const lessThanAMinute = dateCreated?.unit == 'seconds';
  const timeElapsed = lessThanAMinute
    ? 'less than a minute'
    : `${dateCreated?.value} ${dateCreated?.unit}`;
  const readingMetrics = estimateReadTime(props.content);

  return (
    <Card bg={'transparent'} px={0}>
      <Stack gap={'xs'}>
        <Stack gap={4}>
          <Title order={2} fz={'xl'}>
            {props.title}
          </Title>

          <Text lineClamp={2}>{props.content}</Text>
        </Stack>

        <Group justify="space-between">
          <Group fz={'sm'} gap={'sm'}>
            <Text inherit>Last edited {timeElapsed} ago</Text>

            <IconBrandXFilled size={2} />

            <Text inherit>
              {readingMetrics.time} min read ({readingMetrics.words} words) so
              far
            </Text>
          </Group>

          <Group>
            <MenuDraft />
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}
