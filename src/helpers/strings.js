const languageStrings = {
  en: {
    congrats: "Congratulations! You guessed the word!",
    submit: "Submit",
    guessPrompt: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed Words",
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
  },
  emoji: {
    congrats: "🎯🎉",
    submit: "🚀",
    guessPrompt: "🤔🤫🔤",
    guessInputPlaceholder: "⌨️🤔",
    guessedWords: "🤷‍🔤",
    guessColumnHeader: "🤷‍",
    matchingLettersColumnHeader: "✅",
  },
};

export const getStringByLanguage = (
  languageCode,
  stringKey,
  strings = languageStrings
) => {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(
      `Did not find string with key: [${stringKey}] for language: [${languageCode}]`
    );
    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey];
};
