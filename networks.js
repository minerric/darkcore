'use strict';

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};
var hexReverse = function(hex) {
  return buffertools.reverse(new Buffer(hex, 'hex'));
};

exports.livenet = {
  name: 'livenet',
  magic: hex('bf0c6bbd'),
  addressVersion: 0x4c,
  privKeyVersion: 204,
  P2SHVersion: 16,
  hkeyPublicVersion: 0x02fe52f8,
  hkeyPrivateVersion: 0x02fe52cc,
  genesisBlock: {
    hash: hexReverse('00000ccaa671bbab8d6f72eb853466d5af0e33491fddd2861d52b394553f96f9'),
    merkle_root: hexReverse('e456c7b894fe91492a94361376809abe1b7894ca75cbe30641b309e6d9d6b0a0'),
    height: 0,
    nonce: 1568802,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1531154631,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    'seed1.block-logic.com',
    'seed2.block-logic.com',
    'seed3.block-logic.com',
    'seed4.block-logic.com'
  ],
  defaultClientPort: 17127
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('cee2caff'),
  addressVersion: 0x8c,
  privKeyVersion: 239,
  P2SHVersion: 19,
  hkeyPublicVersion: 0x3a8061a0,
  hkeyPrivateVersion: 0x3a805837,
  genesisBlock: {
    hash: hexReverse('00000ccaa671bbab8d6f72eb853466d5af0e33491fddd2861d52b394553f96f9'),
    merkle_root: hexReverse('e456c7b894fe91492a94361376809abe1b7894ca75cbe30641b309e6d9d6b0a0'),
    height: 0,
    nonce: 1568802,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1531154631,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    'testnet1.block-logic.com',
    'testnet2.block-logic.com',
    'testnet3.block-logic.com',
    'testnet4.block-logic.com'
  ],
  defaultClientPort: 18127
};
