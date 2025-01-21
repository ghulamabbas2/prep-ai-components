"use client";

import React, { ReactNode } from "react";
import { cn, Listbox, ListboxItem } from "@heroui/react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

export const IconWrapper = ({ children, className }: IconWrapperProps) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);

const AppSiderbar = () => {
  return (
    <div className="sticky top-[90px] z-10">
      <Listbox
        aria-label="User Menu"
        className="py-8 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none h-12 data-[hover=true]:bg-default-100/80",
        }}
        selectedKeys={["#"]}
      >
        <ListboxItem
          key="#"
          className={"mt-3"}
          textValue="New Interview"
          startContent={
            <Button
              className="bg-foreground font-medium text-background w-full"
              color="secondary"
              endContent={<Icon icon="ep:circle-plus-filled" />}
              variant="flat"
              as={Link}
              href="/app/interviews/new"
            >
              New Interview
            </Button>
          }
        />
        <ListboxItem
          key="/app/interviews"
          className={`mt-3 bg-gray-100 dark:bg-gray-800`}
          startContent={
            <IconWrapper className={`bg-success `}>
              <Icon icon="carbon:document-pdf" className="text-lg " />
            </IconWrapper>
          }
          textValue=""
        >
          Interviews
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default AppSiderbar;
