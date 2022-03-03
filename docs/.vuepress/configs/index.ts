import type { NavbarConfig, SidebarConfig } from 'vuepress-theme-mix';

export const navbar: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Note',
    link: '/note/',
  },
  {
    text: 'About',
    link: '/about/',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/chenxuanzzy',
  },
  {
    text: 'Connect',
    children: [
      {
        text: 'FaceBook',
        link: 'https://www.facebook.com/chenxuanzhao202011',
      },
      {
        text: 'Linked',
        link: 'chenxsuan019@gmail.com',
      },
      '/CHANGELOG.md',
    ],
  },
];

export const sidebar: SidebarConfig = {
  '/note/': ['',
    {
      type: 'group',
      text: 'LeetCode',
      link: 'leetcode',
      children: [
        {
          type: 'group',
          text: 'Easy',
          link: 'easy',
          children: ['RomanToInteger', 'MergeTwoSortedLists'],
        },
        {
          type: 'group',
          text: 'Medium',
          link: 'medium',
          children: ['LongestSubstringWithoutRepeatingCharacters','MinimumSizeSubarraySum'],
        },
      ],
    },
    {
      type: 'group',
      text: 'JavaScript - 30',
      link: 'javascript30',
      children: ['','01-JavaScriptDrumKit',
      ],
    },
    {
      type: 'group',
      text: 'Vue - projects',
      link: '',
      children: [
      ],
    },
    {
      type: 'group',
      text: 'Vue - tutorial',
      link: '',
      children: [
      ],
    },
    {
      type: 'group',
      text: 'Tailwindcss',
      link: '',
      children: [
      ],
    },
    {
      type: 'group',
      text: 'Contribution',
      link: 'contribution',
      children: ['codimd-modify'
      ],
    },
  ],
};

export const tags: String[] = [
  'maction',
  'math',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mglyph',
  'mi',
  'mlabeledtr',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mspace',
  'msqrt',
  'mstyle',
  'msubsup',
  'msub',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'msup',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
];
