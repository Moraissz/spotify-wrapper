import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQC-EQAVikxhZ9dJvnSOZRSR_u0rumR-nMnDLeK6AzARKyfjf8fOxmBgkIKew6IYkqv0GdOI7Cf584oRHxQb6TETHDIwr4CWGDDbWxA7U_9tzBR2mGO_d6cSgHEzp--9NJvWNGlF',
});
const albums = spotify.search.albums('Incubus');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
