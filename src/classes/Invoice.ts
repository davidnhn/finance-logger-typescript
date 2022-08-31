import { HasFormatteur } from '../interfaces/HasFormatters';
export class Invoice implements HasFormatteur {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    console.log('dans format invoice');
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
