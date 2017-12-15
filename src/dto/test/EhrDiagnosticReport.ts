import { DataTransferType } from '../Enums';
import { ObservationDto } from './ObservationDto';
import { EhrRequestDetail } from "./EhrRequestDetail";
import { ProviderDto } from "../common/ProviderDto";
import { FollowUpDetails } from './FollowUpDetails';
import { Address } from 'cluster';

export class EhrDiagnosticReport {
    memberId: number;
    encounterId: number | undefined;

    requestDetailObj: EhrRequestDetail;

    dataTransferTypeObj: DataTransferType;
    placerOrderNumber: string;
    fillerOrderNumber: string;
    encodedPdfObservation: string;
    specimenId: string;
    specimenCollectedDateTime: Date | undefined;
    specimenReceivedDateTime: Date | undefined;

    resultDate: Date | undefined;
    dos: Date | undefined;
    dosString: string;

    comments: string;

    orderingProviderDto: ProviderDto 

    observations: Array<ObservationDto>;

    followUpDetailsList: Array<FollowUpDetails>;

    labPerformingSiteAddress: Address;

    labPerformingSiteIdentifier: string;
    labPerformingSiteName: string;

    labDirector: ProviderDto;
}