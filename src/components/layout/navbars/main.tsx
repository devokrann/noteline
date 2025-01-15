'use client';

import React from 'react';

import Link from 'next/link';

import {
  Group,
  Button,
  Anchor,
  Grid,
  GridCol,
  Center,
  ActionIcon,
} from '@mantine/core';

import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import MenuUser from '@/components/common/menus/user';
import MenuNavbar from '@/components/common/menus/navbar';
import DrawerUser from '@/components/common/drawers/user';
import { SignIn as WrapperSignIn } from '@/components/wrapper/auth';
import { SignUp as WrapperSignUp } from '@/components/wrapper/auth';
import classes from './main.module.scss';
import { IconChevronDown, IconLogin2 } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/hooks/redux';
import ImageBrand from '@/components/common/images/brand';
import { links } from '@/data/links';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean };
}) {
  const session = useAppSelector((state) => state.session.value);
  const pathname = usePathname();
  const desktop = useMediaQuery('(min-width: 62em)');
  const mobile = useMediaQuery('(max-width: 36em)');

  const matchesPath = (link: string) => {
    return pathname == link || (link != '/' && pathname.includes(link));
  };

  const navLinks = links.navbar.map((link) => (
    <MenuNavbar key={link.link} subLinks={link.subLinks}>
      {!link.subLinks ? (
        <Anchor
          component={Link}
          href={link.link}
          className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
            matchesPath(link.link) ? classes.linkActive : ''
          }`}
        >
          {link.label}
        </Anchor>
      ) : (
        <Anchor
          component={Link}
          href={link.link}
          className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
            matchesPath(link.link) ? classes.linkActive : ''
          }`}
          onClick={(e) => e.preventDefault()}
        >
          <Group gap={4}>
            <span>{link.label}</span>
            <IconChevronDown
              size={ICON_SIZE}
              stroke={ICON_STROKE_WIDTH}
              style={{ marginTop: 2 }}
            />
          </Group>
        </Anchor>
      )}
    </MenuNavbar>
  ));

  const imageBrand = <ImageBrand height={{ base: 40 }} width={{ base: 88 }} />;

  return (
    <LayoutSection
      id={'partial-navbar-main'}
      pos={options?.absolute ? 'absolute' : undefined}
      left={options?.absolute ? 0 : undefined}
      top={options?.absolute ? 0 : undefined}
      right={options?.absolute ? 0 : undefined}
      style={{ zIndex: 1 }}
    >
      <Grid align="center" gutter={0}>
        <GridCol span={{ base: 4, md: 2 }}>
          <Group gap={'lg'} visibleFrom="md">
            <Anchor component={Link} href={'/'}>
              {imageBrand}
            </Anchor>
          </Group>

          <Group hiddenFrom="md" gap={'xs'} justify="space-between">
            <DrawerNavbarMain
              props={links.navbar}
              options={{ absolute: options?.absolute }}
            />
          </Group>
        </GridCol>

        <GridCol span={{ base: 4 }} hiddenFrom="md">
          <Center>
            <Anchor component={Link} href={'/'} py={'md'}>
              {imageBrand}
            </Anchor>
          </Center>
        </GridCol>

        <GridCol span={{ base: 4, md: 8 }} visibleFrom="md">
          <Group component={'nav'} justify="center">
            {navLinks}
          </Group>
        </GridCol>

        <GridCol span={{ base: 4, md: 2 }}>
          <Group justify="end">
            {!session ? (
              <Group gap={'xs'}>
                <WrapperSignIn>
                  {mobile ? (
                    <Group>
                      <ActionIcon size={ICON_WRAPPER_SIZE} variant="light">
                        <IconLogin2
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ActionIcon>
                    </Group>
                  ) : (
                    <Button
                      size="xs"
                      variant={options?.absolute ? 'outline' : 'light'}
                      color={options?.absolute ? 'white' : undefined}
                    >
                      Log In
                    </Button>
                  )}
                </WrapperSignIn>

                <WrapperSignUp>
                  <Button size="xs" visibleFrom="md">
                    Sign Up
                  </Button>
                </WrapperSignUp>
              </Group>
            ) : desktop ? (
              <MenuUser />
            ) : (
              <DrawerUser />
            )}
          </Group>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
