
export class Smartphones {
  // yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  constructor(public id?: number, public brand: string = '', public model: string = '',
    public prize: number = 0, public stock: number = 0) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.prize = prize;
    this.stock = stock;

  }
}
