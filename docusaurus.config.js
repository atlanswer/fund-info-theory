// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const TITLE = "Fundamentals of Information Theory";
const GH_URL = "https://github.com/atlanswer/fund-info-theory";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: "BER goes brrr",
  url: "https://it.waferlab.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "atlanswer", // Usually your GitHub org/user name.
  projectName: "fund-info-theory", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://unpkg.com/katex@0.16.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC",
      crossorigin: "anonymous",
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: TITLE,
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            label: "Course",
            sidebarId: "courseSidebar",
            position: "left",
          },
          {
            type: "docSidebar",
            label: "Assignment",
            sidebarId: "assignmentSidebar",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: GH_URL,
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
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
                label: "Course",
                to: "/docs/course/ch1",
              },
              {
                label: "Assignment",
                to: "/docs/assignment/ch1",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Courseware",
                href: "http://www.chencode.cn/teaching.html",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/atlanswer/fund-info-theory",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atlanswer. Built with Docusaurus.`,
      },
      prism: {},
    }),

  plugins: [],
};

async function createConfig() {
  const math = require("remark-math");
  const katex = (await import("rehype-katex")).default;
  const lightCodeTheme = require("prism-react-renderer/themes/github");
  const darkCodeTheme = require("prism-react-renderer/themes/dracula");
  config.presets[0][1].docs.remarkPlugins.push(math);
  config.presets[0][1].docs.rehypePlugins.push(katex);
  config.presets[0][1].blog.remarkPlugins.push(math);
  config.presets[0][1].blog.rehypePlugins.push(katex); // @ts-expect-error
  config.themeConfig.prism.theme = lightCodeTheme; // @ts-expect-error
  config.themeConfig.prism.darkTheme = darkCodeTheme;
  return config;
}

module.exports = createConfig;
