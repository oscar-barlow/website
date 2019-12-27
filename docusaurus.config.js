module.exports = {
  title: 'Oscar Barlow',
  tagline: 'I am Oscar and this is my website',
  url: 'https://www.oscarbarlow.com',
  baseUrl: '/',
  favicon: '',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Oscar Barlow',
      links: [
        {to: 'docs/cv', label: 'cv', position: 'left'},
        {to: 'blog', label: 'blog', position: 'left'},
        {href: 'https://github.com/oscar-barlow', label: 'github', position: 'left'},
        {href: 'https://stackoverflow.com/users/3401611/oscar-barlow', label: 'stack overflow', position: 'left'},
        {href: 'https://www.strava.com/athletes/oscar-barlow', label: 'strava', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Oscar Barlow. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          feedOptions: {
            type: 'all'
          },
        }
      }
    ],
  ],
};
