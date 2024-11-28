export class Restaurant {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string;

  constructor(
    id: string,
    name: string,
    address: string,
    city: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.description = description;
  }
}
