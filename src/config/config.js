//set app name to all project
export const APP_NAME = process.env.name || 'TEST';

//token prefix eg. 'Bearer ' or 'Token '
export const TOKEN_PREFIX = 'Token ';

export const API_ENDPOINT = process.env.NODE_ENV === 'production'
    ? 'http://localhost:4006/api/v1' :
    'http://localhost:4006/api/v1';

export const defaultResponses = {
    noResponseFromApi: 'No hay respuesta por parte del servidor. Por favor intente de nuevo más tarde.'
};