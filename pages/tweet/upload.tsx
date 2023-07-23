import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/client/useMutation";
import { useEffect } from "react";
import { Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import TextArea from "../../components/textarea";
import Input from "../../components/input";

interface UploadProductForm {
  content: string;
}

interface UploadProductMutation {
  ok: boolean;
  tweet: Tweet;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/tweet");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
    console.log(data)
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px] bg-gray-50 rounded-lg p-6">
        <h2 className="text-4xl font-bold mb-6 text-center">트윗 작성</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
          <TextArea
            register={register("content", { required: true })}
            name="content"
            label="content"
            required
          />
          <button className="w-full bg-blue-400 py-2 rounded-md text-white font-bold">
            {loading ? "Loading..." : "작성하기"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Upload;
