import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  companyName!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  adress!: string;
  zipCode!: number;
  city!: string;
  country!: string;
  state = StateClient.ACTIVE;
  id!: number;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
