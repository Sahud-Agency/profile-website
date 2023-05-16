import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.8f436f3e.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.ac0a3513.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                    */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/services.astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.b090d09b.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.b090d09b.css","_astro/services.57fb0437.css"],"scripts":[],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///C:/Users/mocha/Downloads/Github/Astro/profile-website/src/content/"},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/open-sans-greek-400-normal.7bd5dafc.woff2","/_astro/open-sans-cyrillic-ext-400-normal.bbbef4da.woff2","/_astro/open-sans-vietnamese-400-normal.62829378.woff2","/_astro/open-sans-latin-400-normal.b34551ae.woff2","/_astro/open-sans-hebrew-400-normal.100ac33d.woff2","/_astro/open-sans-cyrillic-400-normal.624b7132.woff2","/_astro/open-sans-latin-ext-400-normal.140ef34d.woff2","/_astro/open-sans-cyrillic-500-normal.ef6d982a.woff2","/_astro/open-sans-greek-500-normal.53182072.woff2","/_astro/open-sans-hebrew-500-normal.e0b6ba67.woff2","/_astro/open-sans-latin-500-normal.07bbbb72.woff2","/_astro/open-sans-vietnamese-500-normal.12ff319c.woff2","/_astro/open-sans-cyrillic-ext-500-normal.c94f27a6.woff2","/_astro/open-sans-latin-ext-500-normal.6d2e3011.woff2","/_astro/open-sans-greek-300-normal.c3eb6b52.woff2","/_astro/open-sans-cyrillic-ext-300-normal.7943d7c7.woff2","/_astro/open-sans-latin-300-normal.1b2f8814.woff2","/_astro/open-sans-vietnamese-300-normal.4172bf1b.woff2","/_astro/open-sans-hebrew-300-normal.6e7e788d.woff2","/_astro/open-sans-cyrillic-300-normal.4663ff10.woff2","/_astro/open-sans-latin-ext-300-normal.d29200aa.woff2","/_astro/open-sans-cyrillic-ext-600-normal.75c2ffe3.woff2","/_astro/open-sans-greek-600-normal.2bd431b8.woff2","/_astro/open-sans-hebrew-600-normal.b94928fd.woff2","/_astro/open-sans-latin-600-normal.4ffc35ac.woff2","/_astro/open-sans-latin-ext-600-normal.05dbb1e9.woff2","/_astro/open-sans-vietnamese-600-normal.8f098b1a.woff2","/_astro/open-sans-cyrillic-600-normal.58888d26.woff2","/_astro/inter-greek-ext-300-normal.09d21325.woff2","/_astro/inter-cyrillic-ext-300-normal.66b2369e.woff2","/_astro/inter-latin-300-normal.6b2cee46.woff2","/_astro/inter-greek-300-normal.d0749e19.woff2","/_astro/inter-latin-ext-300-normal.34623012.woff2","/_astro/inter-greek-ext-800-normal.bddb6f8e.woff2","/_astro/inter-cyrillic-300-normal.cff08766.woff2","/_astro/inter-cyrillic-800-normal.82994ee8.woff2","/_astro/inter-cyrillic-ext-800-normal.f15d8f83.woff2","/_astro/inter-latin-800-normal.a51ac27d.woff2","/_astro/inter-latin-ext-800-normal.b6167428.woff2","/_astro/inter-greek-800-normal.fb5de277.woff2","/_astro/open-sans-all-400-normal.17d899f5.woff","/_astro/open-sans-all-500-normal.3d827e6d.woff","/_astro/open-sans-all-300-normal.079d4b87.woff","/_astro/open-sans-all-600-normal.ad9899b9.woff","/_astro/inter-all-300-normal.e375e256.woff","/_astro/inter-all-800-normal.ab496fbe.woff","/_astro/index.b090d09b.css","/_astro/services.57fb0437.css","/favicon.svg","/assets/img/AndroidLogo.svg","/assets/img/ArtificialIntelligence.svg","/assets/img/AudodoCoffee.png","/assets/img/Fiverr.png","/assets/img/Freelancer.png","/assets/img/HeroMonitor.png","/assets/img/LogoSahud.png","/assets/img/Narkobot.png","/assets/img/Projects.png","/assets/img/Rectangle.png","/assets/img/Savani.png","/assets/img/SolutionsBackground.png","/assets/img/Sribu.png","/assets/img/WorldWideWeb.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
