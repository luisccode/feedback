import { Bubble, Button, Checkbox, StarRating, Textarea } from "@/ui/core";
import { Arrow, Earth } from "@/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormType, feedbackSchema } from "./feedback-schema";

export const FeedbackForm = () => {
  const [roleRating, setRoleRating] = useState(0);
  const [teamRating, setTeamRating] = useState(0);

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<FormType>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <main className="w-[90vw] max-w-[650px] mx-auto my-6 ">
        <h4 className="font-bold text-2xl mb-3">Hi John,</h4>

        <p className="text-blue-900 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          ullamcorper nisl sed ante molestie, quis facilisis risus placerat.
          Morbi mattis, lectus in sollicitudin tristique, quam sem aliquam
          augue.
        </p>

        <h1 className="font-bold text-lg mb-6">
          Do you agree with the following statements:
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <Bubble>
              <p className="text-purple-100 font-bold text-sm">
                1 of 3 | Rating slider
              </p>

              <legend className="my-6 font-bold text-2xl">
                I am satisfied with my roles and responsibilities.
              </legend>

              <StarRating rating={roleRating} onChange={setRoleRating} />

              <div className="flex justify-between my-6 text-purple-100 font-bold text-[12px]">
                <p>Strongly disagree</p>

                <p>Neutral</p>

                <p>Strongly agree</p>
              </div>
            </Bubble>
          </fieldset>

          <div className="my-6 h-[2px] w-full bg-[#C5C6E1]" />

          <fieldset>
            <Bubble>
              <p className="text-purple-100 font-bold text-sm">
                2 of 3 | Rating slider
              </p>

              <legend className="my-6 font-bold text-2xl">
                I feel comfortable working and interacting with the colleagues
                on my team.
              </legend>

              <StarRating rating={teamRating} onChange={setTeamRating} />

              <div className="flex justify-between my-6 text-purple-100 font-bold text-[12px]">
                <p>Strongly disagree</p>

                <p>Neutral</p>

                <p>Strongly agree</p>
              </div>

              <div className="my-6 h-[2px] w-full bg-[#C5C6E1]" />

              <p className="text-red-500 font-bold my-6">
                Which of the following should we improve on?
              </p>

              <Checkbox
                id="quality_of_feedback"
                label="Quality of feedback"
                name="quality_of_feedback"
                className="mb-6"
                register={register}
              />

              <Checkbox
                id="actionability_of_feedback"
                label="Actionability of feedback"
                name="actionability_of_feedback"
                register={register}
              />

              <Textarea
                name="comment"
                register={register}
                placeholder="Add a comment"
                className="mt-3"
              />

              <Checkbox
                label="Openness to receive peer feedback"
                id="openness_to_receive_peer_feedback"
                name="openness_to_receive_peer_feedback"
                register={register}
                className="my-6"
              />

              <Checkbox
                label="Other"
                id="other"
                name="other"
                register={register}
              />
            </Bubble>
          </fieldset>

          <fieldset className="my-6 text-white">
            <Bubble
              background="bg-[#55577E]"
              className="relative"
              triangleColor="#55577E"
            >
              <div className="absolute right-6 top-6 w-[80px] h-[80px] bg-[#292A3D] rounded-full flex justify-center items-center px-4 hover:scale-110 transition-all duration-200">
                <p className="font-bold text-[12px] text-center">
                  Extra feedback helps
                </p>
              </div>

              <p className="font-bold text-sm">3 of 3 | Open ended</p>

              <legend className="my-6 font-bold text-2xl w-1/2">
                Would you like to add anything?
              </legend>

              <Textarea
                name="extra_comment"
                register={register}
                placeholder="Express yourself freely and safely. This will always remain anonymous."
                className="mt-3 placeholder:text-purple-100 text-purple-100"
              />
            </Bubble>
          </fieldset>

          <Button className="ml-auto" type="submit">
            <span className="mr-3">Submit</span>
            <Arrow />
          </Button>
        </form>

        <footer className="text-center mt-6">
          <button className="flex justify-center items-center bg-[#FCFCFE] px-3 py-2.5 text-purple-100 mx-auto border border-[#E1E1EE] rounded-lg font-bold text-sm">
            <span className="mr-3">Modify my language</span>
            <Earth />
          </button>

          <p className="mt-6 text-[#55577E]">
            What is this? Meet{" "}
            <a
              className="text-blue-500"
              href="https://www.butterfly.ai"
              target="_blank"
            >
              Butterfly.ai
            </a>
          </p>

          <p className="text-blue-500 my-4">
            Terms of Service | Privacy Policy
          </p>

          <p>©2016-{new Date().getFullYear()} Appynest, Inc.</p>
        </footer>
      </main>
    </>
  );
};
