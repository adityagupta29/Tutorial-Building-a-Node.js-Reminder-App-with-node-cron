const readline = require('readline');
const cron = require('node-cron');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter reminder time (DD MM YYYY HH mm): ', (answer) => {
    const [day, month, year, hour, minute] = answer.split(' ');
    const cronExpression = `${minute} ${hour} ${day} ${month} *`;

    cron.schedule(cronExpression, () => {
        console.log(`Time to do your task! It's ${hour}:${minute} on ${day}/${month}/${year}`);
        rl.close();
    });

    console.log('Reminder set successfully!');
});
