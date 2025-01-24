import React from 'react';
import Link from 'next/link';
import { Anchor, Group } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import { links } from '@/data/links';

export default function Aside() {
  return (
    <LayoutSection id={'partial-footer-main'} containerized={false}>
      <Group gap={6}>
        {links.footer.map((link, index) => (
          <Anchor key={index} component={Link} href={link.link} fz={'xxs'}>
            {link.label}
          </Anchor>
        ))}
      </Group>
    </LayoutSection>
  );
}
