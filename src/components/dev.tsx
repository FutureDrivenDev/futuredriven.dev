/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib */
import { tw } from "../deps.ts";
import { Link } from "./link.tsx";
import { Ruler } from "./ruler.tsx";

export const Dev = (props: any) => (
  <div
    class={tw
      `flex flex-col w-full justify-center items-start overflow-y-hidden text-md md:text-lg lg:max-w-xl`}
  >
    <div class={tw``}>
      <span>
        Hi! My name is <strong>Guilherme Rodrigues</strong>. 🇧🇷
      </span>
      <br />
      <span>
        I'm a software developer and investor based in Rio de Janeiro, Brasil.
      </span>
      <Ruler />
      <span>
        I'm committed to a future in which Brasil is a prosperous country, and a
        {" "}
        <strong>protagonist in technology.</strong> Join me:{" "}
        <Link href="https://movtech.org" target="_blank">
          movtech.org
        </Link>.
      </span>
      <Ruler />
      <span>
        I am committed to{" "}
        <strong>high performance communication</strong>, and to sharing it with
        other builders at{"   "}
        <Link href="https://futuredriven.capital">
          futuredriven.capital
        </Link>.
      </span>
      <Ruler />
      <span>
        I write about <strong>communication, culture and coding</strong>{"  "}
        at my blog:{"   "}
        <Link href="https://futuredriven.blog">
          futuredriven.blog
        </Link>.
      </span>
    </div>
  </div>
);
