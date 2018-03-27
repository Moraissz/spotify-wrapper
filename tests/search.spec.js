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
} from '../src/search';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

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
      promise.resolves({
        json: async () => ({ body: 'json' }),
      });
      const artists = await search('Incubus', 'artist');
      expect(artists).to.be.eql({ body: 'json' });
    });
  });
  describe('SearchAlbums', () => {
    it('should call a fetch function', () => {
      searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      searchAlbums('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      searchAlbums('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });
  describe('SearchArtists', () => {
    it('should call a fetch function', () => {
      searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      searchArtists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      searchArtists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });
  describe('SearchTracks', () => {
    it('should call a fetch function', () => {
      searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      searchTracks('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      searchTracks('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });
  describe('SearchPlaylist', () => {
    it('should call a fetch function', () => {
      searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      searchPlaylists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
