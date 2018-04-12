import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import 'babel-polyfill';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Albums Tests', () => {
  let stubedFetch;
  let promise;
  let spotify;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the method getAlbum', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should exist the method getAlbums', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should exist the method getAlbumsTrack', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call the fetch method', () => {
      spotify.album.getAlbum();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', async () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbums();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should receive the correct JSON from promise', async () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbumsTrack', () => {
    it('should call the fetch method', () => {
      spotify.album.getTracks();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the correct data from Promise', async () => {
      promise.resolves({ album: 'name' });

      const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
