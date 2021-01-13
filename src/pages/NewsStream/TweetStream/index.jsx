import React from "react";
import moment from "moment";

const TweetStream = ({ tweet }) => {
  return (
    <div className="">
      <div className="mb-4 border-t-8 border-blue-900 justify-center bg-gray-200 p-4 rounded-lg border-blue-900 flex flex-col">
        <p className="pb-4 h-full font-bold text-sm text-blue-900">
          {tweet.text}
        </p>
        {tweet.media && (
          <div className="">
            {tweet.media.type === "photo" ? (
              <img src={tweet.media.url} />
            ) : (
              <img src={tweet.media.preview_image_url} />
            )}
          </div>
        )}

        <div className="my-4 justify-between flex text-xs font-bold text-blue-900">
          <div>
            <span className="bg-white py-1 px-2">{tweet.user.username}</span>
            {tweet.user.location && (
              <span className="bg-white mx-1 py-1 px-2">
                {tweet.user.location}
              </span>
            )}
          </div>
          <div>
            <span className="bg-white mx-1 py-1 px-2">
              {moment(tweet.created_at).fromNow(true)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetStream;
