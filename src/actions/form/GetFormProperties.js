/**
  * @desc for given id, it returns the properties of a form
  * @param string $apiKey - key for authentication
  * @param string $formId - id for returning form
  * @return promise - it uses fetch for requests and returns a promise
*/
export const GetFormQuestions = (apiKey, formId) => {
    const url =
      "https://api.jotform.com/form/" + formId + "/properties?apiKey=" + apiKey + "";
  
    return fetch(url);
  };
  