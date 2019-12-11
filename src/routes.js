import { Router } from 'express';
import SendTTSController from './app/controllers/Send/SendTTSController';
import CreateCompanyController from './app/controllers/Create/CreateCompanyController';
import CreateAdminController from './app/controllers/Create/CreateAdminController';

const routes = new Router();

routes.post('/messages', SendTTSController.create);
routes.post('/create/company', CreateCompanyController.store);
routes.post('/create/admin', CreateAdminController.store);

export default routes;
