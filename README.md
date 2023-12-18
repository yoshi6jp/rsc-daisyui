# rsc-daisyui

- [daisyUI](https://daisyui.com/) components build with React, Typescript, [TailwindCSS](https://tailwindcss.com/) and [TW CLASSED](https://tw-classed.vercel.app/)
- Simple components available in the React Server Component
- No `useEffect`, `useState`, etc and used.

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

const config: Config = {
  content: ["node_modules/rsc-daisyui/dist/**/*.js"],
  plugins: [require("daisyui")],
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
- [ ] Dropdown
- [ ] Modal
- [ ] Swap
- [ ] Theme Controller

#### Data display

- [ ] Accordion
- [ ] Avatar
- [ ] Badge
- [ ] Card
- [ ] Carousel
- [ ] Chat bubble
- [ ] Collapse
- [ ] Countdown
- [ ] Diff
- [ ] Kbd
- [ ] Stat
- [ ] Table
- [ ] Timeline

#### Navigation

- [ ] Breadcrumbs
- [ ] Bottom navigation
- [ ] Link
- [ ] Menu
- [ ] Navbar
- [ ] Pagination
- [ ] Steps
- [ ] Tab

#### Feedback

- [ ] Alert
- [ ] Loading
- [ ] Progress
- [ ] Radial progress
- [ ] Skeleton
- [ ] Toast
- [ ] Tooltip

#### Data input

- [ ] Checkbox
- [ ] File input
- [ ] Radio
- [ ] Range
- [ ] Select
- [ ] Text input
- [ ] Textarea
- [ ] Toggle

#### Layout

- [ ] Artboard
- [ ] Divider
- [ ] Drawer
- [ ] Footer
- [ ] Hero
- [ ] Indicator
- [ ] Join (group items)
- [ ] Mask
- [ ] Stack

#### Bockup

- [ ] Browser
- [ ] Code
- [ ] Phone
- [ ] Window

---

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.
