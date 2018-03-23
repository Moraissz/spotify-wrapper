import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import 'babel-polyfill';
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method ', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url', () => {
      context('passing one type', () => {
        search('Incubus', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        search('Incubus', 'album');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        search('Incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });

    it('should return the correct JSON Data from the Promise', async () => {
      promise.resolves({ body: 'json' });
      const artists = await search('Incubus', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });
});
