//@ts-ignore
export const workoutAndMealPlanPrompt = (exercise) => `
  The user selected ${exercise} as their workout.

  1️⃣ Provide 3 additional exercises from a fitness app to complement this workout. Provide a brief description for each exercise and make it short only 1 line.
  2️⃣ Provide a meal plan (breakfast, lunch, dinner) that supports the selected workout. Provide each time a different meal plan based on the workout the user chooses. The meal plan should include varied meal options from different cuisines and be suited to the needs of the exercise.

  **Format instructions:**

  - The format should be as follows (do not deviate from this structure):
  
  Exercises to do with ${exercise}:

  1- Brief description here.
  
  2- Brief description here.

  3- Brief description here.

  Meal Plan:

  - 🍳 Breakfast: [Meal]

  - 🥗 Lunch: [Meal]

  - 🥑 Dinner: [Meal]
`;
