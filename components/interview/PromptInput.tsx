"use client";

import type { TextAreaProps } from "@nextui-org/react";

import React from "react";
import { Textarea } from "@nextui-org/react";
import { cn } from "@nextui-org/react";

const PromptInput: React.FC<TextAreaProps> = ({
  classNames = {},
  ...props
}) => {
  return (
    <Textarea
      aria-label="Prompt"
      className="min-h-[40px]"
      classNames={{
        ...classNames,
        label: cn("hidden", classNames?.label),
        input: cn("py-0", classNames?.input),
      }}
      minRows={1}
      placeholder="Enter your answer here"
      radius="lg"
      variant="bordered"
      {...props}
    />
  );
};

export default PromptInput;
