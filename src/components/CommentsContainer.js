import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

export const commentsData = [
  {
    name: "Arshdeep",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arshdeep",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Arshdeep",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Arshdeep",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Arshdeep",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Arshdeep",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Arshdeep",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Arshdeep",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                      {
                        name: "Arshdeep",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Arshdeep",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Arshdeep",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Arshdeep",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arshdeep",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arshdeep",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className=" font-2xl font-bold">Comments: </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
