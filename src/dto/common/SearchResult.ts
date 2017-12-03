export class SearchResult<T> {
    allItemsCount: number;
    foundItemsCount: number;
    pageNumber: number;
    pageSize: number;
    result: Array<T>;
}