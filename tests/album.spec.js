import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import 'babel-polyfill';
import { getAlbum, getAlbums, getAlbumTrack } from '../src/album';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Albums Tests', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the method getAlbum', () => {
      expect(getAlbum).to.exist;
    });

    it('should exist the method getAlbums', () => {
      expect(getAlbums).to.exist;
    });

    it('should exist the method getAlbumsTrack', () => {
      expect(getAlbumTrack).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call the fetch method', () => {
      getAlbum();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      getAlbum('4aawyAB9vmqN3uQ7FjRGTk');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', async () => {
      promise.resolves({
        json: async () => ({ album: 'name' }),
      });

      const album = await getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      getAlbums();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should receive the correct JSON from promise', async () => {
      promise.resolves({
        json: async () => ({ album: 'name' }),
      });

      const album = await getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

      expect(album).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbumsTrack', () => {
    it('should call the fetch method', () => {
      getAlbumTrack();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      getAlbumTrack('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the correct data from Promise', async () => {
      promise.resolves({
        json: async () => ({ album: 'name' }),
      });

      const album = await getAlbumTrack('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album).to.be.eql({ album: 'name' });
    });
  });
});
