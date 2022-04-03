import axios from 'axios';
import * as CONSTANTS from '../../application/constants'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
};

export const getAllRecomendations = async () => await axios.get(`${CONSTANTS.API_ROOT}/api/v1/recomendations`, { headers });
export const addRecomendation = async (body) => {
  return await axios.post(`${CONSTANTS.API_ROOT}/api/v1/recomendations`, body, { headers });
};