import { Gender } from "../Enums";
import { Address } from "./Address";

export class Person {
    firstName: string;
    lastName: string;
    middleName: string;
    address: Address;
    gender: Gender;
    birthDate: string;
    homePhoneNoDelimiters: string;
}