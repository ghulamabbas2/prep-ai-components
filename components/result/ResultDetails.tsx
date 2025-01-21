"use client";

import React, { useRef, useState } from "react";

import ResultStats from "./ResultStats";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import QuestionCard from "./QuestionCard";

export default function ResultDetails() {
  return (
    <div>
      <div className="px-5">
        <ResultStats />

        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row justify-between items-center my-5 gap-4">
            <div className="flex flex-wrap gap-4">
              <Chip
                color="primary"
                startContent={
                  <Icon icon="tabler:circle-check-filled" width={20} />
                }
                variant="faded"
              >
                Software Development
              </Chip>

              <Chip
                color="warning"
                startContent={
                  <Icon icon="tabler:circle-check-filled" width={20} />
                }
                variant="faded"
              >
                Technical
              </Chip>

              <Chip
                color="secondary"
                startContent={
                  <Icon icon="tabler:circle-check-filled" width={20} />
                }
                variant="faded"
              >
                React
              </Chip>
            </div>
          </div>

          <QuestionCard />

          <div className="flex justify-center items-center mt-10"></div>
        </div>
      </div>
    </div>
  );
}
