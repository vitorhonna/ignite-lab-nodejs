import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'test-producer',
        brokers: ['classic-macaw-11746-us1-kafka.upstash.io:9092'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: 'Y2xhc3NpYy1tYWNhdy0xMTc0NiTNJVPRj6tyv47tV15QhFiZvkYLFVCvyQ7eHCg',
            password: 'WawH4Y5LJVA2btRbZcy8XAoIivc1S1irGBQT0_SUbAl3D8N5ByS8Cn1Smtij--uGWf2THg==',
        },
        ssl: true,
    });

    const producer = kafka.producer();

    await producer.connect();

    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'This is a test notification!',
                    category: 'test',
                    recipientId: randomUUID(),
                }),
            },
        ],
    });

    await producer.disconnect();
}

bootstrap();
