import { PageRequest } from './PageRequest';

export class SearchRequest extends PageRequest {
    term: string;
    city: string;
    state: string;
}