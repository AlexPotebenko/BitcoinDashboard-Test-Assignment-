import * as React from "react";

function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input type={type} data-slot="input" className={className} {...props} />
  );
}

export { Input };
