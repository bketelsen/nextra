export default {
  repository: 'https://github.com/bketelsen/nextra',
  branch: 'core',
  path: '/examples/docs',
  titleSuffix: ' – CueBlox',
  logo: (
    <>
      <span className="font-extrabold hidden md:inline">CueBlox</span>
      <span className="mr-2 ml-2 text-gray-600 font-normal hidden md:inline">
        Do More with your Content
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="CueBlox: do more with your content" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cueblox" />
      <meta property="og:title" content="CueBlox: do more with your content" />
      <meta property="og:description" content="CueBlox: do more with your content" />
      <meta name="apple-mobile-web-app-title" content="CueBlox" />
    </>
  ),
  search: false,
  UNSTABLE_stork: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerEditOnGitHubText: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © CueBlox.</>
}
