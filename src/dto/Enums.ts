export enum EncounterPriority {
    None = 0,
    Urgent = 1,
    Normal = 2
}

export enum EncounterStatus {
    None = 0,
    Created = 1,
    RecordRequested = 2,
    RecordReceived = 3,
    DataEntryRequired = 4,
    PendingInterpretation = 5,
    Interpretated = 6,
    Completed = 7,
    Canceled = 8,
    CompletedAsNegative = 9,
    FollowUp = 10,
    NotResponse = 11
}

export enum EncounterType {
    None = 0,
    IntakeAndOrder = 1,
    SymptomFollowUp = 2,
    Diagnosis = 3,
    TestFollowUp = 4,
    Counseling = 5,
    ImportRequest = 6
}