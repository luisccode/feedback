import * as z from "zod";

export const feedbackSchema = z.object({
  comment: z.string().min(1, "Please enter a comment"),
  extra_comment: z.string().optional(),
  quality_of_feedback: z.boolean(),
  actionability_of_feedback: z.boolean(),
  openness_to_receive_peer_feedback: z.boolean(),
  other: z.boolean(),
});

export type FormType = z.infer<typeof feedbackSchema>;
