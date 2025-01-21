"use client";

import React from "react";

import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { Logo } from "@/config/logo";
import { Icon } from "@iconify/react";

const Unsubscribe = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <Logo />
          <p className="text-xl font-medium">Unsubscribe</p>
          <p className="text-small text-default-500">
            Unsubscribe from your current plan
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <RadioGroup isDisabled label="Your Plan" defaultValue={"9.99"}>
            <Radio value="9.99">$9.99 per month</Radio>
          </RadioGroup>

          <Input
            type="email"
            label="Email Address"
            placeholder="Email"
            variant="bordered"
            isDisabled
          />

          <Button
            className="w-full"
            color="danger"
            type="submit"
            startContent={<Icon icon="solar:card-recive-bold" fontSize={19} />}
          >
            UnSubscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
