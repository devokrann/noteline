import React from 'react';
import {
  Anchor,
  Avatar,
  Button,
  Grid,
  GridCol,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { getCount } from '@/utilities/formatters/number';

export default function Author({
  props,
  children,
}: {
  props: PostRelations['profile'];
  children: React.ReactNode;
}) {
  return (
    <HoverCard
      shadow="xs"
      position="top"
      withArrow
      width={260}
      styles={{ dropdown: { padding: 'var(--mantine-spacing-lg)' } }}
      openDelay={250}
    >
      <HoverCardTarget>
        <div style={{ cursor: 'pointer' }}>{children}</div>
      </HoverCardTarget>

      <HoverCardDropdown>
        <Grid align="center" gutter={'xs'}>
          <GridCol span={{ base: 12, md: 8 }}>
            <Stack>
              <Avatar src={props?.avatar} size={'lg'} />

              <div>
                <Title order={3} fz={'md'}>
                  {`${props?.firstName || ''} ${props?.lastName || ''}`.trim() ||
                    props?.userName}
                </Title>

                <Text fz="xs">
                  {getCount(props?.followers || 0)}{' '}
                  <Anchor href={`/${props?.userName}/followers`} inherit>
                    Followers
                  </Anchor>
                </Text>
              </div>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Button size="xs">Follow</Button>
          </GridCol>

          <GridCol span={12}>
            <Text size="xs">{props?.bio}</Text>
          </GridCol>
        </Grid>
      </HoverCardDropdown>
    </HoverCard>
  );
}
