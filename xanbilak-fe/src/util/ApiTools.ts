/* eslint-disable max-params */
import { apiBaseUrl, apiVersion } from "../settings";

const SUCCESS_OK = 200;
const SUCCESS_CREATED = 201;
const SUCCESS_ACCEPTED = 202;
const SUCCESS_NO_CONTENT = 204;
const NO_ERROR_MESSAGE = "No error message";

export const getData = (
  apiAddress: string, baseUrl: string = apiBaseUrl,
  version: string = apiVersion,
): any => fetch(
  `${baseUrl}/${version}/${apiAddress}`,
  {
    "method": "GET",
    "headers": {
      "accept": "application/json",
    },
  },
).then((response) => ({
  response: response.json(),
  status: response.status,
  statusText: response.statusText,
}))
  .then(async ({ response, status, statusText }) => {

    switch (status) {

    case SUCCESS_OK:
    case SUCCESS_CREATED:
    case SUCCESS_ACCEPTED:
    case SUCCESS_NO_CONTENT:
      return response;
    default:
      // eslint-disable-next-line no-case-declarations
      const data = await response;

      /*
       * X return "Error " + status + " : " +
       * (data && data.message ? data.message : statusText
       *    ? statusText : 'No error message')
       */

      // eslint-disable-next-line no-nested-ternary
      throw new Error(`Error ${status} : ${data && data.message
        ? data.message
        : statusText
          ? statusText
          : NO_ERROR_MESSAGE}`);

    }

  });

/*
 * .catch(err => {
 *      console.error('Error in calling API: ', err);
 *  });
 */

export const sendData = (
  apiAddress: string, data: any, baseUrl: string = apiBaseUrl,
  // eslint-disable-next-line max-len
  version: string = apiVersion, httpMethod = "POST",
): any => fetch(
  `${baseUrl}/${version}/${apiAddress}`,
  {
    // POST Or PUT Or DELETE
    "method": httpMethod,
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
    },
    "body": JSON.stringify(data),
  },
).then((response) => ({
  response: response.json(),
  status: response.status,
  statusText: response.statusText,
}))
  .then(async ({ response, status, statusText }) => {

    switch (status) {

    case SUCCESS_OK:
    case SUCCESS_CREATED:
    case SUCCESS_ACCEPTED:
    case SUCCESS_NO_CONTENT:
      return response;
    default:
      // eslint-disable-next-line no-case-declarations
      const data2 = await response;
      throw new Error(`Error ${status} : ${
        // eslint-disable-next-line no-nested-ternary
        data2 && data2.message
          ? data2.message
          : statusText
            ? statusText
            : NO_ERROR_MESSAGE}`);

    }

  });

/*
 * .catch(err => {
 *      console.error('Error: ', err);
 *  });
 */
