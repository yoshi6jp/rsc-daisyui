import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Loading } from "../loading";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
  argTypes: toArgTypes(getVariantConfig(Button)),
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Button",
  args: {
    children: "Default",
  },
};

export const ButtonSizes: Story = {
  name: "Button sizes",
  render: ({ ...args }) => (
    <div className="flex gap-2 xl:py-10 flex-wrap items-center justify-center">
      <Button {...args} size="xs">
        Xsmall
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args}>Medium</Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Xlarge
      </Button>
    </div>
  ),

  parameters: {
    controls: {
      exclude: ["as", "children", "size"],
    },
  },
};

export const ResponsiveButton: Story = {
  name: "Responsive button",
  args: {
    children: "Responsive",
    size: "xs",
    className: "sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",
  },
};

export const ButtonsColors: Story = {
  name: "Button colors",
  render: ({ ...args }) => (
    <div className="flex gap-2 xl:py-10 flex-wrap justify-center">
      <Button {...args}>Default</Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "color"],
    },
  },
};

export const SoftButtons: Story = {
  ...ButtonsColors,
  name: "Soft buttons",
  args: {
    soft: true,
  },
};
export const OutlineButtons: Story = {
  ...ButtonsColors,
  name: "Outline buttons",
  args: {
    outline: true,
  },
};
export const DashButtons: Story = {
  ...ButtonsColors,
  name: "Dash buttons",
  args: {
    dash: true,
  },
};
export const ActiveButtons: Story = {
  ...ButtonsColors,
  name: "Active buttons",
  args: {
    active: true,
  },
};

export const ButtonsGhostAndButtonLink: Story = {
  name: "Buttons ghost and button link",
  render: ({ ...args }) => (
    <>
      <Button {...args} ghost={true}>
        Ghost
      </Button>
      <Button {...args} link={true}>
        Link
      </Button>
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "ghost", "link"],
    },
  },
};

export const WideButton: Story = {
  name: "Wide button",
  args: {
    children: "Wide",
    wide: true,
  },
};

export const ButtonsWithAnyHtmlTags: Story = {
  render: (args) => (
    <div className="flex gap-2 xl:py-10 flex-wrap justify-center">
      {/* @ts-expect-error: as */}
      <Button {...args} as="a">
        Link
      </Button>
      <Button {...args} type="submit">
        Button
      </Button>
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="button" value="Input" />
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="submit" value="Submit" />
      {/* @ts-expect-error: as */}
      <Button {...args} aria-label="Radio" as="input" type="radio" />
      {/* @ts-expect-error: as */}
      <Button {...args} aria-label="Checkbox" as="input" type="checkbox" />
      {/* @ts-expect-error: as */}
      <Button {...args} as="input" type="reset" value="Reset" />
    </div>
  ),
  name: "Buttons with any HTML tags",
  parameters: {
    controls: {
      exclude: ["as", "children"],
    },
  },
};

export const DisabledButtons: Story = {
  name: "Disabled buttons",
  render: ({ ...args }) => (
    <>
      <Button {...args} disabled>
        Disabled using attributes
      </Button>
      <Button
        {...args}
        aria-disabled="true"
        className="btn-disabled"
        role="button"
      >
        Disabled using class name
      </Button>
    </>
  ),

  parameters: {
    controls: {
      exclude: ["as", "children", "disabled", "className"],
    },
  },
};

export const CircleButtonAndSquareButton: Story = {
  name: "Circle button and square button",
  render: ({ ...args }) => (
    <>
      <Button {...args} shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </Button>
      <Button {...args} shape="circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </Button>
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "shape"],
    },
  },
};

export const ButtonWithIcon: Story = {
  name: "Button with Icon",
  render: ({ ...args }) => (
    <>
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        Like
      </Button>
      <Button {...args}>
        Like
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </Button>
    </>
  ),
};

export const ButtonBlock: Story = {
  name: "Button block",
  args: {
    children: "block",
    block: true,
  },
};

export const ButtonWithLoadingSpinner: Story = {
  name: "Button with loading spinner",
  render: ({ ...args }) => (
    <>
      <Button {...args} shape="square">
        <Loading />
      </Button>
      <Button {...args}>
        <Loading />
        loading
      </Button>
    </>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "shape"],
    },
  },
};

