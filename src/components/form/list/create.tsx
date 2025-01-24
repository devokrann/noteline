'use client';

import { SECTION_SPACING } from '@/data/constants';
import { useFormListCreate } from '@/hooks/form/list/create';
import {
  Anchor,
  Button,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import React, { useState } from 'react';

export default function Create({
  functions,
}: {
  functions: { close: () => void };
}) {
  const [withDescription, setWithDescription] = useState(false);
  const { form, handleSubmit, submitted, lengths } = useFormListCreate();

  const lengthValidator = (currentValue: number, maxValue: number) => {
    return (
      <Text inherit fz={'xs'} ta={'end'} fw={500}>
        <Text
          component="span"
          inherit
          c={
            currentValue > maxValue
              ? 'var(--mantine-color-red-6)'
              : 'var(--mantine-color-black)'
          }
        >
          {currentValue}
        </Text>
        /{maxValue}
      </Text>
    );
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <Grid
        gutter={'lg'}
        py={SECTION_SPACING / 1.5}
        w={{ xs: '75%' }}
        mx={'auto'}
      >
        <GridCol span={12}>
          <Stack gap={6}>
            <TextInput
              required
              placeholder="Give it a name"
              {...form.getInputProps('name')}
            />

            <Group justify="end">
              {lengthValidator(
                form.values.name.trim().length,
                lengths.name.max
              )}
            </Group>
          </Stack>
        </GridCol>

        {withDescription ? (
          <GridCol span={12}>
            <Stack gap={6}>
              <Textarea
                minRows={2}
                maxRows={5}
                autosize
                placeholder="Description"
                {...form.getInputProps('description')}
              />

              <Group justify="end">
                {lengthValidator(
                  form.values.description.trim().length,
                  lengths.description.max
                )}
              </Group>
            </Stack>
          </GridCol>
        ) : (
          <Group p={'xs'}>
            <Anchor onClick={() => setWithDescription(true)} size="xs">
              Add description
            </Anchor>
          </Group>
        )}

        <GridCol span={12}>
          <Checkbox
            label="Make private"
            radius={'sm'}
            size="xs"
            key={form.key('private')}
            {...form.getInputProps('private', { type: 'checkbox' })}
          />
        </GridCol>
      </Grid>

      <Group justify="center" gap={'xs'}>
        <Button
          disabled={submitted}
          onClick={() => {
            form.reset();
            functions.close();
          }}
          variant="outline"
        >
          Cancel
        </Button>

        <Button type="submit" loading={submitted}>
          {submitted ? 'Creating' : 'Create'}
        </Button>
      </Group>
    </form>
  );
}
