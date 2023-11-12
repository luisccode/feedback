"use client";
import { Header } from "@/ui/core";
import { FeedbackForm } from "@/ui/templates";

export default function Feedback() {
  return (
    <>
      <Header progress={50} />

      <FeedbackForm />
    </>
  );
}
