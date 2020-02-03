/**
 * @desc for given id and question id, it returns the question detail of a form
 * @param string $apiKey - key for authentication
 * @param string $formId - id for returning form
 * @param string $questionId - id of question
 * @return promise - it uses fetch for requests and returns a promise
 */
export const GetSpecificQuestion = (apiKey, formId, questionId) => {
  const url =
    "https://api.jotform.com/form/" +
    formId +
    "/question/" +
    questionId +
    "?apiKey=" +
    apiKey +
    "";

  return fetch(url);
};
