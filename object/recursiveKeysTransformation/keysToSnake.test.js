/* eslint-disable camelcase */
import { keysToSnake } from './recursiveKeysTransformation';

describe('utils/keysToSnake', () => {
  test('transform keys from object from camelCase to sanke_Case', () => {
    const camel = {
      iAmACamel: 'he is',
    };
    expect(keysToSnake(camel)).toEqual({
      i_am_a_camel: 'he is',
    });
  });
  test('deep transform keys from object to snake_case', () => {
    const camelChili = {
      bestChili: {
        chiliIngredients: [
          'beef',
          'dried_chilis',
          'fresh tomatoes',
          'cumin',
          'onions',
          'onion-powder',
          'peppers',
        ],
        chiliSteps: {
          stepOne: '',
          stepTwo: '',
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
          'beef',
          'dried_chilis',
          'fresh tomatoes',
          'cumin',
          'onions',
          'onion-powder',
          'peppers',
        ],
        chili_steps: {
          step_one: '',
          step_two: '',
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
