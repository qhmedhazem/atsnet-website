import React, { FC } from "react";
import Modal from "@/components/Modal/Modal";
import EventCard from "./EventCard";
import EventsList from "./EventsList";

interface Props {
  day: Date;
  events: IEvent[];
  isOpen: boolean;
  onClose: () => any;
}

const EventModal: FC<Props> = ({ day, events, isOpen, onClose }) => {
  const title = `Events of ${day.getFullYear()}/${
    day.getMonth() + 1
  }/${day.getDate()}`;

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <div className="flex gap-2 align-center items-stretch"></div>
      <section className="mt-8">
        <EventsList events={events} />
      </section>
    </Modal>
  );
};

export default EventModal;
