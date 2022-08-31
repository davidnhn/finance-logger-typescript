import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatteur } from './interfaces/HasFormatters.js';

let docOne: HasFormatteur;
let docTwo: HasFormatteur;

docOne = new Invoice('yoshi', 'web', 250);
docTwo = new Payment('mario', 'plusmbing work', 200);
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

let docs: HasFormatteur[] = [];
docs.push(docOne);

const me: isPerson = {
  name: 'david',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

const greetPerson = (person: isPerson) => {
  console.log('hello', person.name);
};
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatteur;
  if (type.value === 'invoice') {
    console.log('new invoice');
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    console.log('new payment');

    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);

  list.render(doc, type.value, 'end');
});

// *GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc5 = addUID({ name: 'yoshi', age: 40 });
console.log(doc5);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc6: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'shaun',
};
const doc7: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaunn' },
};
const doc8: Resource<string[]> = {
  uid: 1,
  resourceName: 'person',
  data: ['shaunn'],
};

console.log(doc6, doc7, doc8);
