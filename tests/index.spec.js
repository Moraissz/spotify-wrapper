import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import 'babel-polyfill';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Spotify-Wrapper library', () => {
  it('should create an instance of Spotify-Wrapper', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive  apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'xdxd',
    });

    expect(spotify.apiURL).to.be.equal('xdxd');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1/');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'blabla',
    });

    expect(spotify.token).to.be.equal('blabla');
  });
});

describe('request method', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });
  it('should have the request method', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify.request).to.exist;
  });

  it('should call fetch when request', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    spotify.request();

    expect(fetchedStub).to.have.been.calledOnce;
  });

  it('should called fetch with a correct url', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    spotify.request('url');

    expect(fetchedStub).to.have.been.calledWith('url');
  });

  it('should called fetch with the correct headers', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });
    const token = 'foo';

    const headers = {
      headers: {
        Authorization: `'Bearer ${token}'`,
      },
    };
    spotify.request('url');

    expect(fetchedStub).to.have.been.calledWith('url', headers);
  });
});
