'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1/';
var TOKEN_API = 'BQBVMDlsPPn2VssQWE4pWtBoTlGHGJFT7dpNunTfTEQjfy5qHg9D4FRDSk6cjCmqmvwS9iDzcMydyVFOtwjfxboZgBILxzQ6AIgB-ucT5_Rd1wamyfPeLBLbxGhVJp4-jGc6wQML';
var headers = {
  headers: {
    Authorization: '\'Bearer ' + TOKEN_API + '\''
  }
};
exports.API_URL = API_URL;
exports.headers = headers;