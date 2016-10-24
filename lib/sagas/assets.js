'use strict';

exports.__esModule = true;
exports.fetchAssets = fetchAssets;
exports.fetchAssetsFlow = fetchAssetsFlow;
exports.watchAssetsFlow = watchAssetsFlow;
exports.fetchVirtualAssets = fetchVirtualAssets;
exports.fetchVirtualAssetsFlow = fetchVirtualAssetsFlow;
exports.watchVirtualAssetsFlow = watchVirtualAssetsFlow;
exports.fetchAssetRooms = fetchAssetRooms;
exports.fetchAssetRoomsFlow = fetchAssetRoomsFlow;
exports.watchAssetRoomsFlow = watchAssetRoomsFlow;
exports.fetchCustomActions = fetchCustomActions;
exports.fetchCustomActionsFlow = fetchCustomActionsFlow;
exports.watchCustomActionsFlow = watchCustomActionsFlow;
exports.fetchRoomAreas = fetchRoomAreas;
exports.fetchRoomAreasFlow = fetchRoomAreasFlow;
exports.watchRoomAreasFlow = watchRoomAreasFlow;
exports.fetchInventoryWithdrawals = fetchInventoryWithdrawals;
exports.fetchInventoryWithdrawalsFlow = fetchInventoryWithdrawalsFlow;
exports.watchInventoryWithdrawalsFlow = watchInventoryWithdrawalsFlow;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _assets = require('../constants/assets');

var _assets2 = _interopRequireDefault(_assets);

var _assets3 = require('../actions/assets');

var _assets4 = _interopRequireDefault(_assets3);

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ASSETS_API = _api2['default'] + '/assets';
var VIRTUAL_ASSETS_API = _api2['default'] + '/virtual_assets';
var ASSET_ROOMS_API = _api2['default'] + '/asset_rooms';
var CUSTOM_ACTIONS_API = _api2['default'] + '/custom_actions';
var ROOM_AREAS_API = _api2['default'] + '/room_areas';
var INVENTORY_WITHDRAWALS_API = _api2['default'] + '/hotel_inventory_activity/withdrawal?start_date';

// Hotel Assets
function* fetchAssets() {
  var _ref = yield (0, _effects.select)();

  var _ref$auth = _ref.auth;
  var hotelId = _ref$auth.hotelId;
  var token = _ref$auth.token;


  return yield (0, _effects.call)(_request2['default'], ASSETS_API, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchAssetsFlow() {
  try {
    var data = yield (0, _effects.call)(fetchAssets);
    yield (0, _effects.put)(_assets4['default'].assetsSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchAssetsFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].ASSETS_FETCH, fetchAssetsFlow);
}

// Hotel Virtual Assets
function* fetchVirtualAssets() {
  var _ref2 = yield (0, _effects.select)();

  var _ref2$auth = _ref2.auth;
  var hotelId = _ref2$auth.hotelId;
  var token = _ref2$auth.token;


  return yield (0, _effects.call)(_request2['default'], VIRTUAL_ASSETS_API, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchVirtualAssetsFlow() {
  try {
    var data = yield (0, _effects.call)(fetchVirtualAssets);
    yield (0, _effects.put)(_assets4['default'].virtualAssetsSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchVirtualAssetsFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].VIRTUAL_ASSETS_FETCH, fetchVirtualAssetsFlow);
}

// Hotel Asset Rooms
function* fetchAssetRooms() {
  var _ref3 = yield (0, _effects.select)();

  var _ref3$auth = _ref3.auth;
  var hotelId = _ref3$auth.hotelId;
  var token = _ref3$auth.token;


  return yield (0, _effects.call)(_request2['default'], ASSET_ROOMS_API, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchAssetRoomsFlow() {

  try {
    var data = yield (0, _effects.call)(fetchAssetRooms);
    yield (0, _effects.put)(_assets4['default'].assetRoomsSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchAssetRoomsFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].ASSET_ROOMS_FETCH, fetchAssetRoomsFlow);
}

// Hotel Custom Actions
function* fetchCustomActions() {
  var _ref4 = yield (0, _effects.select)();

  var _ref4$auth = _ref4.auth;
  var hotelId = _ref4$auth.hotelId;
  var token = _ref4$auth.token;


  return yield (0, _effects.call)(_request2['default'], CUSTOM_ACTIONS_API, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchCustomActionsFlow() {

  try {
    var data = yield (0, _effects.call)(fetchCustomActions);
    yield (0, _effects.put)(_assets4['default'].customActionsSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchCustomActionsFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].CUSTOM_ACTIONS_FETCH, fetchCustomActionsFlow);
}

// Hotel Room Areas
function* fetchRoomAreas() {
  var _ref5 = yield (0, _effects.select)();

  var _ref5$auth = _ref5.auth;
  var hotelId = _ref5$auth.hotelId;
  var token = _ref5$auth.token;


  return yield (0, _effects.call)(_request2['default'], ROOM_AREAS_API, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchRoomAreasFlow() {

  try {
    var data = yield (0, _effects.call)(fetchRoomAreas);
    yield (0, _effects.put)(_assets4['default'].roomAreasSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchRoomAreasFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].ROOM_AREAS_FETCH, fetchRoomAreasFlow);
}

// Hotel Inventory Withdrawals
function* fetchInventoryWithdrawals() {
  var _ref6 = yield (0, _effects.select)();

  var _ref6$auth = _ref6.auth;
  var hotelId = _ref6$auth.hotelId;
  var token = _ref6$auth.token;

  var today = (0, _moment2['default'])().format('YYYY-MM-DD');
  var getUrl = INVENTORY_WITHDRAWALS_API + '=' + today;

  return yield (0, _effects.call)(_request2['default'], getUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
}

function* fetchInventoryWithdrawalsFlow() {

  try {
    var data = yield (0, _effects.call)(fetchInventoryWithdrawals);
    yield (0, _effects.put)(_assets4['default'].inventoryWithdrawalSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {}
}

function* watchInventoryWithdrawalsFlow(state) {
  yield* (0, _reduxSaga.takeLatest)(_assets2['default'].INVENTORY_WITHDRAWAL_FETCH, fetchInventoryWithdrawalsFlow);
}