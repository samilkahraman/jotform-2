/**
 * @desc for given id, it returns the webhooks of a form
 * @param string $apiKey - key for authentication
 * @param string $formId - id for returning form
 * @return promise - it uses fetch for requests and returns a promise
 */
export const GetFormWebHooks = (apiKey, formId) => {
    const url =
      "https://api.jotform.com/form/" + formId + "/webhooks?apiKey=" + apiKey + "";
  
    return fetch(url);
  };
  