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
