import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

const Home: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR("/api/users/my");
  useEffect(() => {
    if (error) {
      router.replace("/create-account");
    }
  }, [router, error]);
  if (!data) {
    return <div />;
  }
  return (
    <div className=" w-[60%] h-100vh space-y-5">
      <div className="m-9 p-3  bg-gray-50 rounded-lg shadow-lg ">
    <div className="flex felx-row ">
    <div className='bg-blue-300 w-5 h-5 p-10 rounded-3xl mr-5 ' />
    <div>
    <div className="w-25 mt-2  text-xl font-semibold">{data?.name} ({data?.email})</div>
      <div className="text-gray-400 mt-1 text-xs cursor-pointer">내 프로필 페이지 보기</div>
     
    </div>
     
    </div>
    <hr />
    <div className="flex felx-row">
        
    <div className="mr-7 mt-2 ml-5 ">
        <div className="text-lg font-bold">200</div>
        <div className="text-gray-400 cursor-pointer text-xs">TWEETS</div>
        </div>
        <div className="mr-7 mt-2 ">
        <div className="text-lg font-bold">2,579</div>
        <div className="text-gray-400 cursor-pointer text-xs">팔로잉</div>
        </div>
        <div className="mr-7 mt-2 ">
        <div className="text-lg font-bold">2,355</div>
        <div className="text-gray-400 cursor-pointer text-xs">팔로워</div>
        </div>
    </div>
       
       </div>

       <div className="m-10 p-3  bg-gray-50 rounded-lg shadow-lg  ">
        <div className="flex  font-semibold flex-row text-lg mb-2">
            팔로우 추천
            <div className=" ml-2 mt-2 text-xs text-blue-600 cursor-pointer">새로고침</div>
            <div className=" ml-1 mt-2 text-xs text-blue-600 cursor-pointer">모두보기</div>
        </div>
        <div className="flex felx-row mt-3 mb-3 ">
    <div className='bg-blue-300 w-5 h-5 p-10 rounded-3xl mr-5 ' />
    <div className="mb-3">
    <div className="w-25 mt-2  text-xl font-semibold">용훈 (@KKKHun2)</div>
    <div className="text-blue-600 mt-1 text-xs cursor-pointer">팔로우</div>  
    </div>

    </div>
    <div className="flex felx-row ">
    <div className='bg-blue-300 w-5 h-5 p-10 rounded-3xl mr-5 ' />
    <div className="mb-5">
    <div className="w-25 mt-2  text-xl font-semibold">다조아(@111)</div>
    <div className="text-blue-600 mt-1 text-xs cursor-pointer">팔로우</div>  
    </div> 
    </div>
      </div>



      <div className="m-10 p-3  bg-gray-50 rounded-lg shadow-lg  ">
        <div className="flex flex-row font-semibold text-lg mb-2">
            서울의 트렌드 
            <div className=" ml-1 mt-2 text-xs text-blue-600 cursor-pointer">변경하기</div>
        </div>
        <div className="text-blue-600 text-sm">
            <div className="cursor-pointer">
            어쩌고 저쩌고
            </div>
            <div className="cursor-pointer">
            저쩌고 어쩌고
            </div>
            <div className="cursor-pointer">
            어쩌고 저쩌고
            </div>
        </div>
      </div>


      <div className="m-10 p-3  text-gray-400 bg-gray-50 rounded-lg shadow-lg ">
        <div className="mb-2 text-xl">Twitter</div>
        <div className="text-xs cursor-pointer">
        <div>Ⓒ 2012 Twitter 회사소개 고객지원 이용약관</div>
        <div>개인정보취급 블로그 시스템 현황</div>
        <div>애플리케이션 자료실 인재채용 광고주</div>
        <div>비즈니스 미디어 개발자</div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;