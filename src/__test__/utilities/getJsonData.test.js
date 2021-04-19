import "@testing-library/jest-dom/extend-expect";

import getJsonData from "../../utilities/getJsonData.js";

describe("Load JSON data asynchronously", () => {
  window.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => {
          return { Name: "Alrik" };
        }
      })
    )
    .mockImplementationOnce(() => 
    Promise.resolve({ 
      ok: false,
      status: 404,
      statusText: "Not Found"
    }));

  it("returns an object with a 'json' function if response is set to OK", async () => {
    let response = await getJsonData("found.json");
    expect(response).toMatchObject({ Name: "Alrik" });
  });

  it("fails with error message if response is not OK", async () => {
    await expect(getJsonData("notFound.json")).rejects.toThrowError("404 Not Found");
  });
});

describe("", () => {});
