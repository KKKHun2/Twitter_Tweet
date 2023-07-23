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
    <div>
      <h2>Upload Product</h2>
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <TextArea
          register={register("content", { required: true })}
          name="content"
          label="content"
          required
        />
        <button>
          {loading ? "Loading..." : "Upload item"}
        </button>
      </form>
    </div>
  );
};
export default Upload;
