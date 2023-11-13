"use client";
import { Header } from "@/ui/core";
import { FeedbackForm } from "@/ui/templates";
import { useState } from "react";

export default function Feedback() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Header progress={progress} />

      <FeedbackForm progress={progress} setProgress={setProgress} />
    </>
  );
}
