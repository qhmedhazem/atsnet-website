interface IAnnouncement {
  id: string;
  title: string;
  content: string;
  imageURL?: string;
  date: Date;
}

interface IEvent {
  id: string;
  title: string;
  description: string;
  registerLink?: stirng;
  date: Date;
}

interface IUser {
  id: string;
  fullname: string;
  username: string;
  email: string;
  password: string; // hashed
  lastPasswordChange: Date;
  createdAt: Date;
  updatedAt: Date;
}
