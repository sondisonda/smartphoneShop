import { Roletype } from '../enum/roletype.enum';

export interface Users {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    givenRole: Roletype;
}
