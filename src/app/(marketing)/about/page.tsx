import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import IntroPage from '@/components/layout/intro/page';
import { Stack, Text } from '@mantine/core';
import { SECTION_SPACING } from '@/data/constants';
import NavlinkAbout from '@/components/common/navlink/about';
export const metadata: Metadata = { title: 'About' };

export default async function About() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'Everyone has a story to tell',
        }}
        options={{ withoutCumbs: true }}
      />

      <LayoutSection id={'hero'} margined containerized={'sm'}>
        <Stack gap={SECTION_SPACING / 2}>
          <Text>
            Medium is a home for human stories and ideas. Here, anyone can share
            knowledge and wisdom with the world—without having to build a
            mailing list or a following first. The internet is noisy and
            chaotic; Medium is quiet yet full of insight. It&apos;s simple,
            beautiful, collaborative, and helps you find the right readers for
            whatever you have to say.
          </Text>

          <Text>
            Ultimately, our goal is to deepen our collective understanding of
            the world through the power of writing
          </Text>

          <Text>
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we&apos;re building
            a system that rewards depth, nuance, and time well spent. A space
            for thoughtful conversation more than drive-by takes, and substance
            over packaging.
          </Text>

          <Text>
            Over 100 million people connect and share their wisdom on Medium
            every month. They&apos;re software developers, amateur novelists,
            product designers, CEOs, and anyone burning with a story they need
            to get out into the world. They write about what they&apos;re
            working on, what&apos;s keeping them up at night, what they&apos;ve
            lived through, and what they&apos;ve learned that the rest of us
            might want to know too.
          </Text>

          <Text>
            Instead of selling ads or selling your data, we&apos;re supported by
            a growing community of over a million Medium members who believe in
            our mission. If you&apos;re new here, start reading. Dive deeper
            into whatever matters to you. Find a post that helps you learn
            something new, or reconsider something familiar—and then write your
            story.
          </Text>
        </Stack>
      </LayoutSection>

      <div>
        <NavlinkAbout props={{ link: '#', label: 'Start reading' }} />
        <NavlinkAbout props={{ link: '#', label: 'Start writing' }} />
        <NavlinkAbout props={{ link: '/pricing', label: 'Become a member' }} />
      </div>
    </LayoutPage>
  );
}
