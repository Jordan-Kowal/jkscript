import objectToFlatFormData from "./objectToFlatFormData";

describe("transform/objectToFlatFormData", () => {
  test("Should correctly turn an object into a flat form-data object", () => {
    const initialObject = {
      intField: 1,
      stringField: "hello",
      objectField: {
        stringSubField: "world",
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
    const formData = objectToFlatFormData(initialObject, false);
    const expectedOutput = [
      ["intField", "1"],
      ["stringField", "hello"],
      ["objectField[stringSubField]", "world"],
      ["objectField[listSubField][0][subObjectField1]", "1"],
      ["objectField[listSubField][0][subObjectField2]", "2"],
      ["objectField[listSubField][1][subObjectField1]", "3"],
      ["objectField[listSubField][1][subObjectField2]", "4"],
    ];
    [...formData.entries()].forEach(([fieldName, value], i) => {
      expect(fieldName).toEqual(expectedOutput[i][0]);
      expect(value).toEqual(expectedOutput[i][1]);
    });
  });
});
