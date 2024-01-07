import React, { Children, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import { TextField } from "@mui/material";
import { CONTACTS } from "../components/lib/consts/dummy/dummy";
import { BiDotsVertical } from "react-icons/bi";
import { AiOutlinePushpin, AiOutlineStar } from "react-icons/ai";

export default function Messages() {
  const [activeContact, setActiveContact] = useState(null);

  const handleContactClick = (contact) => {
    setActiveContact(contact);
  };

  return (
    <div className="flex flex-col p-3 gap-5">
      <span className="text-3xl font-black">Messages</span>

      <div className="flex flex-row gap-3 h-screen">
        <div className="flex flex-col overflow-auto w-72 p-3">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="sticky top-0 "
          />
          <div className="py-3">
            {CONTACTS.map((item) => (
              <Contact
                key={item.id}
                contact={item}
                isActive={activeContact === item}
                onClick={() => handleContactClick(item)}
              ></Contact>
            ))}
          </div>
        </div>
        <div className="flex-1 p-3">
          <MessageContent contact={activeContact} />
        </div>
      </div>
    </div>
  );
}

function Contact({ contact, isActive, onClick }) {
  return (
    <div
      className={`flex flex-row justify-start py-3 gap-3 border-b border-gray-50 ${
        isActive ? "bg-light-green" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Avatar src={contact.profile} alt="avatar" />

      <div className="flex flex-wrap justify-between items-center px-1">
        <span className="font-bold">{contact.name}</span>
        <span className="text-xs text-gray-50">{contact.last_sent} mins</span>

        <div className="flex flex-1">
          <span className="text-s overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[11rem] text-gray-50">
            {contact.message_content}
          </span>
        </div>
      </div>
    </div>
  );
}

function MessageContent({ contact }) {
  return (
    <div className="">
      {contact ? (
        <>
          <div className="flex flex-1 justify-between h-24 border-b">
            <div className="flex flex-row gap-2 justify-center items-center">
              <Avatar src={contact.profile} alt="avatar" size="xl" />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-base">{contact.name}</span>
                <span className="text-sm">{contact.position}</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-end items-center">
              <AiOutlinePushpin size="25px" className="text-gray" />
              <AiOutlineStar size="25px" className="text-gray" />
              <BiDotsVertical size="25px" className="text-gray" />
              <span className="font-bold text-green">View Profile</span>
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={contact.profile} />
              </div>
            </div>
            {/* <div className="py-3"> */}
            <div className="chat-header font-bold">{contact.name}</div>
            <div className="chat-bubble chat-bubble-success max-w-[14rem] bg-green">
              {contact.message_content}
            </div>
            <div className={`chat-footer opacity-50`}>
              <time className="text-xs opacity-50">
                {contact.last_sent} mins ago
              </time>
            </div>
            {/* </div> */}
          </div>
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <span className="text-gray-50">
            Select a contact to view messages.
          </span>
        </div>
      )}
    </div>
  );
}
