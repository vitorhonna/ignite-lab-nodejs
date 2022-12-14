import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You have a new friend request');

    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with LESS than 5 characters', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('should NOT be able to create a notification content with MORE than 240 characters', () => {
    expect(() => new Content('abc'.repeat(241))).toThrow();
  });
});
