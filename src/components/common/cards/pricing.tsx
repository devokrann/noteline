import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import {
  Button,
  Card,
  Divider,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';

export default function Pricing({
  props,
  options,
}: {
  props: { tier: string; rate: string; benefits: string[] };
  options: { lowerTier?: string };
}) {
  return (
    <Card padding={'xl'} bg={'transparent'} withBorder shadow="xs">
      <Stack gap={'xl'}>
        <div>
          <Title ta={'center'} order={3}>
            {props.tier}
          </Title>
          <Text ta={'center'}>{props.rate}</Text>
        </div>

        <Button>Get Started</Button>

        <Divider />

        <List
          size="sm"
          icon={
            <IconCheck
              size={ICON_SIZE}
              stroke={ICON_STROKE_WIDTH}
              color="var(--mantine-color-green-6)"
            />
          }
          spacing={'xs'}
        >
          {options.lowerTier && (
            <>
              <ListItem>All {options.lowerTier} benefits</ListItem>

              <Divider
                color="var(--mantine-color-pri-light)"
                label={'plus'}
                my={'sm'}
              />
            </>
          )}

          {props.benefits.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Stack>
    </Card>
  );
}
