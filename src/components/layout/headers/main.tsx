import React from 'react';
import { Anchor, Divider, Group } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { dataSocials } from '@/app/(marketing)/contact/page';
import ImageDefault from '@/components/common/images/default';
import { links } from '@/data/links';
import MenuTheme from '@/components/common/menus/theme';

export default function Main() {
  return (
    <>
      <LayoutSection id="header-content" padded="sm" visibleFrom="xs">
        <Group justify="space-between">
          <Group gap={'lg'}>
            {links.header.map((item) => (
              <Anchor
                key={item.link}
                href={item.link}
                underline="hover"
                inherit
                fz={{ base: 'xs', xl: 'sm' }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          <Group>
            <MenuTheme />

            <Group gap={'xs'}>
              {dataSocials.map((social) => (
                <Anchor
                  key={social.link}
                  title={social.label}
                  href={social.link}
                >
                  <ImageDefault
                    src={social.image}
                    alt={social.label}
                    height={{ base: 20 }}
                    width={{ base: 20 }}
                  />
                </Anchor>
              ))}
            </Group>
          </Group>
        </Group>
      </LayoutSection>

      <LayoutSection id="header-divider">
        <Divider color="var(--mantine-color-default-border)" />
      </LayoutSection>
    </>
  );
}
