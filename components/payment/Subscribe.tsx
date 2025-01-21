"use client";

import React from "react";

import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import { Logo } from "@/config/logo";
import { Icon } from "@iconify/react";

const Subscribe = () => {
  return <CheckoutForm />;
};

const CheckoutForm = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <Logo />
          <p className="text-xl font-medium">Subscribe</p>
          <p className="text-small text-default-500">
            Enter your email and card details to subscribe
          </p>
        </div>

        <form className="flex flex-col gap-5">
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
          <div className="my-4"></div>
          <Button
            className="w-full"
            color="primary"
            type="submit"
            startContent={<Icon icon="solar:card-send-bold" fontSize={19} />}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
