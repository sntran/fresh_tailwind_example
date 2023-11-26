import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Head, Partial } from "$fresh/runtime.ts";
import { Panel } from "../../components/Tabs.tsx";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute(async (req, ctx) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${ctx.params.tab}`,
  );
  const content = await res.json();

  // Only render the new content
  return (
    <>
      <Head>
        <title>Tab {content.name}</title>
      </Head>
      <Partial name="tab-content">
        <Panel tabId={ctx.params.tab}>
          <h1 class="font-sans text-2xl font-bold uppercase block xyz">
            {content.name}
          </h1>
          <p>{content.flavor_text_entries[0].flavor_text}</p>
        </Panel>
      </Partial>
    </>
  );
});
