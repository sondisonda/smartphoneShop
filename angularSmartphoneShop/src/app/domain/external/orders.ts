import { Status } from '../enum/status.enum';

export interface Orders {
    id: number;
    date: string;
    value: number,
    status: Status,
}