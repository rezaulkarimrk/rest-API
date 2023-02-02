const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        userName: 'Rezaul Karim RK',
        email: 'mrk99rk@gmail.com',
    },
    {
        id: uuidv4(),
        userName: 'Tarikul Islam',
        email: 'tarikul74747474@gmail.com',
    },
    {
        id: uuidv4(),
        userName: 'MD Nadim Hossain',
        email: 'figinglife@gmail.com',
    },
    {
        id: uuidv4(),
        userName: 'Musa Karim Shuvo',
        email: 'musakarimshuvo@gmails.com',
    }
];

module.exports = users;