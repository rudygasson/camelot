import "@testing-library/jest-dom/extend-expect";
import { render, getByRole } from "@testing-library/svelte";

import HeaderScore from "../../UI/HeaderScore.svelte";

test("shows icon as svg constructed as component in slot", () => {
  const { container } = render(HeaderScore, { icon: "Lebenspunkte", score: 42 });

  expect(container.querySelector('svg title')).toHaveAttribute('id', 'Lebenspunkte');
});

test("shows passed value prop as score", () => {
  const { container } = render(HeaderScore, { score: 34 });

  expect(container.querySelector("p").textContent).toEqual("34");
});
