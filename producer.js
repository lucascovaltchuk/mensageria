const express = require('express');
const amqp = require('amqplib/callback_api');

const app = express();
const PORT = 3000;

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }

    const queue = 'task_queue';
    const msg = 'Hello World!';

    app.post('/send', (req, res) => {
      channel.assertQueue(queue, { durable: true });
      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true,
      });

      res.send('Message sent to queue!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Producer app listening at http://localhost:${PORT}`);
});
