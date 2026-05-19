import { User } from "better-auth";

class UserMiddleware {
  private _user: User;

  constructor(user: User) {
    this._user = user;
  }

  async permission(resource: string, operation: string): Promise<boolean> {
    // TODO: implement permission check
    return false;
  }
}

export default UserMiddleware;
