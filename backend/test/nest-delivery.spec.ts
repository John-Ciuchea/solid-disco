import { useApp } from './helper';
import { HttpStatus } from '@nestjs/common';

describe('Next delivery test', () => {
  const request = useApp();

  it('should throw a not found exception if the use is not found', async () => {
    const res = await request().get('/comms/your-next-delivery/invalid-uuid');
    expect(res.status).toBe(HttpStatus.NOT_FOUND);
  });

  it.each([
    {
      description: '1 cat, active subscription',
      userId: '618f4ed6-1c5b-4993-a149-f64700bf31dd',
      expected: {
        title: 'Your next delivery for Betsy',
        message:
          "Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.",
        totalPrice: 69,
        freeGift: false,
      },
    },
    {
      description: '3 cats, 2 active and 1 inactive subscription',
      userId: '76d6eb8d-5c2e-49f7-b798-d69700dda4c3',
      expected: {
        title: 'Your next delivery for Destiny and Alexandre',
        message:
          "Hey Dolores! In two days' time, we'll be charging you for your next order for Destiny's and Alexandre's fresh food.",
        totalPrice: 126.75,
        freeGift: true,
      },
    },
    {
      description: '3 cats, all active subscription',
      userId: 'ea17433d-7527-45a5-acbc-2e2f78f95c6e',
      expected: {
        title: 'Your next delivery for Cristina, Mariah and Rebekah',
        message:
          "Hey Santiago! In two days' time, we'll be charging you for your next order for Cristina's, Mariah's and Rebekah's fresh food.",
        totalPrice: 197.5,
        freeGift: true,
      },
    },
  ])('should $description', async ({ userId, expected }) => {
    const res = await request().get(`/comms/your-next-delivery/${userId}`);

    expect(res.body).toMatchObject(expected);
  });
});
