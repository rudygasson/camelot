/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import HeaderScore from "../../UI/HeaderScore.svelte";

describe("Header Score component", () => {
  it("shows passed value prop as score", () => {
    const { container } = render(HeaderScore, { score: 34 });
    expect(container.querySelector(".score__value").textContent).toEqual("34");
  });
  
  it("shows 0 as default value", () => {
    const { container } = render(HeaderScore);
    expect(container.querySelector(".score__value").textContent).toEqual("0");
  });

  it("does not change markup", () => {
    const { container } = render(HeaderScore, { score: 42 });
    expect(container).toMatchSnapshot();
  });
});
