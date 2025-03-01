import {
  Button,
  Dropdown,
  Tabs,
  Toggle,
  Checkbox,
  Radio,
  Card,
  Link,
  Steps,
  Chat,
  Badge,
  Divider,
} from "rsc-daisyui";
import { Dialog } from "./dialog";
import { Info } from "./info";

import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="m-8">
      <h1 className="text-5xl font-bold">daisyUI for React Server Component</h1>
      <Info />
      <h2 className="text-2xl font-bold">Kitchen Sink</h2>
      <Divider />
      <Badge ghost>Buttons</Badge>
      <div className="p-4 space-x-1">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
      </div>
      <Badge>Same buttons with another theme!</Badge>
      <div className="p-4 space-x-1" data-theme="cupcake">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
      </div>
      <Divider />
      <Badge ghost>Tab</Badge>
      <Tabs className="p-4" decorate="lift">
        <Tabs.Tab as="button">Tab 1</Tabs.Tab>
        <Tabs.Tab active as="button">
          Tab 2
        </Tabs.Tab>
        <Tabs.Tab as="button">Tab 3</Tabs.Tab>
      </Tabs>
      <Divider />
      <Badge ghost>Toggle</Badge>
      <div className="p-4">
        <Toggle /> <Toggle color="primary" /> <Toggle color="secondary" />{" "}
        <Toggle color="accent" />
        <br />
        <h3>Checkbox</h3>
        <Checkbox /> <Checkbox color="primary" /> <Checkbox color="secondary" />{" "}
        <Checkbox color="accent" />
        <br />
        <h3>Radio</h3>
        <Radio name="radio" /> <Radio color="primary" name="radio" />{" "}
        <Radio color="secondary" name="radio" />{" "}
        <Radio color="accent" name="radio" />
      </div>
      <Divider />
      <Badge ghost>Card</Badge>
      <Card className="m-4 w-80 shadow">
        <figure>
          <img alt="figure" src="https://picsum.photos/id/103/500/250" />
        </figure>
        <Card.Body>
          <Card.Title>DaisyUI Card</Card.Title>
          <div>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus.
          </div>
        </Card.Body>
      </Card>
      <Divider />
      <Badge ghost>Dropdown</Badge>

      <div>
        <Dropdown className="m-4">
          <Dropdown.Button>open/close dropdown</Dropdown.Button>
          <Dropdown.Menu className="z-[2] w-52 rounded-box bg-base-200 p-2">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Divider />
      <Badge ghost>Modal</Badge>
      <Badge>Open the modal using useRef showModal() method</Badge>
      <div className="m-4">
        <Dialog />
      </div>
      <Divider />
      <Badge ghost>Steps</Badge>
      <Steps className="my-4 w-full">
        <Steps.Step color="primary">Register</Steps.Step>
        <Steps.Step color="primary">Choose plan</Steps.Step>
        <Steps.Step>Purchase</Steps.Step>
        <Steps.Step>Receive Product</Steps.Step>
      </Steps>
      <Divider />
      <Badge ghost>Chat bubble</Badge>
      <Chat align="start" className="m-4">
        <Chat.Avatar>
          <div className="w-10 rounded-full">
            <img
              alt="avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </Chat.Avatar>
        <Chat.Bubble>
          see all components{" "}
          <Link target="_blank" href="https://daisyui.com/components">
            Here
          </Link>
        </Chat.Bubble>
      </Chat>
    </main>
  );
}
