/**
 * @desc for given id, it returns the spesific propertie of a form
 * @param string $apiKey - key for authentication
 * @param string $formId - id for returning form
 * @param string $key - key for the property
 * @return promise - it uses fetch for requests and returns a promise
 */
export const GetFormQuestions = (apiKey, formId, key) => {
  const url =
    "https://api.jotform.com/form/" +
    formId +
    "/properties/ " +
    key +
    "?apiKey=" +
    apiKey +
    "";
  return fetch(url);
};
