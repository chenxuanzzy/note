import type { NavbarConfig, SidebarConfig } from "vuepress-theme-mix";

export const navbar: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Coding",
    link: "/coding/",
  },
  {
    text: "Course",
    link: "/course/",
  },
  {
    text: "About",
    link: "/about/",
  },
  {
    text: "GitHub",
    link: "https://github.com/chenxuanzzy",
  },
  {
    text: "Connect",
    children: [
      {
        text: "FaceBook",
        link: "https://www.facebook.com/chenxuanzhao202011",
      },
      {
        text: "Linked",
        link: "chenxsuan019@gmail.com",
      },
      "/CHANGELOG.md",
    ],
  },
];

export const sidebar: SidebarConfig = {
  "/coding/": [
    "",
    {
      type: "group",
      text: "LeetCode",
      link: "leetcode",
      children: [
        // {
        //   type: "group",
        //   text: "Easy",
        //   link: "easy",
        //   children: ["RomanToInteger", "MergeTwoSortedLists"],
        // },
        {
          type: "group",
          text: "Medium",
          link: "medium",
          children: [
            "LongestSubstringWithoutRepeatingCharacters",
            "MinimumSizeSubarraySum",
          ],
        },
      ],
    },
    {
      type: "group",
      text: "JavaScript - 30",
      link: "javascript30",
      children: ["", "01-JavaScriptDrumKit", "02-JSandCSSClock"],
    },
    {
      type: "group",
      text: "Vue - projects",
      link: "",
      children: [],
    },
    {
      type: "group",
      text: "Vue - tutorial",
      link: "",
      children: [],
    },
    {
      type: "group",
      text: "Tailwindcss",
      link: "",
      children: [],
    },
    {
      type: "group",
      text: "Contribution",
      link: "contribution",
      children: ["codimd-modify"],
    },
  ],
  "/course/": [
    "",
    {
      type: "group",
      text: "Udemy",
      link: "udemy",
      children: [
        // {
        //   type: "group",
        //   text: "JavaScript Algorithms and DataStructures",
        //   link: "JavaScriptAlgorithmsandDataStructures",
        //   children: ["Section1-Intro", "Section2-BigOnotation"],
        // },
      ],
    },
  ],
  "/回顧/": [
    "",
    {
      type: "group",
      text: "Life",
      link: "Life",
      children: [
        // {
        //   type: "group",
        //   text: "JavaScript Algorithms and DataStructures",
        //   link: "JavaScriptAlgorithmsandDataStructures",
        //   children: ["Section1-Intro", "Section2-BigOnotation"],
        // },
      ],
    },
  ],
};

export const tags: String[] = [
  "maction",
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msubsup",
  "msub",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "msup",
  "semantics",
  "annotation",
  "annotation-xml",
  "mjx-container",
];
