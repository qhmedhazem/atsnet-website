"use client";

import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  members: string[];
}

const ActivityTeam: FC<Props> = ({ name, members, className, ...props }) => {
  return (
    <div className="mt-2">
      <p className="font-semibold">{members.length > 1 ? name : members[0]}</p>
      <ul className="list-disc list-inside ml-4">
        {members.map((member, memberIdx) => (
          <li key={memberIdx}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTeam;
