import axios from "axios";

/**
 * Function retrieve the secret word from the server, and sets it for the app
 * with the help of callback function received in the argument.
 *
 * @function
 * @name getSecretWord
 * @param {function} setSecretWord - A callback function, which is called to
 * set the secret word on successful reponse from server
 * @returns {undefined}
 */
const getSecretWord = async setSecretWord => {
  try {
    const response = await axios.get("http://localhost:3030");
    setSecretWord(response.data);
  } catch (error) {}
};

export default {
  getSecretWord
};
