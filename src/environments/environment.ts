import { LocalServerUserService } from '@integration/local-server/user/local-server-user.service';

const integration = {
  user: LocalServerUserService,
};

export const environment = {
  production: false,
  integration,
};
