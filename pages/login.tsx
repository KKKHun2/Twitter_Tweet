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
    <div className=" px-4 w-full h-screen bg-blue-400 p-6 py-4">
      <div className=" flex flex-col justify-center items-center mt-20 h-[80%] rounded-lg">
      <h1 className="text-4xl font-bold  ">Login</h1>
      <div className="mt-10 justify-center items-center">
      <form className="bg-gray-50 rounded-lg " onSubmit={handleSubmit(onValid)}>
        <div className="p-5 ">
          <label  htmlFor="email">Email: </label>
          <input
            type="email"
            {...register("email", { required: "정확한 이메일을 입력해주세요!" })}
          />
          </div>
          <div>
          <span className="mt-2 text-red-500 mb-4 ml-7">{errors?.email?.message}</span>
          </div>
        
        
        <div className=" flex justify-center items-center ">
        <button className="mt-2 bg-blue-200 w-[50%] rounded-md p-4 mb-2">Login</button>
        </div>
      </form>
      </div>
      
      </div>
     
    </div>
  );
};
