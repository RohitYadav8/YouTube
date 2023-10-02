import { AvatarGenerator } from "random-avatar-generator";
import React from "react";

const ChatMessage = ({ name, message }) => {
  const generator = new AvatarGenerator();
  return (
    <div className="p-1 flex items-center">
      <img
        className="w-7 h-7 "
        alt="user"
        src={generator.generateRandomAvatar("")}
      ></img>
      <span className="text-sm font-bold p-1">{name}</span>
      <span className="p-1 text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
