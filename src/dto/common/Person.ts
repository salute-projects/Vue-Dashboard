import { Address } from "./Address";
import { Gender } from "../Enums";

export class Person {
    firstName: string;
    lastName: string;
    middleName: string;
    address: Address;
    gender: Gender;
    birthDate: string;
    homePhoneNoDelimiters: string;
}