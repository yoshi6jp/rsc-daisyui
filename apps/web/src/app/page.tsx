import { Button } from "rsc-daisyui";

export default function Page(): JSX.Element {
  return (
    <main className="prose m-4">
      <h1>daisyUI for React Server Component</h1>
      <h2>Kitchen Sink</h2>
      <h3>Buttons</h3>
      <div className="p-4 space-x-1">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
      </div>
      <h3>Same buttons with another theme!</h3>
      <div className="p-4 space-x-1" data-theme="cupcake">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
      </div>
    </main>
  );
}
