import { ICON_WRAPPER_SIZE } from '@/data/constants';
import { ProfileRelations } from '@/types/models/profile';
import {
  Avatar,
  Card,
  Text,
  Title,
  Button,
  Grid,
  GridCol,
  Stack,
  Group,
  Anchor,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Follow({ props }: { props: ProfileRelations }) {
  return (
    <Card bg={'transparent'} padding={0}>
      <Grid gutter={'xs'} columns={20}>
        <GridCol span={3}>
          <Anchor inherit component={Link} href={`/${props.userName}`}>
            <Group>
              <Avatar src={props.avatar} size={ICON_WRAPPER_SIZE * 1.25} />
            </Group>
          </Anchor>
        </GridCol>

        <GridCol span={12}>
          <Stack gap={4}>
            <Title order={2} fw={'bold'} fz={'md'}>
              <Anchor
                inherit
                c={'var(--mantine-color-black)'}
                component={Link}
                href={`/${props.userName}`}
              >
                {`${props.firstName || ''} ${props.lastName}`.trim() ||
                  props.userName}
              </Anchor>
            </Title>

            <Text fz={'xs'} lineClamp={2}>
              {props.bio}
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={5}>
          <Group justify="end">
            <Button size="compact-md" fz={'xs'} variant="outline">
              Follow
            </Button>
          </Group>
        </GridCol>
      </Grid>
    </Card>
  );
}