export const LoginButtons: Story = {
  name: "Login buttons",
  render: ({ ...args }) => (
    <div className="grid gap-4">
      {/* Email */}
      <Button {...args} className="bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Email icon"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="black"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        Login with Email
      </Button>
      {/* GitHub */}
      <Button {...args} className="bg-black text-white border-black">
        <svg
          aria-label="GitHub logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          ></path>
        </svg>
        Login with GitHub
      </Button>
      {/* Google */}
      <Button {...args} className="bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </Button>
      {/* Facebook */}
      <Button {...args} className="bg-[#1A77F2] text-white border-[#005fd8]">
        <svg
          aria-label="Facebook logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
          ></path>
        </svg>
        Login with Facebook
      </Button>
      {/* X */}
      <Button {...args} className="bg-black text-white border-black">
        <svg
          aria-label="X logo"
          width="16"
          height="12"
          viewBox="0 0 300 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
        Login with X
      </Button>
      {/* Kakao */}
      <Button
        {...args}
        className="bg-[#FEE502] text-[#181600] border-[#f1d800]"
      >
        <svg
          aria-label="Kakao logo"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#181600"
            d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
          ></path>
        </svg>
        카카오 로그인
      </Button>
      {/* Apple */}
      <Button {...args} className="bg-black text-white border-black">
        <svg
          aria-label="Apple logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1195 1195"
        >
          <path
            fill="white"
            d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
          ></path>
        </svg>
        Login with Apple
      </Button>
      {/* Amazon */}
      <Button {...args} className="bg-[#FF9900] text-black border-[#e17d00]">
        <svg
          aria-label="Amazon logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g fill="black">
            <path d="M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z"></path>
            <path d="M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z"></path>
          </g>
        </svg>
        Login with Amazon
      </Button>
      {/* Microsoft */}
      <Button {...args} className="bg-[#2F2F2F] text-white border-black">
        <svg
          aria-label="Microsoft logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M96 96H247V247H96" fill="#f24f23"></path>
          <path d="M265 96V247H416V96" fill="#7eba03"></path>
          <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
          <path d="M265 265H416V416H265" fill="#f9ba00"></path>
        </svg>
        Login with Microsoft
      </Button>
      {/* Line */}
      <Button {...args} className="bg-[#03C755] text-white border-[#00b544]">
        <svg
          aria-label="Line logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g fillRule="evenodd" strokeLinejoin="round" fill="white">
            <path
              fillRule="nonzero"
              d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"
            ></path>
          </g>
        </svg>
        LINEでログイン
      </Button>
      {/* Slack */}
      <Button {...args} className="bg-[#622069] text-white border-[#591660]">
        <svg
          aria-label="Slack logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g strokeLinecap="round" strokeWidth="78">
            <path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"></path>
            <path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"></path>
            <path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"></path>
            <path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"></path>
          </g>
        </svg>
        Login with Slack
      </Button>
      {/* LinkedIn */}
      <Button {...args} className="bg-[#0967C2] text-white border-[#0059b3]">
        <svg
          aria-label="LinkedIn logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
            fillRule="evenodd"
          ></path>
        </svg>
        Login with LinkedIn
      </Button>
      {/* VK */}
      <Button {...args} className="bg-[#47698F] text-white border-[#35567b]">
        <svg
          aria-label="VK logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2240 2240"
        >
          <g fill="white">
            <path d="M2077 904q23 64-150 294-24 32-65 85-78 100-90 131-17 41 14 81 17 21 81 82h1l1 1 1 1 2 2q141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66T648 1722l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211T165 943q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T814 1348t34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 17-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z"></path>
          </g>
        </svg>
        Login with VK
      </Button>
      {/* WeChat */}
      <Button {...args} className="bg-[#5EBB2B] text-white border-[#4eaa0c]">
        <svg
          aria-label="WeChat logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g fill="white">
            <path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path>
            <path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path>
          </g>
        </svg>
        Login with WeChat
      </Button>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ["as", "children", "color", "className"],
    },
  },
};
