export interface User{
    name: string;
    email: string;
    password: string;
    role: UserRole;
  }
  export enum UserRole {
    ADMIN = 'Admin',
    SUPER_ADMIN = 'Super Admin',
    GENERAL_USER = 'General User'
  }
  
  export type UserLoginInfo = Pick<User, 'email' | 'password'>;
  
  export type LoggedInUser = Omit<User, 'password'>;