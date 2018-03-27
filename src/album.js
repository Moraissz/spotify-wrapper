/* global fetch */
import { API_URL, headers } from './config';

global.fetch = require('node-fetch');

const getAlbum = async (id) => {
  const response = await fetch(`${API_URL}albums/${id}`, headers);
  return response.json();
};
const getAlbums = async (id) => {
  const response = await fetch(`${API_URL}albums/?ids=${id}`, headers);
  return response.json();
};
const getAlbumTrack = async (id) => {
  const response = await fetch(`${API_URL}albums/${id}/tracks`, headers);
  return response.json();
};

export { getAlbum, getAlbums, getAlbumTrack };
