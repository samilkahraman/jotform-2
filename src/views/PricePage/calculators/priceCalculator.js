/**
 * @desc for given price it calculates the tax and discounts
 * @param integer $apiKey - key for authentication
 * @param integer $formId - id for returning form
 * @return promise - it uses fetch for requests and returns a promise
 */
export const priceCalculator = (apiKey, formId) => {
  const url = 'https://api.jotform.com/form/' + formId + '?apiKey=' + apiKey + '';

  return fetch(url, { method: 'DELETE' });
};
