import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import BeakerIcon from "@heroicons/24/solid/BeakerIcon.js";
import { pattern } from "https://deno.land/x/fresh_tailwind@v0.3.0/hero.ts";
import TabsPanel from "../components/Tabs.tsx";
import Progress from "../components/Progress.tsx";
import TabExample from "../islands/TabExample.tsx";

const dotPattern =
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"><path fill="#000000" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"></path></svg>';

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex flex-col w-full items-stretch justify-stretch">
      <aside class="devmode flex">
        <BeakerIcon class="h-4 w-4" />
        You are in development mode.
      </aside>
      <div
        class="px-4 py-8 bg-fresh pb-48"
        style={pattern("#7ec19c", dotPattern)}
      >
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6 animate-bounce"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />

          <Progress value="5" max="10" />
        </div>
      </div>
      <TabsPanel class="-translate-y-48 mx-4 lg:mx-auto lg:w-1/2">
        <TabExample {...{ count }} />
      </TabsPanel>
    </div>
  );
}
