/* eslint-disable camelcase */
import { keysToCamel } from './recursiveKeysTransformation';

describe('utils/keysToCamel', () => {
  test('transform keys from object from camel_case to camelCase', () => {
    const snake = {
      i_am_a_snake: 'he is',
    };
    expect(keysToCamel(snake)).toEqual({
      iAmASnake: 'he is',
    });
  });
  test('transform keys from object from kebab-case to camelCase', () => {
    const kebab = {
      'i-am-a-kebab': 'he is',
    };
    expect(keysToCamel(kebab)).toEqual({
      iAmAKebab: 'he is',
    });
  });
  test('depp transform keys from object to camelCase', () => {
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
          'french-bread': {},
        },
        {
          'rye-croutons': {},
        },
      ],
    };
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
    expect(keysToCamel(snake_chili)).toEqual(camelChili);
  });
});
