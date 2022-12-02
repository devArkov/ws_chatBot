const date = new Date();

const responseObj = {
    hi: 'Hello! How are you doing?',
    hey: "Hey! What's up?",
    // today: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(),
    today: new Date().toDateString(),
    time: date.getHours() + ':' + date.getMinutes(),
    // time: new Date().toLocaleTimeString(),
}