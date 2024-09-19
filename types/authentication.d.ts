interface IUser {
  id: string;
  fullname: string;
  avatarURL?: string;
  username: string;
  email: string;
  password: string; // hashed
  lastPasswordChange: Date;
  createdAt: Date;
  updatedAt: Date;
}
