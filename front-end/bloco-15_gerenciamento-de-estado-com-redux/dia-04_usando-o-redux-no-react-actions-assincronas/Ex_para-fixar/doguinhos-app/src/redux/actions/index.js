export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

export function requestDog() {
  return { type: REQUEST_IMAGE };
}

export function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}