import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { PostRelations } from '@/types/static';
import { initialize } from '@/utilities/formatters/string';
import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function Author({ props }: { props: PostRelations['profile'] }) {
  const fullName = `${props?.firstName || ''} ${props?.lastName || ''}`.trim();

  const socials = [
    {
      icon: IconBrandFacebook,
      link: props?.facebook,
    },
    {
      icon: IconBrandTwitter,
      link: props?.twitter,
    },
    {
      icon: IconBrandLinkedin,
      link: props?.linkedin,
    },
  ];

  return (
    <Card padding={'xl'} bg={'var(--mantine-color-pri-light)'}>
      <Grid>
        <GridCol span={{ base: 12, md: 2.5 }}>
          <Stack align="center">
            <Avatar
              size={110}
              src={props?.avatar || ''}
              name={fullName}
              color={'initials'}
            >
              {initialize(fullName)}
            </Avatar>

            <Group gap={4} justify="center">
              {socials.map(
                (social, index) =>
                  social.link && (
                    <ActionIcon
                      key={index}
                      size={ICON_WRAPPER_SIZE - 4}
                      variant="light"
                      component="a"
                      href={social.link}
                      target="_blank"
                    >
                      <social.icon
                        size={ICON_SIZE - 4}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ActionIcon>
                  )
              )}
            </Group>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 9.5 }}>
          <Stack gap={'md'}>
            <Stack gap={0}>
              <Flex
                gap={'md'}
                align={{ md: 'end' }}
                justify={{ md: 'space-between' }}
              >
                <Title order={3} fz={'md'}>
                  {fullName}
                </Title>

                <Button
                  size="xs"
                  variant="light"
                  component={Link}
                  href={`/authors/${props?.id}/posts`}
                >
                  View Articles
                </Button>
              </Flex>

              {props?.position && <Text fz={'sm'}>{props.position}</Text>}
            </Stack>

            <Text fz={'sm'}>{props?.bio}</Text>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
