import dataReducer, { addData } from "./dataSlice";

describe("data reducer", () => {
  const initialState = {
    userData: [],
  };
  it("should handle initial state", () => {
    expect(dataReducer(undefined, { type: "unknown" })).toEqual({
      userData: [],
    });
  });

  it("should handle addData function", () => {
    const actual = dataReducer(initialState, addData({ Name: "Tes-1" }));
    expect(actual.userData).toEqual([{ Name: "Tes-1" }]);
  });
});
