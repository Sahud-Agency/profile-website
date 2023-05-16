/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, m as maybeRenderHead, f as renderComponent } from '../astro.8f436f3e.mjs';
import 'html-escaper';
/* empty css                              */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$f = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="generator"', ">\n    <title>", "</title>\n  ", "</head>\n  <body>\n    ", '\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"><\/script>\n  </body>\n</html>'])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/layouts/Layout.astro");

const $$Astro$e = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Button;
  const { type, text } = Astro2.props;
  return renderTemplate`${type === "red" ? renderTemplate`${maybeRenderHead($$result)}<button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 sm:text-md sm:px-8 sm:py-3 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans sm:block">
    ${text}
  </button>` : renderTemplate`<button type="button" class="text-red-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 sm:text-md sm:px-8 sm:py-3 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans sm:block border-red-700 border-2">
    ${text}
  </button>`}`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Hero/Button.astro");

const $$Astro$d = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$7;
  const { subtitle, title, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="lg:px-6">
  <div class="grid max-w-screen-xl px-4 pt-8 pb-6 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:pb-6 lg:grid-cols-12">
    <div class="place-self-center lg:mt-0 lg:col-span-5 col-span-full lg:flex">
      <img src="/assets/img/HeroMonitor.png" alt="mockup">
    </div>
    <div class="mr-auto place-self-center lg:col-span-7 col-span-full lg:px-0 md:px-8 px-2">
      <h3 class="font-open-sans lg:text-2xl md:text-lg text-md font-light mb-2">
        ${subtitle}
      </h3>
      <h1 class="font-inter lg:text-6xl md:text-4xl text-3xl font-extrabold text-red-600 mb-2">
        ${title}
      </h1>
      <h2 class="font-open-sans lg:text-2xl md:text-lg text-md font-semibold text-gray-400 mb-2">
        ${desc}
      </h2>
      <div class="md:w-1/2 grid gap-4 grid-cols-1 sm:grid-cols-2 mt-12">
        ${renderComponent($$result, "Button", $$Button, { "text": "Hire Us", "type": "red" })}
        ${renderComponent($$result, "Button", $$Button, { "text": "Learn More", "type": "white" })}
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Hero/index.astro");

const $$Astro$c = createAstro();
const $$LinkActive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LinkActive;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="md:border-b-red-600 md:border-b-4 md:py-3 md:px-3">
  <a${addAttribute(link, "href")} class="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white font-open-sans font-semibold" aria-current="page">${text}</a>
</div>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Navbar/LinkActive.astro");

const $$Astro$b = createAstro();
const $$LinkInactive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkInactive;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="md:border-b-white md:border-b-4 md:py-3 md:px-2">
  <a${addAttribute(link, "href")} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-open-sans">${text}</a>
</div>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Navbar/LinkInactive.astro");

const $$Astro$a = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$6;
  const path = new URL(Astro2.request.url).pathname;
  const currentPath = path.slice(1);
  return renderTemplate`${maybeRenderHead($$result)}<nav class="bg-white border-gray-200 px-3 py-3 sm:px-4 sm:py-1 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
      <img src="/assets/img/LogoSahud.png" class="h-10 sm:h-12" alt="Flowbite Logo">
    </a>
    <div class="flex md:order-2">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" class="lg:inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-200 bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-4 font-open-sans hidden">
        <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg> 
        English (US)
      </button>
      <!-- Dropdown -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul class="py-2" role="none">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white font-open-sans" role="menuitem">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg>              
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white font-open-sans" role="menuitem">
              <div class="inline-flex items-center">
                <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icons-id" viewBox="0 0 512 512">
                  <path fill="#e70011" d="M0 0h640v240H0Z"></path>
                  <path fill="#fff" d="M0 240h640v240H0Z"></path>
                </svg>
                Indonesia (ID)
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans hidden sm:block">
        Hire Us
      </button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul class="flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          ${currentPath === "" ? renderTemplate`${renderComponent($$result, "LinkActive", $$LinkActive, { "link": "/", "text": "Homepage" })}` : renderTemplate`${renderComponent($$result, "LinkInactive", $$LinkInactive, { "link": "/", "text": "Homepage" })}`}
        </li>
        <li>
          ${currentPath === "services" ? renderTemplate`${renderComponent($$result, "LinkActive", $$LinkActive, { "link": "/services", "text": "Services" })}` : renderTemplate`${renderComponent($$result, "LinkInactive", $$LinkInactive, { "link": "/services", "text": "Services" })}`}
        </li>
        <li>
          ${currentPath === "portfolio" ? renderTemplate`${renderComponent($$result, "LinkActive", $$LinkActive, { "link": "/portfolio", "text": "Portfolio" })}` : renderTemplate`${renderComponent($$result, "LinkInactive", $$LinkInactive, { "link": "/portfolio", "text": "Portfolio" })}`}
        </li>
        <li>
          ${currentPath === "blog" ? renderTemplate`${renderComponent($$result, "LinkActive", $$LinkActive, { "link": "/blog", "text": "Blog" })}` : renderTemplate`${renderComponent($$result, "LinkInactive", $$LinkInactive, { "link": "/blog", "text": "Blog" })}`}
        </li>
        <li>
          ${currentPath === "contact" ? renderTemplate`${renderComponent($$result, "LinkActive", $$LinkActive, { "link": "/contact", "text": "Contact" })}` : renderTemplate`${renderComponent($$result, "LinkInactive", $$LinkInactive, { "link": "/contact", "text": "Contact" })}`}
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Navbar/index.astro");

const $$Astro$9 = createAstro();
const $$Counter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Counter;
  const { count, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-center">
  <h1 class="font-open-sans font-normal text-gray-900 text-3xl md:text-4xl">
    ${count}+
  </h1>
  <h2 class="font-open-sans font-normal text-neutral-500 text-sm md:text-lg">
    ${desc}
  </h2>
</div>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Stats/Counter.astro");

const $$Astro$8 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${maybeRenderHead($$result)}<section class="container mx-auto px-6 py-4 my-8 md:my-16">
  <div class="flex justify-center">
    <div class="w-44 border-red-600 border-b-2 md:border-b-4 border-t-2 md:border-t-4 rounded-full"></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 my-8 md:my-16">
    <div>
      <h3 class="font-open-sans text-2xl text-neutral-500 underline underline-offset-8 py-5">
        Let's see our amazing stats
      </h3>
      <h1 class="font-inter text-2xl md:text-4xl font-light text-red-700">
        Great <span class="font-extrabold">technology</span> really help <br> us to achieve objective and <br> customer
        satisfaction
      </h1>
    </div>
    <div class="flex gap-4 justify-center items-center pt-16 my-8 md:my-0">
      ${renderComponent($$result, "Counter", $$Counter, { "count": 14, "desc": "Succesful Projects" })}
      ${renderComponent($$result, "Counter", $$Counter, { "count": 14, "desc": "Satisfied Clients" })}
      ${renderComponent($$result, "Counter", $$Counter, { "count": 14, "desc": "Technology Stacks" })}
    </div>
  </div>
</section>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Stats/index.astro");

const $$Astro$7 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${maybeRenderHead($$result)}<section class="bg-cover bg-no-repeat bg-center bg-[url('/assets/img/SolutionsBackground.png')]">
  <div class="container mx-auto px-6 py-6 my-8 md:my-16 text-center">
    <h2 class="text-white text-4xl font-bold pt-6 pb-3">Services</h2>
    <h3 class="font-open-sans text-2xl text-white pb-6">List of our best solutions to help you</h3>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6 pb-16">
      <div class="bg-white rounded-2xl">
        <h3 class="text-2xl text-red-700 font-bold py-6">Web Apps</h3>
        <img src="/assets/img/WorldWideWeb.svg" alt="World Wide Web" class="mx-auto">
        <div class="pt-6 pb-10">
          <a href="#" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm sm:text-md text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans px-6 py-2">Learn More</a>
        </div>
      </div>
      <div class="bg-white rounded-2xl">
        <h3 class="text-2xl text-red-700 font-bold py-6">Android Apps</h3>
        <img src="/assets/img/AndroidLogo.svg" alt="Android" class="mx-auto">
        <div class="pt-6 pb-10">
          <a href="#" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm sm:text-md text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans px-6 py-2">Learn More</a>
        </div>
      </div>
      <div class="bg-white rounded-2xl">
        <h3 class="text-2xl text-red-700 font-bold py-6">Artificial Intelligence</h3>
        <img src="/assets/img/ArtificialIntelligence.svg" alt="Artificial Intelligence" class="mx-auto">
        <div class="pt-6 pb-10">
          <a href="#" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm sm:text-md text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans px-6 py-2">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Solutions/index.astro");

const $$Astro$6 = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const { fromColor, toColor, image, title, desc, technology } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`bg-gradient-to-r from-${fromColor} to-${toColor} rounded-2xl my-6`, "class")}>
  <div class="lg:flex flex-row xl:p-12 lg:p-8">
    <div class="lg:hidden visible basis-full">
      <img${addAttribute(`/assets/img/${image}`, "src")}${addAttribute(image, "alt")} class="rounded-t-2xl">
    </div>
    <div class="2xl:basis-2/3 lg:basis-3/5 basis-full text-white 2xl:mr-32 lg:mr-6 mr-0">
      <div class="lg:p-0 p-10">
        <h1 class="font-bold text-3xl">${title}</h1>
        <p class="text-xl font-open-sans pt-3 pb-6">
          ${desc}
        </p>
        <h3 class="text-xl font-open-sans font-bold py-4">Technology</h3>
        ${technology.map((data) => {
    return renderTemplate`<span class="mr-3 mb-4 inline-block rounded-lg bg-[#BFBFBF]/50 px-3 py-1 font-open-sans text-lg">
                ${data}
              </span>`;
  })}
      </div>
    </div>
    <div class="lg:block hidden 2xl:basis-1/3 basis-2/5 my-auto">
      <img${addAttribute(`/assets/img/${image}`, "src")}${addAttribute(image, "alt")} class="min-w-full">
    </div>
  </div>
</div>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Portfolios/Portfolio.astro");

const $$Astro$5 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${maybeRenderHead($$result)}<section class="container mx-auto px-6 py-6 my-8 md:my-16">
  <h2 class="font-inter text-2xl md:text-4xl font-light text-red-700 text-center">
    <span class="font-extrabold">Let's deep dive</span> into our portfolios
  </h2>
  <h3 class="font-open-sans text-center text-red-700 text-2xl py-2">Keep scrolling, you are on the right path</h3>
  <div class="flex justify-center py-6">
    <div class="w-44 border-red-600 border-b-2 md:border-b-4 border-t-2 md:border-t-4 rounded-full"></div>
  </div>
  <div class="my-6">
    ${renderComponent($$result, "Portfolio", $$Portfolio, { "fromColor": "[#73221D]", "toColor": "[#F33543]", "image": "AudodoCoffee.png", "title": "Audodoco", "desc": "Audodoco is a highly innovative and effective promotional tool for Audodo Coffee Company, offering a comprehensive digital platform that showcases the company's unique and high-quality products. The Laravel 8 framework ensures that the platform is highly responsive, reliable, and efficient, providing a seamless user experience for coffee lovers worldwide.", "technology": ["Laravel", "MySQL"] })}
    ${renderComponent($$result, "Portfolio", $$Portfolio, { "fromColor": "[#0D0D0D]", "toColor": "[#8F8F8F]", "image": "Narkobot.png", "title": "Narkobot", "desc": "Narkobot is an innovative and highly effective tool in the fight against drug abuse, providing an interactive medium for information dissemination and public consultation. Using NLP approaches and React Native ensures that the platform is highly responsive and intuitive, making it an effective tool for promoting public awareness and education about the dangers of drug abuse, especially among younger generations.", "technology": ["Python", "React Native"] })}
    <div${addAttribute(`hidden bg-gradient-to-r from-[#0D0D0D] to-[#8F8F8F] rounded-2xl my-6`, "class")}></div>
  </div>
  <div class="text-center">
    <p class="font-open-sans text-red-700 text-2xl py-8">We have others, let's check this out</p>
    <a href="/portfolio" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-lg sm:text-xl text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 font-open-sans px-7 py-3">
      Explore More
    </a>
  </div>
</section>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Portfolios/index.astro");

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead($$result)}<section class="bg-cover bg-gradient-to-r from-[#73221D] to-[#F33543]">
  <div class="container mx-auto px-6 py-6 my-8 md:my-16 text-center">
    <h2 class="text-white text-4xl font-bold pt-6 pb-3">
      We’re <span class="font-extrabold">affiliated</span> with several <span class="font-extrabold">freelance platforms</span>
    </h2>
    <h3 class="font-open-sans text-3xl text-white pb-6">You can find us at :</h3>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-16 gap-6 pt-6 pb-16">
      <img src="/assets/img/Freelancer.png" alt="Freelancer" class="m-auto">
      <img src="/assets/img/Projects.png" alt="Projects" class="m-auto">
      <img src="/assets/img/Sribu.png" alt="Sribu" class="m-auto">
      <img src="/assets/img/Fiverr.png" alt="Fiverr" class="m-auto">
    </div>
  </div>
</section>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Platforms/index.astro");

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="container text-center mx-auto">
  <img src="/assets/img/LogoSahud.png" class="h-10 sm:h-12 mx-auto my-2" alt="Flowbite Logo">
  <p class="font-open-sans my-2">"The computer was born to solve problems that did not exist before."</p>
  <p class="font-open-sans my-2">- Bill Gates</p>
  <p class="font-open-sans mt-2 mb-6">© 2023 Sahud Agency</p>
</footer>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Footer/index.astro");

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Index$6, {})}${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "Hero", $$Index$7, { "title": "We can provide your digital needs right away", "subtitle": "We are utilizing and transforming technology", "desc": "Empowering Businesses through Software Solutions " })}
    ${renderComponent($$result2, "Stats", $$Index$5, {})}
    ${renderComponent($$result2, "Solutions", $$Index$4, {})}
    ${renderComponent($$result2, "Portfolios", $$Index$3, {})}
    ${renderComponent($$result2, "Platforms", $$Index$2, {})}
  </main>${renderComponent($$result2, "Footer", $$Index$1, {})}` })}`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/pages/index.astro");

