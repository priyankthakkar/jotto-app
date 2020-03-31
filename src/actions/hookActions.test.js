import moxios from "moxios";
import hookActions from "./hookActions";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("calls `getSecretWord` callback on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // create mock callback arg
    const mockSetSecretWord = jest.fn();

    await hookActions.getSecretWord(mockSetSecretWord);

    // set whether callcaked arg was called once
    expect(mockSetSecretWord.mock.calls.length).toBe(1);
  });
});
