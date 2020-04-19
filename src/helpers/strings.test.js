import { getStringByLanguage } from "./strings";

const strings = {
  en: { submit: "submit" },
  emoji: { submit: "🚀" },
  mermish: {},
};

describe("`getStringByLanguage`", () => {
  let originalWarn = console.warn;
  const mockWarn = jest.fn();

  beforeEach(() => {
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  test("returns correct submit string for english", () => {
    const string = getStringByLanguage("en", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns the correct submit string for emoji", () => {
    const string = getStringByLanguage("emoji", "submit", strings);
    expect(string).toBe("🚀");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("returns english submit string when language does not exist", () => {
    const string = getStringByLanguage("notALanguage", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      `Did not find string with key: [submit] for language: [notALanguage]`
    );
  });

  test("returns english submit string when submit key does not exist for language", () => {
    const string = getStringByLanguage("mermish", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      `Did not find string with key: [submit] for language: [mermish]`
    );
  });
});
