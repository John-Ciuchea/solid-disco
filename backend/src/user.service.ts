import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { calculatePrice, formatCatNames } from './cat.model';

@Injectable()
export class UserService {
  getUserMessage(user: User) {
    const cats = user.cats.filter((cat) => cat.subscriptionActive);
    const price = calculatePrice(cats);

    return {
      title: `Your next delivery for ${formatCatNames(cats)}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formatCatNames(cats, true)} fresh food.`,
      totalPrice: price,
      freeGift: price > 120,
    };
  }
}
