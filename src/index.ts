import { User } from "./models/User";

const user = new User({ name: 'Shando', age: 30 });

user.on('change', () => {
    console.log('Change #1');
});
user.on('change', () => {
    console.log('Change #2');
});
user.on('save', () => {
    console.log('Data saved')
});

// user.trigger('change');
// user.trigger('save');
// user.trigger('xyz')