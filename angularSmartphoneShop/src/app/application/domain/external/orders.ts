import { Status } from '../enum/status.enum';


export class Orders {
  // yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  constructor(public id?: number, public userId: number = 0, public date: string = '', public value: number = 0, public status: Status = 0) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.value = value;
    this.status = status;

  }
}

