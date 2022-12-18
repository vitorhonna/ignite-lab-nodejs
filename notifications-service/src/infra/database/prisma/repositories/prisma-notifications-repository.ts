import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) { }

  async findById(notificationId: string): Promise<Notification | null> {
    const prismaNotificationData = await this.prisma.notification.findUnique({
      where: {
        id: notificationId
      }
    });

    if (!prismaNotificationData) {
      return null
    }

    return PrismaNotificationMapper.toDomain(prismaNotificationData)
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const prismaNotificationsData = await this.prisma.notification.findMany({
      where: {
        recipientId,
      }
    })

    return prismaNotificationsData.map(PrismaNotificationMapper.toDomain)
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId,
      }
    })

    return count
  }

  async create(notification: Notification): Promise<void> {
    const prismaNotificationData =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: prismaNotificationData,
    });
  }

  async save(notification: Notification): Promise<void> {
    const prismaNotificationData =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: prismaNotificationData.id,
      },
      data: prismaNotificationData
    })

  }
}
