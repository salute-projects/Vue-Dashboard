import { Container } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIERS from "./service-identifiers";
import { AuthService } from "./auth";
import { HttpClient } from "./httpClient";

let kernel = new Container();

kernel.bind<AuthService>(SERVICE_IDENTIFIERS.AUTH).to(AuthService);
kernel.bind<HttpClient>(SERVICE_IDENTIFIERS.HTTP_CLIENT).to(HttpClient);

export default kernel;