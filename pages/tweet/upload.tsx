import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface TForm {
  content: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: TForm) => {
    if (!loading) {
      const request = await fetch("/api/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (request.status === 200) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-blue-400">
    <div className="w-[400px] bg-gray-50 rounded-lg p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">트윗 작성</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-lg font-semibold mb-1">
            Content:
          </label>
          <input
            type="text"
            {...register("content", { required: "트윗 내용을 입력해주세요!" })}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
          <span className="text-red-500 mt-1">
            {errors?.content?.message}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 py-2 rounded-md text-white font-bold hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          작성하기
        </button>
      </form>
    </div>
  </div>
);
};