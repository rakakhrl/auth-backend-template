import { User } from "better-auth";
import { Member, Organization } from "better-auth/plugins";

class TenantMiddleware {
  private _organization: Organization;
  private _user?: User;
  private _member?: Member;

  constructor(organization: Organization, user?: User, member?: Member) {
    this._organization = organization;
    this._user = user;
    this._member = member;
  }

  async setup(): Promise<void> {
    // TODO: Implement setup default resource
  }
}

export default TenantMiddleware;
