import { User } from "./models/User";

const user = new User({ name: 'Shando', age: 30 });

user.set({ name: 'newname', age: 9999 });

console.log(user.get('name'));
console.log(user.get('age'));