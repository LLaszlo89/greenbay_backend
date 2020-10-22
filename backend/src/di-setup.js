import awilix from "awilix";

import { db } from "./data/connection.js";

//Import Controllers & Services

import { SessionService } from "./services/SessionService.js";
import { PasswordValidationService } from "./services/PasswordValidationService.js";

import { SessionController } from "./controllers/SessionController.js";
import { ItemsController } from "./controllers/ItemsController.js";

import UserRepository from "./repository/UserRepository.js";
import ItemsRepository from "./repository/ItemsRepository.js";

import { AuthenticateMiddleware } from "./middlewares/authenticate.js";

// Create container
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Register
export const setupDI = () => {
  container.register({
    // db
    db: awilix.asValue(db),
    authenticateMiddleware: awilix.asClass(AuthenticateMiddleware),

    //Controllers
    sessionController: awilix.asClass(SessionController),
    itemsController: awilix.asClass(ItemsController),

    //Services
    sessionService: awilix.asClass(SessionService),
    passwordValidationService: awilix.asClass(PasswordValidationService),

    //Repo
    userRepository: awilix.asClass(UserRepository),
    itemsRepository: awilix.asClass(ItemsRepository),
  });
};
