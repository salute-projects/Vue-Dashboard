import { Container } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIERS from "./service-identifiers";
import { AuthService } from "./auth";

let kernel = new Container();

kernel.bind<AuthService>(SERVICE_IDENTIFIERS.AUTH).to(AuthService);

export default kernel;