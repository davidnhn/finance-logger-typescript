import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web', 250);
docTwo = new Payment('mario', 'plusmbing work', 200);
let docs = [];
docs.push(docOne);
const me = {
    name: 'david',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        console.log('new invoice');
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        console.log('new payment');
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
// *GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc5 = addUID({ name: 'yoshi', age: 40 });
console.log(doc5);
const doc6 = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun',
};
const doc7 = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaunn' },
};
const doc8 = {
    uid: 1,
    resourceName: 'person',
    data: ['shaunn'],
};
console.log(doc6, doc7, doc8);
