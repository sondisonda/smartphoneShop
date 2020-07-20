import { Roletype } from '../enum/roletype.enum';




export class Users {
    constructor(public id?: number, public userName: string = '', public password: string = '', public firstName: string = '', public lastName: string = '', public givenRole: Roletype = null) {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.givenRole = givenRole;
    }
}
