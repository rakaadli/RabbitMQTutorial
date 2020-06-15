const amqp = require("amqplib/callback_api");

// const msg = { number: 20 };

// async function connect() {
//   try {
//     const connection = await amqp.connect("amqp://localhost");
//     const channel = await connection.createChannel();
//     const result = channel.assertQueue("jobs");
//     channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
//     console.log(`Job sent successfully ${msg.number}`);
//   } catch (ex) {
//     console.error(ex);
//   }
// }

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queueName = "technical";
    channel.assertQueue(queueName, {
      durable: false,
    });
    channel.consume(
      queueName,
      (msg) => {
        console.log(`Received:${msg.content.toString()}`);
        channel.ack(msg);
      }
      //   {
      //     noAck: true,
      //   }
    );
  });
});
