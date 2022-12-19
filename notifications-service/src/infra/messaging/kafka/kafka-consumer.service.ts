import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['classic-macaw-11746-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'Y2xhc3NpYy1tYWNhdy0xMTc0NiTNJVPRj6tyv47tV15QhFiZvkYLFVCvyQ7eHCg',
                    password: 'WawH4Y5LJVA2btRbZcy8XAoIivc1S1irGBQT0_SUbAl3D8N5ByS8Cn1Smtij--uGWf2THg==',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}