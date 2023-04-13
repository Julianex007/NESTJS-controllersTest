import { Controller , Get} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // users/
  getUsers(): string {
    return "users";
  }
  @Get("set-password") // users/set-password
  setPassword(): string {
    return "users";
  }
  @Get("new-page") // users/new-page
  setNewPage(): string {
    return "setting New Page";
  }
}
