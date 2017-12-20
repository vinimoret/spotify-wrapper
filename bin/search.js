'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylist = exports.searchTrack = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(function (data) {
    return data.json();
  });
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  search(query, 'artist');
};

var searchTrack = exports.searchTrack = function searchTrack(query) {
  search(query, 'track');
};

var searchPlaylist = exports.searchPlaylist = function searchPlaylist(query) {
  search(query, 'playlist');
};