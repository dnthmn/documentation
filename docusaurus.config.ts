import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "dnthmn",
  tagline: "Documentation",
  favicon: "img/favicon.ico",

  url: "https://dnthmn.github.io",
  baseUrl: "/documentation/",

  organizationName: "dnthmn",
  projectName: "documentation",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/dnthmn",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/dnthmn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "keywords", content: "documentation, docs, dnthmn, git, github" },
    ],
    headTags: [
      {
        tagName: "link",
        attributes: {
          rel: "preconnect",
          href: "https://github.com/dnthmn",
        },
      },
    ],
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "dnthmn",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Github",
              to: "https://github.com/dnthmn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dnthmn. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
