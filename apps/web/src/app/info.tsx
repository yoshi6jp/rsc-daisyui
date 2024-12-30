"use client";;
import GitHubButton from "react-github-btn";

import type { JSX } from "react";

export function Info(): JSX.Element {
  return (
    <div className="flex gap-2 items-center m-4">
      <GitHubButton
        aria-label="Star yoshi6jp/rsc-daisyui on GitHub"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-show-count="true"
        data-size="large"
        href="https://github.com/yoshi6jp/rsc-daisyui"
      >
        Star
      </GitHubButton>
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
  );
}
