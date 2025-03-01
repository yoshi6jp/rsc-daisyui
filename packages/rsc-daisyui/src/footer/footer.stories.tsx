import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Link, Input, Button, Label, Join } from "..";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  argTypes: toArgTypes(getVariantConfig(Footer)),
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    className: "bg-neutral text-neutral-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <nav>
          <Footer.Title>Services</Footer.Title>
          <Link hover>Branding</Link>
          <Link hover>Design</Link>
          <Link hover>Marketing</Link>
          <Link hover>Advertisement</Link>
        </nav>
        <nav>
          <Footer.Title>Company</Footer.Title>
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <Footer.Title>Legal</Footer.Title>
          <Link hover>Terms of use</Link>
          <Link hover>Privacy policy</Link>
          <Link hover>Cookie policy</Link>
        </nav>
      </Footer>
    );
  },
};

export const WithLogoSection: Story = {
  args: {
    className: "bg-base-200 text-base-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <aside>
          <svg
            role="img"
            aria-label="icon"
            className="fill-current"
            clipRule="evenodd"
            fillRule="evenodd"
            height="50"
            viewBox="0 0 24 24"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <Footer.Title>Services</Footer.Title>
          <Link hover>Branding</Link>
          <Link hover>Design</Link>
          <Link hover>Marketing</Link>
          <Link hover>Advertisement</Link>
        </nav>
        <nav>
          <Footer.Title>Company</Footer.Title>
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <Footer.Title>Legal</Footer.Title>
          <Link hover>Terms of use</Link>
          <Link hover>Privacy policy</Link>
          <Link hover>Cookie policy</Link>
        </nav>
      </Footer>
    );
  },
};

export const WithForm: Story = {
  args: {
    className: "bg-base-200 text-base-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <nav>
          <Footer.Title>Services</Footer.Title>
          <Link hover>Branding</Link>
          <Link hover>Design</Link>
          <Link hover>Marketing</Link>
          <Link hover>Advertisement</Link>
        </nav>
        <nav>
          <Footer.Title>Company</Footer.Title>
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <Footer.Title>Legal</Footer.Title>
          <Link hover>Terms of use</Link>
          <Link hover>Privacy policy</Link>
          <Link hover>Cookie policy</Link>
        </nav>
        <form>
          <Footer.Title className="footer-title">Newsletter</Footer.Title>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <Join>
              <Input type="text" placeholder="username@site.com" />
              <Button color="primary" className="join-item">
                Subscribe
              </Button>
            </Join>
          </fieldset>
        </form>
      </Footer>
    );
  },
};

export const WithLogoAndSocialIcons: Story = {
  args: {
    className: "bg-neutral text-neutral-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <aside>
          <svg
            role="img"
            aria-label="ion"
            className="fill-current"
            clipRule="evenodd"
            fillRule="evenodd"
            height="50"
            viewBox="0 0 24 24"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <Footer.Title>Social</Footer.Title>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                role="img"
                aria-label="ion"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="ion"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="ion"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
      </Footer>
    );
  },
};

export const WithCopyrightText: Story = {
  args: {
    center: true,
    className: "p-4 bg-base-300 text-base-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <aside>
          <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </Footer>
    );
  },
};

export const WithCopyrightTextAndSocialIcons: Story = {
  args: {
    className:
      "items-center p-4 bg-neutral text-neutral-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <aside className="items-center grid-flow-col">
          <svg
            role="img"
            aria-label="icon"
            className="fill-current"
            clipRule="evenodd"
            fillRule="evenodd"
            height="36"
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p>Copyright © 2025 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              role="img"
              aria-label="icon"
              className="fill-current"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a>
            <svg
              role="img"
              aria-label="icon"
              className="fill-current"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a>
            <svg
              role="img"
              aria-label="icon"
              className="fill-current"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </nav>
      </Footer>
    );
  },
};
export const WithLinksAndSocialIcons: Story = {
  args: {
    className: "bg-base-300 text-base-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <nav>
          <Footer.Title>Services</Footer.Title>
          <Link hover>Branding</Link>
          <Link hover>Design</Link>
          <Link hover>Marketing</Link>
          <Link hover>Advertisement</Link>
        </nav>
        <nav>
          <Footer.Title>Company</Footer.Title>
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <Footer.Title>Social</Footer.Title>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
      </Footer>
    );
  },
};
export const With2Rows: Story = {
  args: {
    className:
      "grid-rows-2 bg-neutral text-neutral-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <nav>
          <Footer.Title>Services</Footer.Title>
          <Link hover>Branding</Link>
          <Link hover>Design</Link>
          <Link hover>Marketing</Link>
          <Link hover>Advertisement</Link>
        </nav>
        <nav>
          <Footer.Title>Company</Footer.Title>
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <Footer.Title>Legal</Footer.Title>
          <Link hover>Terms of use</Link>
          <Link hover>Privacy policy</Link>
          <Link hover>Cookie policy</Link>
        </nav>
        <nav>
          <Footer.Title>Social</Footer.Title>
          <Link hover>Twitter</Link>
          <Link hover>Instagram</Link>
          <Link hover>Facebook</Link>
          <Link hover>Github</Link>
        </nav>
        <nav>
          <Footer.Title>Explore</Footer.Title>
          <Link hover>Features</Link>
          <Link hover>Enterprise</Link>
          <Link hover>Security</Link>
          <Link hover>Pricing</Link>
        </nav>
        <nav>
          <Footer.Title>Apps</Footer.Title>
          <Link hover>Mac</Link>
          <Link hover>Windows</Link>
          <Link hover>iPhone</Link>
          <Link hover>Android</Link>
        </nav>
      </Footer>
    );
  },
};
export const CenteredWithLogoAndSocialIcons: Story = {
  args: {
    center: true,
    className: "bg-primary text-primary-content sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <aside>
          <svg
            role="img"
            aria-label="icon"
            className="inline-block fill-current"
            clipRule="evenodd"
            fillRule="evenodd"
            height="50"
            viewBox="0 0 24 24"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p className="font-bold">
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2025 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
      </Footer>
    );
  },
};
export const CenteredWithSocialIcons: Story = {
  args: {
    center: true,
    className: "bg-base-200 text-base-content rounded sm:footer-horizontal",
  },
  render: (args) => {
    return (
      <Footer {...args}>
        <nav className="grid grid-flow-col gap-4">
          <Link hover>About us</Link>
          <Link hover>Contact</Link>
          <Link hover>Jobs</Link>
          <Link hover>Press kit</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a>
              <svg
                role="img"
                aria-label="icon"
                className="fill-current"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </Footer>
    );
  },
};

export const TwoFooter: Story = {
  render: (args) => {
    return (
      <div className="w-full">
        <Footer
          {...args}
          className="bg-base-200 text-base-content sm:footer-horizontal"
        >
          <nav>
            <Footer.Title>Services</Footer.Title>
            <Link hover>Branding</Link>
            <Link hover>Design</Link>
            <Link hover>Marketing</Link>
            <Link hover>Advertisement</Link>
          </nav>
          <nav>
            <Footer.Title>Company</Footer.Title>
            <Link hover>About us</Link>
            <Link hover>Contact</Link>
            <Link hover>Jobs</Link>
            <Link hover>Press kit</Link>
          </nav>
          <nav>
            <Footer.Title>Legal</Footer.Title>
            <Link hover>Terms of use</Link>
            <Link hover>Privacy policy</Link>
            <Link hover>Cookie policy</Link>
          </nav>
        </Footer>
        <Footer className="px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <svg
              role="img"
              aria-label="icon"
              className="fill-current"
              clipRule="evenodd"
              fillRule="evenodd"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <p>
              ACME Industries Ltd. <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  role="img"
                  aria-label="icon"
                  className="fill-current"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a>
                <svg
                  role="img"
                  aria-label="icon"
                  className="fill-current"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a>
                <svg
                  role="img"
                  aria-label="icon"
                  className="fill-current"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </nav>
        </Footer>
      </div>
    );
  },
};