const $$file$1 = "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
  <a${addAttribute(href, "href")} class="astro-DOHJNAO5">
    <h2 class="astro-DOHJNAO5">
      ${title}
      <span class="astro-DOHJNAO5">&rarr;</span>
    </h2>
    <p class="astro-DOHJNAO5">
      ${body}
    </p>
  </a>
</li>`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/components/Card.astro");

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-UCD2PS2B" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Index$6, { "class": "astro-UCD2PS2B" })}${maybeRenderHead($$result2)}<main class="font-open-sans astro-UCD2PS2B">
    <h1 class="astro-UCD2PS2B">Welcome to <span class="text-gradient astro-UCD2PS2B">Services</span></h1>
    <p class="instructions astro-UCD2PS2B">
      To get started, open the directory <code class="astro-UCD2PS2B">src/pages</code> in your project.<br class="astro-UCD2PS2B">
      <strong class="astro-UCD2PS2B">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
    <ul role="list" class="link-card-grid astro-UCD2PS2B">
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-UCD2PS2B" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-UCD2PS2B" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-UCD2PS2B" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-UCD2PS2B" })}
    </ul>
  </main>` })}`;
}, "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/pages/services.astro");

const $$file = "C:/Users/mocha/Downloads/Github/Astro/profile-website/src/pages/services.astro";
const $$url = "/services";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
