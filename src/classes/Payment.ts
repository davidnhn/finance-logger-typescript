import { HasFormatteur } from '../interfaces/HasFormatters';
export class Payment implements HasFormatteur {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} is owed ${this.amount}€ for ${this.details}`;
  }
}
