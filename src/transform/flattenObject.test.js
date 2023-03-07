import flattenObject from './flattenObject';

describe('transform/flattenObject', () => {
  test('Should correctly flatten the object', () => {
    const initialObject = {
      intField: 1,
      stringField: 'hello',
      objectField: {
        stringSubField: 'world',
        listSubField: [
          {
            subObjectField1: 1,
            subObjectField2: 2,
          },
          {
            subObjectField1: 3,
            subObjectField2: 4,
          },
        ],
      },
    };
    const expectedOutput = {
      intField: 1,
      stringField: 'hello',
      'objectField[stringSubField]': 'world',
      'objectField[listSubField][0][subObjectField1]': 1,
      'objectField[listSubField][0][subObjectField2]': 2,
      'objectField[listSubField][1][subObjectField1]': 3,
      'objectField[listSubField][1][subObjectField2]': 4,
    };
    expect(flattenObject(initialObject)).toEqual(expectedOutput);
  });
});
