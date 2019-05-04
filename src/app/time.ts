export class Time{
    hour: number;
    minute: number;
    friendly: string;

    constructor(hour, minute){
        this.hour = hour;
        this.minute = minute;
        let friendly =  `${("0" + this.hour).slice(-2)}:${("0" + this.minute).slice(-2)}`;
        this.friendly = friendly === "00:00" ? "" : friendly;
    }
}