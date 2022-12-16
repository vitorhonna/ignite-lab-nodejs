import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'test',
    content: new Content('This is a test notification'),
    recipientId: 'recipient-id',
    ...override,
  });
}
