export class User {
  id: string; // Using string for UUID
  username: string;
  user: string;
  password: string;
  address: string;
  city: string;

  constructor() {
    this.id = ''; // Generate a UUID if needed
    this.username = '';
    this.user = '';
    this.password = '';
    this.address = '';
    this.city = '';
  }
}
