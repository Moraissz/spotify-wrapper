/* global fetch */
import { API_URL, headers } from './config';

global.fetch = require('node-fetch');

const search = async (query, type) => {
  const response = await fetch(`${API_URL}search?q=${query}&type=${type}`, headers);
  return response.json();
};

const searchAlbums = query =>
  search(query, 'album');

const searchArtists = query =>
  search(query, 'artist');

const searchTracks = query =>
  search(query, 'track');

const searchPlaylists = query =>
  search(query, 'playlist');

export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };

