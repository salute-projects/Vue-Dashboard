const SERVICES = {
    AUTH: Symbol('Auth'),
    HTTP_CLIENT: Symbol('HttpClient'),
    CONTEXT: Symbol('Context'),
    HELPER_SERVICE: Symbol('HelperService'),
    // components services
    ENCOUNTERS_SERVICE: Symbol('EncountersService'),
    // apis
    ENCOUNTERS_API: Symbol('EncountersApi')
};

export default SERVICES;