'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTrack = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* global fetch */


global.fetch = require('node-fetch');

var getAlbum = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_config.API_URL + 'albums/' + id, _config.headers);

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

  return function getAlbum(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAlbums = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(_config.API_URL + 'albums/?ids=' + id, _config.headers);

          case 2:
            response = _context2.sent;
            return _context2.abrupt('return', response.json());

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getAlbums(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAlbumTrack = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(_config.API_URL + 'albums/' + id + '/tracks', _config.headers);

          case 2:
            response = _context3.sent;
            return _context3.abrupt('return', response.json());

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getAlbumTrack(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAlbum = getAlbum;
exports.getAlbums = getAlbums;
exports.getAlbumTrack = getAlbumTrack;