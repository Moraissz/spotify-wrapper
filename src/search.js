/* global fetch */
import { API_URL, headers } from './config';

global.fetch = require('node-fetch');

export const search = async (query, type) => {
  const response = await fetch(`${API_URL}search?q=${query}&type=${type}`, headers);
  return response.json();
};

export const searchAlbums = query =>
  search(query, 'album');

export const searchArtists = query =>
  search(query, 'artist');

export const searchTracks = query =>
  search(query, 'track');

export const searchPlaylists = query =>
  search(query, 'playlist');

