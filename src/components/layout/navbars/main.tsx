import React from 'react';
import Link from 'next/link';
import { Group, Button, Anchor, Center } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import { SignIn as WrapperSignIn } from '@/components/wrapper/auth';
import { SignUp as WrapperSignUp } from '@/components/wrapper/auth';
import ImageBrand from '@/components/common/images/brand';
import { links } from '@/data/links';

export default function Marketing() {
  return (
    <LayoutSection id={'partial-navbar-main'} padded={'md'} bordered>
      <Group justify="space-between">
        <Anchor component={Link} href={'/'}>
          <ImageBrand height={{ base: 40 }} width={{ base: 88 }} />
        </Anchor>

        <Group component={'nav'} justify="center" visibleFrom="md">
          {links.navbar.map((link, index) => (
            <Anchor
              key={index}
              component={Link}
              href={link.link}
              fz={'sm'}
              fw={500}
            >
              {link.label}
            </Anchor>
          ))}

          <Group gap={'xs'}>
            <WrapperSignIn>
              <Button size="xs" variant="light">
                Sign In
              </Button>
            </WrapperSignIn>

            <Center visibleFrom="sm">
              <WrapperSignUp>
                <Button size="xs">Get Started</Button>
              </WrapperSignUp>
            </Center>
          </Group>
        </Group>

        <DrawerNavbarMain
          props={links.navbar}
          burgerProps={{ hiddenFrom: 'md' }}
        />
      </Group>
    </LayoutSection>
  );
}
