import { useState } from "react";

export const MyState = () => {
  const [state, setState] = useState("Deeply asleep");

  return; (
  <>
    <input
      type="text"
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  </>)
};
