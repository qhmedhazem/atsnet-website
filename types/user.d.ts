interface User {
  id: string;
  fullname: string;
  username: string;
  avatarURL: string | null;
  email: string;
  lastPasswordChange: Date | null;
}
