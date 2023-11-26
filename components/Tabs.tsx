import type { JSX } from "preact";
import { IS_BROWSER, Partial } from "$fresh/runtime.ts";
import { type ForwardedRef, forwardRef } from "preact/compat";
export interface TabProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  partial: string;
  children?: JSX.Element | JSX.Element[] | string;
  tabId?: number | string;
}

export interface TabElement extends JSX.Element {
  props: TabProps;
}

export interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: TabElement | TabElement[] | JSX.Element | JSX.Element[];
}

export function Tab(
  { href, partial, children, tabId, ...rest }: TabProps,
): TabElement {
  return (
    <a
      f-partial={partial}
      id={`tab-${tabId}`}
      tabIndex={0}
      aria-selected={IS_BROWSER && location.pathname === href}
      role="tab"
      aria-controls={`panel-${tabId}`}
      {...{ href }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Panel(
  { children, tabId }: {
    children: JSX.Element | JSX.Element[];
    tabId: number | string;
  },
) {
  return (
    <div
      class="tab-panel__panel"
      role="tabpanel"
      aria-labelledby={`tab-${tabId}`}
      id={`panel-${tabId}`}
    >
      {children}
    </div>
  );
}

const TabPanel = forwardRef(
  (
    { children, ...rest }: TabsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        {...{ ref }}
        class={`tab-panel ${rest.className ?? rest.class ?? ""}`}
      >
        {children}
        <Partial name="tab-content">
        </Partial>
      </div>
    );
  },
);

export default TabPanel;
