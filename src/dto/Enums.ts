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

export enum ChargeStatus {
    Unknown = 0,
    Paid = 1,
    Pending = 2,
    Refunded = 3,
    Failed = 4
}

export enum OrderPaymentType {
    Unknown = 0,
    CreditCard = 1,
    Free = 2,
    Insurance = 3
}

export enum OrderStatus {
    None = 0,
    Active = 1,
    Pending = 2,
    Complete = 3,
    Cancelled = 4,
    Failed = 5,
    CancelledButNotRefunded = 6
}

export enum AppointmentStatus {
    Unknown = 0,
    Succeded = 1,
    Pending = 2,
    Failed = 3
}

export enum ImportRequestType {
    None = 0,
    Clinic = 1,
    Physician = 2,
    Lab = 3
}

export enum ImportRequestStatus {
    None = 0,
    New = 1,
    FollowUp = 2,
    Unsuccessful = 3,
    Completed = 4,
    Canceled = 5,
    InProgress = 6,
    InPending = 7,
    PendingVerification = 8,
    Unverified = 9
}

export enum ImportRequestPriority {
    None = 0,
    Urgent = 1,
    Normal = 2
}

export enum MessageMediaType {
    None = -1,
    DirectMessage = 0,
    Email = 1,
    Sms = 2,
    Fax = 3,
    Safe = 4
}

export enum TestValue {
    Untested = 2,
    PendindReview = -1,
    Negative = 0,
    Positive = 1,
    Equivocal = 3
}

export enum ResultStatus {
    Partial = 0,
    Final = 1,
    Corrected = 2,
    Cancelled = 3
}

export enum Role {
    Unknown = 0,
    User = 1,
    Physician = 2,
    PracticeAdmin = 3,
    SuperAdmin = 4
}

export enum DataTransferType {      
    Interface = 0,
    ManualEntry = 1
}

export enum RequestType {
    ImportRequest = 0,
    LabOrder = 1
}

export enum Gender {
    Female = 'F',
    Male = 'M',
    Other = 'O',
    Unknown = 'U'
}

export enum FollowUpState { 
    FirstPhoneCall = 1,
    SecondPhoneCall = 2,
    FinalPhoneCall = 3,
    FollowUpPreviouslyDone = 4,
    NoResponse = 5
}

export enum TimelineItemType {
    None = 0,
    Information = 1,
    ChangeLog = 2,
    Note = 3,
    Message = 4,
    Action = 5
}

export enum TimelineContentType {
    None = 0,
    PlainText = 1,
    Html = 2,
    Markdown = 3
}