import { Roletype } from '../enum/roletype.enum';




export class Users {
    constructor(public id?: number, public userName: string = '', public password: string = '', public firstName: string = '', public lastName: string = '', public roleType: Roletype = null) {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.roleType = roleType;
    }
}
