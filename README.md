# rsc-daisyui

[![npm version](https://badge.fury.io/js/rsc-daisyui.svg)](https://badge.fury.io/js/rsc-daisyui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [daisyUI](https://daisyui.com/) components build with React, Typescript, [TailwindCSS](https://tailwindcss.com/) and [TW CLASSED](https://tw-classed.vercel.app/)
- Simple components available in the React Server Component
- No `useEffect`, `useState`, etc and used.

[Storybook](https://yoshi6jp.github.io/rsc-daisyui/)

[Next.js (Kitchen Sink) ](https://rsc-daisyui-web.vercel.app/)

[Sandbox](https://codesandbox.io/p/github/yoshi6jp/rsc-daisyui-sample/draft/condescending-water?embed=1)

## rsc-daisyui 🌼

### Install

Make sure you've installed [TailwindCSS](https://tailwindcss.com/docs/installation) and [daisyUI](https://daisyui.com/docs/install/).

Install the package with npm or yarn or pnpm:

#### npm

```bash
npm install rsc-daisyui
```

#### yarn

```bash
yarn add rsc-daisyui
```

#### pnpm

```bash
pnpm add rsc-daisyui
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["node_modules/rsc-daisyui/dist/**/*.js"],
  plugins: [daisyui],
};
export default config;
```

### Quick Start

Import rsc-daisyui components within your component files:

```js
import { Button } from "rsc-daisyui";

export default (props) => {
  return <Button color="primary">Click me!</Button>;
};
```

### Components

#### Actions

- [x] Button
- [x] Dropdown
- [x] Modal
- [x] Swap
- [x] Theme Controller

#### Data display

- [x] Accordion
- [x] Avatar
- [x] Badge
- [x] Card
- [x] Carousel
- [x] Chat bubble
- [x] Collapse
- [x] Countdown
- [x] Diff
- [x] Kbd
- [x] Stat
- [x] Table
- [x] Timeline

#### Navigation

- [x] Breadcrumbs
- [x] Bottom navigation
- [x] Link
- [x] Menu
- [x] Navbar
- [x] Pagination
- [x] Steps
- [x] Tab

#### Feedback

- [x] Alert
- [x] Loading
- [x] Progress
- [x] Radial progress
- [x] Skeleton
- [x] Toast
- [x] Tooltip

#### Data input

- [x] Checkbox
- [x] File input
- [x] Radio
- [x] Range
- [x] Select
- [x] Text input
- [x] Textarea
- [x] Toggle

#### Layout

- [x] Artboard
- [x] Divider
- [x] Drawer
- [x] Footer
- [x] Hero
- [x] Indicator
- [x] Join (group items)
- [x] Mask
- [x] Stack

#### Mockup

- [x] Browser
- [x] Code
- [x] Phone
- [x] Window

---

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.
