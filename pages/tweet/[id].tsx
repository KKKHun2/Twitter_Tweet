import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data, error,mutate } = useSWR(
    router.query.id ? `/api/tweet/${router.query.id}` : null
  );
  const [likes, setLikes] = useState(false);
  const [count, setCount] = useState(data?.tweet?.likes || 0);
  const handleLikeClick = () => {
    setLikes(!likes)
    console.log(likes)
    setCount((prevLikes) => ((likes === false) ? prevLikes + 1 : prevLikes - 1));
  }
  useEffect(() => {
    mutate();
  }, [count, mutate,likes]);


  return (
    <div>
      <div className="px-4 bg-blue-400 p-6 py-4">
        <div className="mb-8">
          <div className="h-20 bg-slate-300 flex flex-row rounded-lg">
            <Link href="/">
              <div className="flex cursor-pointer items-center justify-start text-6xl">
                &larr;
              </div>
            </Link>
            <div className="flex items-center justify-center flex-1 font-bold text-3xl">
              Tweet
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <div className="flex cursor-pointer py-3 border rounded-xl w-[200px] bg-slate-100 items-center space-x-3">
              <div className="w-12 ml-3 h-12 rounded-full bg-blue-300" />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {data?.tweet?.user?.name}
                </p>
                <a className="text-xs font-medium cursor-pointer text-gray-500">
                  View profile &rarr;
                </a>
              </div>
            </div>

            <div className="mt-5 flex">
              <h1 className="text-3xl font-bold text-gray-900">
                {data?.tweet?.name}
              </h1>
              <div className="w-full h-screen">
                <div className="h-[30%] bg-gray-50 rounded-t-md  ">
                  <div className=" mb-6 mt-2 ml-2">작성글</div>
                  <div className="text-gray-700 ml-3 ">
                    {data?.tweet?.content}
                  </div>
                </div>

                <div className="flex  justify-end  items-center bg-gray-50  rounded-b-md space-x-2 ">
                 {(likes===true)?
                  <button
                  onClick={handleLikeClick} // Call the handleLikeClick function on button click
                  className="mr-3 p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <div className="mr-1">
                    <svg
                      className="h-6 w-6 text-red-500" 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  {count} 
                </button>
                : <button
                onClick={handleLikeClick} // Call the handleLikeClick function on button click
                className="mr-3 p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <div className="mr-1">
                <svg
                      className="h-6 w-6 text-gray-500" 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                {count} 
              </button>
              }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
