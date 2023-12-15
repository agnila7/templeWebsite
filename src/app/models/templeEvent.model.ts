export interface TempleEvent{
    Id: number,
    Subject: string,
    StartTime: string,
    EndTime: string,
    IsAllDay: boolean,
    Description?: string,
    RecurrenceRule?: string,
    RecurrenceException?: string,
    StartTimezone?: string,
    EndTimezone?: string,
    FollowingID?: string,
    RecurrenceID?: string,
    Guid?: string,
    Location?: string
}