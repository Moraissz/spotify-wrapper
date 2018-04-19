import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import 'babel-polyfill';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the spotify.search.albums method ', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });
  describe('spotify.search.albums', () => {
    it('should call a fetch function', () => {
      spotify.search.albums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      spotify.search.albums('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      spotify.search.albums('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });
  describe('spotify.search.artists', () => {
    it('should call a fetch function', () => {
      spotify.search.artists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      spotify.search.artists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      spotify.search.artists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });
  describe('spotify.search.tracks', () => {
    it('should call a fetch function', () => {
      spotify.search.tracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      spotify.search.tracks('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      spotify.search.tracks('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });
  describe('spotify.search.playlists', () => {
    it('should call a fetch function', () => {
      spotify.search.playlists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call with the correct url', () => {
      spotify.search.playlists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      spotify.search.playlists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
