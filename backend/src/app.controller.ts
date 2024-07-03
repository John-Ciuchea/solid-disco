import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { getUser } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/comms/your-next-delivery/:id')
  getNextDelivery(@Param('id') id: string) {
    const user = getUser(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.userService.getUserMessage(user);
  }
}
