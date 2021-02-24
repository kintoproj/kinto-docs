module.exports = {
  title: "KintoHub",
  tagline:
    "Follow our examples and guides to deploy your full stack app in no time.",
  url: "https://kintohub.com",
  baseUrl: "/",
  organizationName: "kintohub",
  projectName: "kintohub",
  favicon: "favicon.ico",
  themeConfig: {
    image: "https://www.kintohub.com/img/kintohub-og.png",
    colorMode: {
      disableSwitch: false,
    },
    prism: {
      theme: require("./src/js/monokaiTheme.js"),
    },
    navbar: {
      title: "KintoHub",
      // image: "img/redux-logo-landscape.png",
      logo: {
        alt: "Kinto Logo",
        src: "img/kinto.svg",
      },
      items: [
        {
          label: "Get Started",
          to: "getting-started/introduction",
          position: "right",
        },
        {
          label: "Features",
          to: "features/environment",
          position: "right",
        },
        {
          label: "Examples",
          to: "examples/nodejs/nodejs-example",
          position: "right",
        },
        { label: "Blog", to: "blog", position: "right" },
        {
          label: "Login",
          to: "https://app.kintohub.com/login",
          position: "right",
        },
        //{ label: 'FAQ', to: 'getting-started/faq', position: 'right' },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          items: [
            {
              html: `
                  <a href="" target="_blank" rel="noreferrer noopener" >
                    <div class="footerLogo"></div>
                  </a>
                `,
            },
            {
              label: "Get Started",
              to: "/getting-started/introduction",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Examples",
              to: "/examples/nodejs/nodejs-example",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack Community",
              href: "https://join.slack.com/t/kintogoons/signup",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/kintohub/",
            },
          ],
        },
      ],

      copyright: `<p style="text-align:left;">Open-sourced with Apache 2.0 License.</p>`,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX,
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: "UA-112004187-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
