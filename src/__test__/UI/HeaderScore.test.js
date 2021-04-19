import "@testing-library/jest-dom/extend-expect";
import { render, get } from "@testing-library/svelte";

import HeaderScore from "../../UI/HeaderScore.svelte";

test("shows icon by file name in assets", () => {
  const { getByRole } = render(HeaderScore, { icon: "heart" });

  expect(getByRole("img").getAttribute("src")).toEqual("assets/icons/heart.svg");
});

test("shows passed value prop as score", () => {
  const { container } = render(HeaderScore, { icon: "heart", score: 34 });

  expect(container.querySelector("p").textContent).toEqual("34");
});
