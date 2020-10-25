import { ScullyConfig, setPluginConfig, prod } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
if (prod) {
  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-116291357-1' });
  defaultPostRenderers.push(GoogleAnalytics);
}
setPluginConfig(baseHrefRewrite, { href: 'https://engel-b.github.io/smarthome-memos/' });
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "smarthome-memos",
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};