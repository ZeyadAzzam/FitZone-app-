import axios from "axios";
import { workoutAndMealPlanPrompt } from "./prompt";

const API_KEY = "test";

// @ts-ignore
export const getWorkoutAndMealPlan = async (exercise) => {
  const prompt = workoutAndMealPlanPrompt(exercise);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
      },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI suggestion:", error);
    return "Failed to generate workout and meal plan.";
  }
};
