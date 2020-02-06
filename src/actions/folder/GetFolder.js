/**
 * @desc for given id, it returns a form
 * @param string $apiKey - key for authentication
 * @param string $folderId - id for returning folder
 * @return promise - it uses fetch for requests and returns a promise
 */
export const GetFolder = (apiKey, folderId) => {
  const url = `https://api.jotform.com/folder/${folderId}?apiKey=${apiKey}`;

  return fetch(url);
};
