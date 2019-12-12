import { Router } from 'express';
import SendApproachTTSController from './app/controllers/Send/SendApproachTTSController';
import SendApproachSMSController from './app/controllers/Send/SendApproachSMSController';
import SendConfirmationSMSController from './app/controllers/Send/SendConfirmationSMSController';
import SendConfirmationURAController from './app/controllers/Send/SendConfirmationURAController';

import CreateCompanyController from './app/controllers/Create/CreateCompanyController';
import CreateAdminController from './app/controllers/Create/CreateAdminController';
import CreateClientController from './app/controllers/Create/CreateClientController';

import ListAdminsController from './app/controllers/List/ListAdminsController';
import ListCompaniesController from './app/controllers/List/ListCompaniesController';
import ListClientsController from './app/controllers/List/ListClientsController';

import AdminSessionController from './app/controllers/Session/AdminSessionController';

import RandomArrayLocations from './app/controllers/Generate/RandomArrayLocations';

const routes = new Router();

// SMS/CALL
routes.post('/approach/tts', SendApproachTTSController.create);
routes.post('/approach/sms', SendApproachSMSController.create);
routes.post('/confirmation/ura', SendConfirmationURAController.create);
routes.post('/confirmation/sms', SendConfirmationSMSController.create);

// CREATE
routes.post('/create/company', CreateCompanyController.store);
routes.post('/create/admin', CreateAdminController.store);
routes.post('/create/client', CreateClientController.store);

// LIST
routes.get('/list/admins', ListAdminsController.show);
routes.get('/list/companies', ListCompaniesController.show);
routes.get('/list/clients', ListClientsController.show);

// SESSION
routes.post('/session/admin', AdminSessionController.index);

// GENERATE RANDOM
routes.post('/generate/locations', RandomArrayLocations.index);

export default routes;
