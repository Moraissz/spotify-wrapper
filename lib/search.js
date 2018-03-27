'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* global fetch */


global.fetch = require('node-fetch');

var search = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, type) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_config.API_URL + 'search?q=' + query + '&type=' + type, _config.headers);

          case 2:
            response = _context.sent;
            return _context.abrupt('return', response.json());

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function search(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

search('Incubus', 'artist');
exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;