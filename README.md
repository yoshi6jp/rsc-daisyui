# rsc-daisyui

[![npm version](https://badge.fury.io/js/rsc-daisyui.svg)](https://badge.fury.io/js/rsc-daisyui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [daisyUI](https://daisyui.com/) components build with React, Typescript, [TailwindCSS](https://tailwindcss.com/) and [TW CLASSED](https://tw-classed.vercel.app/)
- Simple components available in the React Server Component
- No `useEffect`, `useState`, etc and used.
- Support for `daisyUI 5` and `Tailwind CSS v4`

[Storybook](https://yoshi6jp.github.io/rsc-daisyui/)

[Next.js (Kitchen Sink) ](https://rsc-daisyui-web.vercel.app/)

[Sandbox](https://codesandbox.io/p/github/yoshi6jp/rsc-daisyui-sample/draft/condescending-water?embed=1)

## rsc-daisyui 🌼

### Install

Make sure you've installed [TailwindCSS](https://tailwindcss.com/docs/installation) and [daisyUI (beta)](https://v5.daisyui.com/docs/install/).

Install the package with npm or yarn or pnpm:

#### npm

```bash
npm install rsc-daisyui@beta
```

#### yarn

```bash
yarn add rsc-daisyui@beta
```

#### pnpm

```bash
pnpm add rsc-daisyui@beta
```

### Add rsc-daisyui to app.css

```app.css
@import "tailwindcss";
@plugin "daisyui";
@source "../../node_modules/rsc-daisyui/dist/**/*.js";
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

| Name             | v1  | v2  |
| ---------------- | --- | --- |
| Button           | ✅  | ✅  |
| Dropdown         | ✅  | ✅  |
| Modal            | ✅  | ✅  |
| Swap             | ✅  | ✅  |
| Theme Controller | ✅  | ✅  |

#### Data display

| Name        | v1  | v2  |
| ----------- | --- | --- |
| Accordion   | ✅  | ✅  |
| Avatar      | ✅  | ✅  |
| Badge       | ✅  | ✅  |
| Card        | ✅  | ✅  |
| Carousel    | ✅  | ✅  |
| Chat bubble | ✅  | ✅  |
| Collapse    | ✅  | ✅  |
| Countdown   | ✅  | ✅  |
| Diff        | ✅  | ✅  |
| Kbd         | ✅  | ✅  |
| List        | -   | ✅  |
| Stat        | ✅  | ✅  |
| Status      | -   | ✅  |
| Table       | ✅  | ✅  |
| Timeline    | ✅  | ✅  |

#### Navigation

| Name                     | v1  | v2  |
| ------------------------ | --- | --- |
| Breadcrumbs              | ✅  | ✅  |
| Dock (Bottom navigation) |     | ✅  |
| Link                     | ✅  | ✅  |
| Menu                     | ✅  | ✅  |
| Navbar                   | ✅  | ✅  |
| Pagination               | ✅  | ✅  |
| Steps                    | ✅  | ✅  |
| Tab                      | ✅  | ✅  |

#### Feedback

| Name            | v1  | v2  |
| --------------- | --- | --- |
| Alert           | ✅  | ✅  |
| Loading         | ✅  | ✅  |
| Progress        | ✅  | ✅  |
| Radial progress | ✅  | ✅  |
| Skeleton        | ✅  | ✅  |
| Toast           | ✅  | ✅  |
| Tooltip         | ✅  | ✅  |

#### Data input

| Name       | v1  | v2  |
| ---------- | --- | --- |
| Checkbox   | ✅  | ✅  |
| Fieldset   | -   | ✅  |
| File input | ✅  | ✅  |
| Filter     | -   | ✅  |
| Label      | -   | ✅  |
| Radio      | ✅  | ✅  |
| Range      | ✅  | ✅  |
| Rating     | ✅  | ✅  |
| Select     | ✅  | ✅  |
| Text input | ✅  | ✅  |
| Textarea   | ✅  | ✅  |
| Toggle     | ✅  | ✅  |
| Validator  | -   | ✅  |

#### Layout

| Name               | v1  | v2  |
| ------------------ | --- | --- |
| Divider            | ✅  | ✅  |
| Drawer             | ✅  | ✅  |
| Footer             | ✅  | ✅  |
| Hero               | ✅  | ✅  |
| Indicator          | ✅  | ✅  |
| Join (group items) | ✅  | ✅  |
| Mask               | ✅  | ✅  |
| Stack              | ✅  | ✅  |

#### Mockup

| Name    | v1  | v2  |
| ------- | --- | --- |
| Browser | ✅  | ✅  |
| Code    | ✅  | ✅  |
| Phone   | ✅  | ✅  |
| Window  | ✅  | ✅  |

---

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.
