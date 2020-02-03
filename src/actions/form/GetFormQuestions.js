/**
  * @desc for given id, it returns the questions of a form
  * @param string $apiKey - key for authentication
  * @param string $formId - id for returning form
  * @return promise - it uses fetch for requests and returns a promise
*/
export const GetFormQuestions = (apiKey, formId) => {
    const url =
      "https://api.jotform.com/form/" + formId + "/questions?apiKey=" + apiKey + "";
  
    return fetch(url);
  };
  