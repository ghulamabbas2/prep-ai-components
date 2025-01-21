"use client";

import React from "react";
import { Button, Input, Form, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function UpdateProfile() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <div className="flex flex-col gap-1">
          <h1 className="text-large font-medium">Update Profile</h1>
          <p className="text-small text-default-500">
            Enter details to update profile
          </p>
        </div>

        <Form className="flex flex-col gap-5" validationBehavior="native">
          <Input
            isRequired
            label="Name"
            name="name"
            placeholder="Enter your name"
            type="text"
            variant="bordered"
          />

          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            isDisabled
          />

          <div className="flex gap-1 items-center">
            <Avatar showFallback size="lg" radius="sm" />
            <Input
              label="Avatar"
              name="avatar"
              type="file"
              variant="bordered"
            />
          </div>

          <Button
            className="w-full"
            color="primary"
            type="submit"
            endContent={<Icon icon="akar-icons:arrow-right" />}
          >
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}
