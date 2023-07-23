import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: IForm) => {
    if (!loading) {
      setLoading(true);
      const request = await fetch("/api/users/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (request.status === 200) {
        alert("계정이 이미 존재합니다! 로그인 부탁드려요!");
      }
      if (request.status === 201) {
        alert("계정생성 완료 회원가입을 축하드립니다! ");
      }
      if (request.status !== 405) {
        router.push("/login");
      }

      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-blue-400 p-6 py-4 flex justify-center items-center">
      <div className="w-[400px] bg-gray-50 rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">회원가입</h1>
        <form onSubmit={handleSubmit(onValid)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name:
            </label>
            <input
              type="text"
              {...register("name", { required: "Write your name please." })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-200"
            />
            <span className="text-red-500 mt-1">{errors?.name?.message}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email:
            </label>
            <input
              type="email"
              {...register("email", { required: "Write your email please." })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-200"
            />
            <span className="text-red-500 mt-1">{errors?.email?.message}</span>
          </div>
          <button
            className="w-full bg-blue-200 text-lg font-semibold py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};
