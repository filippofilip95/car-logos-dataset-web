import { toRepoUrl } from "src/components/AboutProject";

const BLOB = "https://github.com/filippofilip95/car-logos-dataset/blob/master/";

test("relative README links go to the dataset repo", () => {
  expect(toRepoUrl("LICENSE")).toBe(BLOB + "LICENSE");
  expect(toRepoUrl("./CONTRIBUTING.md")).toBe(BLOB + "CONTRIBUTING.md");
});

test("absolute links, anchors and unsafe links", () => {
  expect(toRepoUrl("https://www.carlogos.org/")).toBe("https://www.carlogos.org/");
  expect(toRepoUrl("#license")).toBe("#license");
  expect(toRepoUrl("javascript:alert(1)")).toBe("javascript:void(0)");
});
