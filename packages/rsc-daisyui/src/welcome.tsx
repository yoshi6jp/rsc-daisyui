import React from "react";
import { Unstyled } from "@storybook/blocks";
import GitHubButton from "react-github-btn";
import { Hero, Badge, Link } from ".";

export function Welcome() {
  return (
    <Unstyled>
      <Hero className="bg-base-200 rounded-xl p-6">
        <Hero.Content>
          <div>
            <h1 className="text-5xl font-bold flex items-center gap-4 justify-between">
              <div>
                <img
                  alt="logo"
                  className="h-16 inline-block"
                  src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg"
                />
                rsc-daisyUI
              </div>
              <GitHubButton
                aria-label="Star yoshi6jp/rsc-daisyui on GitHub"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-show-count="true"
                data-size="large"
                href="https://github.com/yoshi6jp/rsc-daisyui"
              >
                Star
              </GitHubButton>
            </h1>
            <div className="flex m-2 gap-2">
              <a href="https://badge.fury.io/js/rsc-daisyui">
                <img alt="npm" src="https://badge.fury.io/js/rsc-daisyui.svg" />
              </a>
              <a href="https://opensource.org/licenses/MIT">
                <img
                  alt="license"
                  src="https://img.shields.io/badge/License-MIT-yellow.svg"
                />
              </a>
            </div>
            <div className="prose">
              <ul>
                <li>
                  <Link hover href="https://daisyui.com/">
                    daisyUI
                  </Link>{" "}
                  components build with React, Typescript,
                  <Link hover href="https://tailwindcss.com/">
                    TailwindCSS
                  </Link>{" "}
                  and{" "}
                  <Link hover href="https://tw-classed.vercel.app/">
                    TW CLASSED
                  </Link>
                </li>
                <li>
                  Simple components available in the React Server Component
                </li>
                <li>
                  No <Badge className="my-0">useEffect</Badge>,{" "}
                  <Badge className="my-0">useState</Badge>, etc and used.
                </li>
              </ul>
            </div>
          </div>
        </Hero.Content>
      </Hero>
    </Unstyled>
  );
}
