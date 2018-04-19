import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQDbEHUWq3vdQJtZ9xxVpkQeRsvNFaZnIlljJ_VsePq0apviTM3pzRFWauC6uz10xaWxkjasjrFQOGp5tOAJhpLkwab4X4xL-cq9e4KKUTOgSoZG1bmjz3bOLc0UAyw8ZcYWmwuH',
});
const albums = spotify.search.albums('Incubus');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
