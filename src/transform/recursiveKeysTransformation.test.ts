import { keysToCamel, keysToSnake } from "./recursiveKeysTransformation";

describe("transform/keysToSnake", () => {
  test("Should transform keys from object from camelCase to snake_Case", () => {
    const camel = {
      iAmACamel: "he is",
    };
    expect(keysToSnake(camel)).toEqual({
      i_am_a_camel: "he is",
    });
  });
  test("Should deep transform keys from object to snake_case", () => {
    const camelChili = {
      bestChili: {
        chiliIngredients: [
          "beef",
          "dried_chilis",
          "fresh tomatoes",
          "cumin",
          "onions",
          "onion-powder",
          "peppers",
        ],
        chiliSteps: {
          stepOne: "",
          stepTwo: "",
        },
      },
      serves: 6,
      pairsWith: [
        {
          frenchBread: {},
        },
        {
          ryeCroutons: {},
        },
      ],
    };
    const snake_chili = {
      best_chili: {
        chili_ingredients: [
          "beef",
          "dried_chilis",
          "fresh tomatoes",
          "cumin",
          "onions",
          "onion-powder",
          "peppers",
        ],
        chili_steps: {
          step_one: "",
          step_two: "",
        },
      },
      serves: 6,
      pairs_with: [
        {
          french_bread: {},
        },
        {
          rye_croutons: {},
        },
      ],
    };

    expect(keysToSnake(camelChili)).toEqual(snake_chili);
  });
});

describe("transform/keysToCamel", () => {
  test("Should transform keys from object from camel_case to camelCase", () => {
    const snake = {
      i_am_a_snake: "he is",
    };
    expect(keysToCamel(snake)).toEqual({
      iAmASnake: "he is",
    });
  });
  test("Should transform keys from object from kebab-case to camelCase", () => {
    const kebab = {
      "i-am-a-kebab": "he is",
    };
    expect(keysToCamel(kebab)).toEqual({
      iAmAKebab: "he is",
    });
  });
  test("Should deep transform keys from object to camelCase", () => {
    const snake_chili = {
      best_chili: {
        chili_ingredients: [
          "beef",
          "dried_chilis",
          "fresh tomatoes",
          "cumin",
          "onions",
          "onion-powder",
          "peppers",
        ],
        chili_steps: {
          step_one: "",
          step_two: "",
        },
      },
      serves: 6,
      pairs_with: [
        {
          "french-bread": {},
        },
        {
          "rye-croutons": {},
        },
      ],
    };
    const camelChili = {
      bestChili: {
        chiliIngredients: [
          "beef",
          "dried_chilis",
          "fresh tomatoes",
          "cumin",
          "onions",
          "onion-powder",
          "peppers",
        ],
        chiliSteps: {
          stepOne: "",
          stepTwo: "",
        },
      },
      serves: 6,
      pairsWith: [
        {
          frenchBread: {},
        },
        {
          ryeCroutons: {},
        },
      ],
    };
    expect(keysToCamel(snake_chili)).toEqual(camelChili);
  });
});
