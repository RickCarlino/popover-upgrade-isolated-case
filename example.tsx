import * as React from "react";
import { Popover, Position } from "@blueprintjs/core";
import { render } from "react-dom";

export function Example(p: {}) {
  return <div>
    <Popover
      position={Position.BOTTOM_RIGHT}
      target={<button>Click me!</button>}
      content={<div>Hello?</div>} />
  </div>;
}

render(<Example />, document.querySelector("#app"));
