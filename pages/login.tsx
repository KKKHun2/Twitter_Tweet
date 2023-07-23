import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
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
      const request = await fetch("/api/users/login", {
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
    <div className=" flex flex-col  px-4 w-full h-screen bg-blue-400 p-6 py-4">
      <div className="justify-center items-center">
      <h1 className="w-full bg-red-500 mb-10 mt-10">로그인을 해주세요!</h1>
      <div className="mt-32 justify-center items-center">
      <form className="bg-gray-50 rounded-lg w-full h-[80%]" onSubmit={handleSubmit(onValid)}>
        <div className="">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            {...register("email", { required: "Write your email please." })}
          />
          <span>{errors?.email?.message}</span>
        </div>
        <button>Login</button>
      </form>
      </div>
      
      </div>
     
    </div>
  );
};
