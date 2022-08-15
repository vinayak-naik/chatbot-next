import React from "react";

function TextError({ children }: React.PropsWithChildren<{}>) {
  return <div style={{ color: "red" }}>{children}</div>;
}

export default TextError;
