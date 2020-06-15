const amqp = require("amqplib");
// const amqp = require("amqplib/callback_api");

// const msg = { number: 20 };

const msg = { number: process.argv[2] };

connect();
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = channel.assertQueue("jobs");
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job sent successfully ${msg.number}`);
  } catch (ex) {
    console.error(ex);
  }
}

//Technical
// amqp.connect("amqp://localhost", (err, connection) => {
//   if (err) {
//     throw err;
//   }
//   connection.createChannel((err, channel) => {
//     if (err) {
//       throw err;
//     }
//     let queueName = "technical";
//     let message = "This is Sparta!";
//     channel.assertQueue(queueName, {
//       durable: false,
//     });
//     channel.sendToQueue(queueName, Buffer.from(message));
//     console.log(`message: ${message}`);
//     setTimeout(() => {
//       connection.close();
//     }, 1000);
//   });
// });
