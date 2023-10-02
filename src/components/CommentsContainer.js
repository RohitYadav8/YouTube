import React from "react";
import { AvatarGenerator } from "random-avatar-generator";
// Dummy comments Data
const commentsData = [
  {
    name: "Dan",
    text: "lorem Ipsum Comment 1",
    replies: [],
  },
  {
    name: "Dan",
    text: "lorem Ipsum Comment 2",
    replies: [
      {
        name: "Dan",
        text: "lorem Ipsum Reply Nest 1",
        replies: [
          {
            name: "Dan",
            text: "lorem Ipsum Reply Nest 2",
            replies: [
              {
                name: "Dan",
                text: "lorem Ipsum Reply Nest 3",
                replies: [],
              },
            ],
          },
          {
            name: "Dan",
            text: "lorem Ipsum Reply Nest 2",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Dan",
    text: "lorem Ipsum Comment 3",
    replies: [
      {
        name: "Dan",
        text: "lorem Ipsum Reply Nest 1",
        replies: [],
      },
    ],
  },
];

// Single Comment
const Comment = ({ data }) => {
  const generator = new AvatarGenerator();
  //Extracting data
  const { name, text } = data;
  return (
    <>
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-2">
        <img
          className="w-10 h-10 "
          alt="user"
          src={generator.generateRandomAvatar()}
        ></img>

        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

//Comments List
const CommentList = ({ commentsDummyData }) => {
  return (
    <>
      <div>
        {commentsDummyData.map((comment) => {
          return (
            <div>
              <Comment data={comment} />

              {/* Replies Section Calling recursively */}
              <div className="border border-l-black ml-5 pl-5">
                <CommentList commentsDummyData={comment.replies} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>

      <CommentList commentsDummyData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
