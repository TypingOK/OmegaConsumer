import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
const queryClient = new QueryClient();

const HomePagePostProvider = ({ mainPageContentTitle }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostList mainPageContentTitle={mainPageContentTitle} />
    </QueryClientProvider>
  );
};
const PostList = ({ mainPageContentTitle }) => {
  console.log("PostList", mainPageContentTitle);
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get(
        `http://localhost:5000/api/post/getCategoryPosts?category=${mainPageContentTitle}&limit=10`
      )
      .then((res) => {
        return res.data;
      })
  );
  console.log(data);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      {data.posts.map((post) => (
        <div key={post.post_uuid}>{post.post_title}</div>
      ))}
    </>
  );
};
const HomepagePost = ({ mainPageContentTitle }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 pl-4 pr-4">
      <div className="flex flex-col border-4">
        <HomePagePostProvider mainPageContentTitle={mainPageContentTitle} />
      </div>
    </div>
  );
};

export default HomepagePost;
