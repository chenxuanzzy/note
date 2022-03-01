import type { NavbarConfig, SidebarConfig } from 'vuepress-theme-mix';

export const navbar: NavbarConfig = [
  {
    text: '首頁',
    link: '/',
  },
  {
    text: '筆記',
    link: '/note/',
  },
  {
    text: '關於我',
    link: '/about/',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/chenxuanzzy',
  },
  {
    text: '聯絡我',
    children: [
      {
        text: 'FaceBook',
        link: 'chenxsuan019@gmail.com',
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
  '/note/': [
    {
      type: 'group',
      text: 'LeetCode',
      link: '',
      children: ['', 'RomanToInteger','MergeTwoSortedLists'],
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
