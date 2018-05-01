var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('unable to save todo')
// });

// var otherTodo = new Todo({
//     text: 'Something to do'
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

// User 
// email - require it - trim it - set type - set min length of 1

var User = mongoose.model('User', {
    email: {
        type: String, 
        required: true,
        minLength: 1,
        trim: true
    }
});

var user = new User({
    email: 'andrew@example'
});

user.save().then((doc) => {
    console.log('User saved', doc);
}, (e) => {
    console.log('Unable to save', e);
});