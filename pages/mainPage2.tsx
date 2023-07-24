import useSWR from 'swr';
import Link from "next/link";

const HomePage = () => {
  const { data } = useSWR('/api/tweet');
  if (!data) {
    return <div>Loading...</div>;
  }
  
  // 트윗 리스트를 id 값이 높은 순서로 정렬합니다.
  const sortedTweets = data?.tweets
  ? [...data.tweets].sort((a, b) => b.id - a.id)
  : [];
  return (
    <div className='w-[85%] h-screen mt-9 overflow-auto bg-gray-200 shadow-lg '>
      <div className='flex fixed items-center justify-between h-20 rounded-md shadow-lg bg-gray-50 w-[61%]'>
        <div className='flex ml-5 text-3xl font-bold'>트윗</div>
        <div className=' '>
          <button className='text-xl mt-5 mr-9 font-semibold'>
            <Link href="/tweet/upload" >
            트윗작성
            </Link>
          </button>
        </div>
      </div>

      <div className=' mt-24  overflow-y-scroll'>
        <div className='space-y-8'>
          {sortedTweets.map((tweet) => (
            <Link href={`/tweet/${tweet.id}`}>
              <div key={tweet.id} className='mb-3 p-3  cursor-pointer bg-gray-50  rounded-md shadow-lg flex flex-row'>
                <div className='bg-blue-300 h-5 p-10 rounded-3xl' />
                <div className='mt-2 ml-5 w-full'>
                  <div className='mb-1'>{tweet?.user.name}</div>
                  <div>{tweet?.content}</div>
                  <div className='flex justify-end mr-2'>
                    <div className='h-5 w-5 mr-2'>
                      <svg
                        className="h-6 w-6 "
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
                    {tweet?.likes}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
