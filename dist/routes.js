"use strict";
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _SendApproachTTSController = require('./app/controllers/Send/SendApproachTTSController'); var _SendApproachTTSController2 = _interopRequireDefault(_SendApproachTTSController);
var _SendApproachSMSController = require('./app/controllers/Send/SendApproachSMSController'); var _SendApproachSMSController2 = _interopRequireDefault(_SendApproachSMSController);
var _SendConfirmationSMSController = require('./app/controllers/Send/SendConfirmationSMSController'); var _SendConfirmationSMSController2 = _interopRequireDefault(_SendConfirmationSMSController);
var _SendConfirmationURAController = require('./app/controllers/Send/SendConfirmationURAController'); var _SendConfirmationURAController2 = _interopRequireDefault(_SendConfirmationURAController);

var _CreateCompanyController = require('./app/controllers/Create/CreateCompanyController'); var _CreateCompanyController2 = _interopRequireDefault(_CreateCompanyController);
var _CreateAdminController = require('./app/controllers/Create/CreateAdminController'); var _CreateAdminController2 = _interopRequireDefault(_CreateAdminController);
var _CreateClientController = require('./app/controllers/Create/CreateClientController'); var _CreateClientController2 = _interopRequireDefault(_CreateClientController);

var _ListAdminsController = require('./app/controllers/List/ListAdminsController'); var _ListAdminsController2 = _interopRequireDefault(_ListAdminsController);
var _ListCompaniesController = require('./app/controllers/List/ListCompaniesController'); var _ListCompaniesController2 = _interopRequireDefault(_ListCompaniesController);
var _ListClientsController = require('./app/controllers/List/ListClientsController'); var _ListClientsController2 = _interopRequireDefault(_ListClientsController);

var _AdminSessionController = require('./app/controllers/Session/AdminSessionController'); var _AdminSessionController2 = _interopRequireDefault(_AdminSessionController);

var _RandomArrayLocations = require('./app/controllers/Generate/RandomArrayLocations'); var _RandomArrayLocations2 = _interopRequireDefault(_RandomArrayLocations);

const routes = new (0, _express.Router)();

// SMS/CALL
routes.post('/approach/tts', _SendApproachTTSController2.default.create);
routes.post('/approach/sms', _SendApproachSMSController2.default.create);
routes.post('/confirmation/ura', _SendConfirmationURAController2.default.create);
routes.post('/confirmation/sms', _SendConfirmationSMSController2.default.create);

// CREATE
routes.post('/create/company', _CreateCompanyController2.default.store);
routes.post('/create/admin', _CreateAdminController2.default.store);
routes.post('/create/client', _CreateClientController2.default.store);

// LIST
routes.get('/list/admins', _ListAdminsController2.default.show);
routes.get('/list/companies', _ListCompaniesController2.default.show);
routes.get('/list/clients', _ListClientsController2.default.show);

// SESSION
routes.post('/session/admin', _AdminSessionController2.default.index);

// GENERATE RANDOM
routes.post('/generate/locations', _RandomArrayLocations2.default.index);

exports default routes;
