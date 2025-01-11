'use client';

import {
  Anchor,
  Card,
  Container,
  createTheme,
  Notification,
  PasswordInput,
  Textarea,
  TextInput,
  virtualColor,
} from '@mantine/core';

import cx from 'clsx';

import classesNotification from './mantine/notification.module.scss';
import classesContainer from './mantine/container.module.scss';
import classesAnchor from './mantine/anchor.module.scss';

const appTheme = createTheme({
  focusClassName: 'focus',
  activeClassName: 'active',

  colors: {
    priLight: [
      '#fcf0ea',
      '#e0d6d2',
      '#c7bdb7',
      '#b0a29c',
      '#988980',
      '#7f6f67',
      '#63564f',
      '#483d38', // main (7)
      '#2d2520',
      '#150a03',
    ],

    priDark: [
      '#fef4e8',
      '#f1e7dc',
      '#ddcebd',
      '#c8b49b', // main (3)
      '#b79d7e',
      '#ad8f6b',
      '#a88760',
      '#93744f',
      '#846744',
      '#745835',
    ],

    pri: virtualColor({
      name: 'pri',
      light: 'priLight',
      dark: 'priDark',
    }),
  },

  primaryColor: 'pri',

  defaultRadius: 'md',

  primaryShade: { light: 7, dark: 3 },

  defaultGradient: {
    from: 'priLight',
    to: 'priDark',
    deg: 45,
  },

  headings: { fontFamily: 'Lora, sans-serif' },

  cursorType: 'pointer',

  components: {
    Anchor: Anchor.extend({
      defaultProps: { underline: 'never' },
      classNames: classesAnchor,
    }),

    Card: Card.extend({
      defaultProps: {
        bg: 'var(--mantine-color-pri-light)',
        c: 'var(--mantine-color-text)',
      },
    }),

    Container: Container.extend({
      defaultProps: {
        mx: 'auto',
      },

      classNames: (_: any, { size }: { size?: any }) => ({
        root: cx({ [classesContainer.root]: size === 'responsive' }),
      }),
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        // variant: 'filled',
      },
    }),

    Textarea: Textarea.extend({
      defaultProps: {
        // variant: 'filled',
      },
    }),

    PasswordInput: PasswordInput.extend({
      defaultProps: {
        // variant: 'filled',
      },
    }),

    Notification: Notification.extend({ classNames: classesNotification }),
  },
});

export default appTheme;
