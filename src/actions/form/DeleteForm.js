/**
 * @desc for given id, it deletes a form
 * @param string $apiKey - key for authentication
 * @param string $formId - id for returning form
 * @return promise - it uses fetch for requests and returns a promise
 */
export const DeleteForm = (apiKey, formId) => {
  const url = 'https://api.jotform.com/form/' + formId + '?apiKey=' + apiKey + '';

  return fetch(url, { method: 'DELETE' });
};
