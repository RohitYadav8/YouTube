import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  var randomSentence = require("random-sentence");
  const dispatch = useDispatch();

  //Subscribe to Store
  const chatMsg = useSelector((store) => store.chat.messages);

  //Every 2 seconds giving data
  useEffect(() => {
    const api = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomSentence({ words: 5 }),
        })
      );
    }, 2000);

    return () => clearInterval(api);
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col-reverse w-full border border-black p-1 mr-2 h-[600px] bg-slate-100 overflow-auto">
          {chatMsg.map((c, index) => (
            <ChatMessage name={c.name} key={index} message={c.message + " "} />
          ))}
        </div>

        {/* Input Box Message */}
        <form
          className="w-full p-2 border border-black"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              addMessage({ name: "Danish Agarwal", message: liveMessage })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="px-2 w-72"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 bg-green-100 ">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
