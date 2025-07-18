import * as React from "react";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input type="text" data-slot="input" className={className} {...props} />
  );
}

export { Input };
