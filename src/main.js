/* global fetch */

global.fetch = require('node-fetch');

const TOKEN_API = 'BQBVMDlsPPn2VssQWE4pWtBoTlGHGJFT7dpNunTfTEQjfy5qHg9D4FRDSk6cjCmqmvwS9iDzcMydyVFOtwjfxboZgBILxzQ6AIgB-ucT5_Rd1wamyfPeLBLbxGhVJp4-jGc6wQML';

const headers = {
  headers: {
    Authorization: `'Bearer ${TOKEN_API}'`,
  },
};

const search = async (query, type) => {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, headers);
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

search('Incubus', 'artist');
export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };

