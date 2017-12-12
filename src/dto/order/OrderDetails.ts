import { FacilityShortDetails } from "../facility/index";
import { LabTestShortDetails } from "../labTests/index";
import { Order } from "./Order";

export class OrderDetails extends Order {
    tests: LabTestShortDetails[];
    facilityInfo: FacilityShortDetails;
    encounterId: number;
}