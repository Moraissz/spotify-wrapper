/* global fetch */
const TOKEN_API = 'BQDzuc3saTFgztXRR1E96lgQLd5ngMtvRHCHqfgX2Kmm0mhokXm0uShMcbmFzphHthNUgI6w63i'
+ 'UmkI8sKmSkDIfwKVpWATMbH76Bh4uCWEoobb2gUKQ3dkcPR0zmYHivBkO-cl2';

const headers = {
  headers: {
    Authorization: `'Bearer ${TOKEN_API}'`,
  },
};

const search = async (query, type) => {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, headers);
  return response.json();
};

const searchAlbums = () => {};
const searchArtists = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };

