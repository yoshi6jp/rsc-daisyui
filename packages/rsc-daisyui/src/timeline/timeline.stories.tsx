import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Timeline } from ".";

const meta: Meta<typeof Timeline> = {
  title: "Data Display/Timeline",
  component: Timeline,
  argTypes: toArgTypes(getVariantConfig(Timeline)),
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </li>
    </Timeline>
  ),
};

export const BottomSideOnly: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </li>
    </Timeline>
  ),
};

export const TopSideOnly: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Start box>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>iMac</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>iPod</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>iPhone</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </li>
    </Timeline>
  ),
};

export const DifferentSides: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Start box>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>iPod</Timeline.Start>
        <Timeline.Middle />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </li>
    </Timeline>
  ),
};

export const ColorfulLines: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Start box>First Macintosh computer</Timeline.Start>
        <Timeline.Middle className="text-primary" />
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <Timeline.Middle className="text-primary" />
        <Timeline.End>iMac</Timeline.End>
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <Timeline.Start box>iPod</Timeline.Start>
        <Timeline.Middle className="text-primary" />
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </li>
    </Timeline>
  ),
};

export const WithoutIcons: Story = {
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Start box>First Macintosh computer</Timeline.Start>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.End>iMac</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>iPod</Timeline.Start>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.End>iPhone</Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Start box>Apple Watch</Timeline.Start>
      </li>
    </Timeline>
  ),
};

export const Vertical: Story = {
  ...Default,
  args: {
    vertical: true,
  },
};
export const VerticalWithBottomSideOnly: Story = {
  ...BottomSideOnly,
  args: {
    vertical: true,
  },
};

export const VerticalWithTopSideOnly: Story = {
  ...TopSideOnly,
  args: {
    vertical: true,
  },
};

export const VerticalWithDifferentSides: Story = {
  ...DifferentSides,
  args: {
    vertical: true,
  },
};

export const VerticalWithColorfulLines: Story = {
  ...ColorfulLines,
  args: {
    vertical: true,
  },
};
export const VerticalWithoutIcons: Story = {
  ...WithoutIcons,
  args: {
    vertical: true,
  },
};
export const Responsive: Story = {
  ...Default,
  args: {
    vertical: true,
    className: "lg:timeline-horizontal",
  },
};

export const IconSnappedToStart: Story = {
  args: {
    snapIcon: true,
    vertical: true,
    className: "max-md:timeline-compact",
  },
  render: (args) => (
    <Timeline {...args}>
      <li>
        <Timeline.Middle />
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the
          original Apple Macintosh personal computer. It played a pivotal role
          in establishing desktop publishing as a general office function. The
          motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
          housed in a beige case with integrated carrying handle; it came with a
          keyboard and single-button mouse.
        </Timeline.Start>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">1998</time>
          <div className="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and
          built by Apple Inc. It has been the primary part of Apple&apos;s
          consumer desktop offerings since its debut in August 1998, and has
          evolved through seven distinct forms
        </Timeline.End>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">2001</time>
          <div className="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and
          multi-purpose mobile devices designed and marketed by Apple Inc. The
          first version was released on October 23, 2001, about 8+1⁄2 months
          after the Macintosh version of iTunes was released. Apple sold an
          estimated 450 million iPod products as of 2022. Apple discontinued the
          iPod product line on May 10, 2022. At over 20 years, the iPod brand is
          the oldest to be discontinued by Apple
        </Timeline.Start>
        <hr />
      </li>
      <li>
        <hr />
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">2007</time>
          <div className="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use
          Apple&apos;s own iOS mobile operating system. The first-generation
          iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.
          Since then, Apple has annually released new iPhone models and iOS
          updates. As of November 1, 2018, more than 2.2 billion iPhones had
          been sold. As of 2022, the iPhone accounts for 15.6% of global
          smartphone market share
        </Timeline.End>
        <hr />
      </li>
      <li>
        <hr />

        <Timeline.Middle />
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </div>
      </li>
    </Timeline>
  ),
};
