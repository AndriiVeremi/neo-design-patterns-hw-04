import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: 'finance' | 'engineering' | 'marketing',
    public permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {}

  clone(): UserProfile {
    const clonedPermissions = { ...this.permissions };
    return new UserProfile(this.username, this.department, clonedPermissions);
  }
}