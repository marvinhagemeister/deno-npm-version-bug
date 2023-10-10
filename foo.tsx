import { options } from "preact";
import { renderToString } from "preact-render-to-string";

const rendered: string[] = [];
const oldDiffed = options.diffed;
options.diffed = (vnode) => {
  const name =
    typeof vnode.type === "function" ? vnode.type.name : String(vnode.type);
  rendered.push(name);
  oldDiffed?.(vnode);
};

renderToString(<h1>hello</h1>);

console.log(rendered.length > 0 ? "it works" : "it doesn't work");
