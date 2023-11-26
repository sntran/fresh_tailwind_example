import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fresh with Tailwind</title>
      </head>
      <body f-client-nav>
        <Component />
      </body>
    </html>
  );
}
