"use client";

import React from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@heroui/react";

export default function NewInterview() {
  return (
    <div className="p-4">
      <Form validationBehavior="native">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="col-span-1">
            <h3 className="text-xl">Select all options below:</h3>
          </div>

          <div className="col-span-1">
            <div className="flex gap-4 max-w-sm justify-end items-center">
              <Button color="primary" type="submit">
                Create Interview
              </Button>
              <Button type="reset" variant="bordered">
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full">
          <div className="col-span-1">
            <div className="w-full flex flex-col space-y-4">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Select
                  isRequired
                  label="Industry"
                  labelPlacement="outside"
                  name="industry"
                  placeholder="Select Industry"
                >
                  <SelectItem value={"industry"}>{"industry"}</SelectItem>
                </Select>

                <Select
                  isRequired
                  label="Topic"
                  labelPlacement="outside"
                  name="topic"
                  placeholder="Select Topic"
                >
                  <SelectItem value={"topic"}>{"topic"}</SelectItem>
                </Select>

                <Select
                  isRequired
                  label="Interview Type"
                  labelPlacement="outside"
                  name="type"
                  placeholder="Select interview type"
                >
                  <SelectItem value={"type"}>{"type"}</SelectItem>
                </Select>

                <Input
                  isRequired
                  type="text"
                  label="Job Role"
                  labelPlacement="outside"
                  name="role"
                  placeholder="software developer, data scientist, etc."
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full flex flex-col space-y-4">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Select
                  isRequired
                  label="Difficulty"
                  labelPlacement="outside"
                  name="difficulty"
                  placeholder="Select difficulty"
                >
                  <SelectItem value={"difficulty"}>{"difficulty"}</SelectItem>
                </Select>

                <Input
                  isRequired
                  type="number"
                  label="No of Question"
                  labelPlacement="outside"
                  name="numOfQuestions"
                  placeholder="Enter no of questions"
                />

                <Input
                  isRequired
                  type="number"
                  label="Duration"
                  labelPlacement="outside"
                  name="duration"
                  placeholder="Enter duration"
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
