import { SECTION_SPACING } from '@/data/constants';
import { Card, Container, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import FormNewsletter from '@/components/form/newsletter';

export default function Newsletter() {
  return (
    <Card bg={'transparent'} padding={0} pos={'relative'}>
      <Container size={'sm'}>
        <Stack gap={'xl'} py={SECTION_SPACING} align="center">
          <Stack align="center">
            <Title order={2} fz={{ base: 24, sm: 32 }} ta={'center'}>
              Subscribe to our Newsletter
            </Title>

            <Text ta={'center'} w={{ base: '100%', xs: '75%' }}>
              Subscribe to our email newsletter to get the latest posts
              delivered right to your email.
            </Text>
          </Stack>

          <Group w={{ sm: '75%' }} justify="center">
            <FormNewsletter />
          </Group>
        </Stack>
      </Container>
    </Card>
  );
}
