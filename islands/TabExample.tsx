import type { JSX } from "preact";
import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { Tab } from "../components/Tabs.tsx";

interface TabExampleProps {
  count: Signal<number>;
}

export default function TabExample({ count }: TabExampleProps): JSX.Element {
  const tabList = [];

  for (let idx = 1; idx <= count.value; idx++) {
    tabList.push(
      <Tab
        key={idx}
        href={`/#/tab/${idx}`}
        partial={`/partials/${idx}`}
        class="tab-panel__tab"
        tabId={idx}
      >
        {idx.toString()}
      </Tab>,
    );
  }

  return <div class="tab-panel__tablist" role="tablist">{tabList}</div>;
}
