import useSWR from 'swr';

const HomePage = () => {
  // useSWR 훅을 사용하여 서버로부터 트윗 데이터를 비동기적으로 가져옵니다.
  // const { data: tweets, mutate: mutateTweets } = useSWR('/api/tweets');

  const sampleTweets = [
    {
      id: 1,
      content: "트윗 내용 1",
      author: "작성자1",
    },
    {
      id: 2,
      content: "트윗 내용 2",
      author: "작성자2",
    },
    {
      id: 3,
      content: "트윗 내용 2",
      author: "작성자2",
    },
    {
      id: 4,
      content: "트윗 내용 2",
      author: "작성자2",
    },
    {
      id: 5,
      content: "트윗 내용 2",
      author: "작성자2",
    },
    // 더 많은 트윗 데이터...
  ];
  const tweets = sampleTweets;
  
  const handleCreateTweet = async () => {
    const content = prompt('Enter your tweet:');
    if (content) {
      const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        // mutateTweets();
      }
    }
  };

  // 트윗 데이터가 없을 경우 로딩 상태 표시
  if (!tweets) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-screen mt-9 overflow-auto bg-slate-500'>
      <div className='flex fixed items-center h-20 rounded-md shadow-lg bg-gray-50 w-[715px]'>
        <div className='flex ml-5 text-3xl font-bold'>트윗</div>
        <div className=' ml-[540px]'>
          <button className='text-xl mt-5 font-semibold' onClick={handleCreateTweet}>
            트윗작성
          </button>
        </div>
      </div>

      <div className=' mt-24  overflow-y-scroll'>
        <div className='space-y-10'>
          {tweets.map((tweet) => (
            <div key={tweet.id} className='mb-3 p-3 bg-gray-50 w-[715px] rounded-md shadow-lg flex flex-row'>
              <div className='bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0' />
              <div className='m-2'>
                <div>{tweet.author}</div> {/* 작성자 정보를 출력 */}
                <div>{tweet.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
