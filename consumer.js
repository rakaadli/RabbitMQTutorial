// const amqp = require("amqplib");

// connect();

// async function connect() {
//   try {
//     const connection = await amqp.connect("amqp://localhost:5672");
//     const channel = await connection.createChannel();
//     const result = channel.assertQueue("jobs");

//     channel.consume("jobs", (message) => {
//       // console.log(message.content.toString());
//       const input = JSON.parse(message.content.toString());
//       console.log(`Received job with input ${input.number}`);
//       if (input.number == 9) {
//         channel.ack(message);
//       }
//     });

//     console.log("Waiting for messages");
//   } catch (ex) {
//     console.error(ex);
//   }
// }
