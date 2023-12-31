import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";
import client from "../../../lib/server/client"
import { withApiSession } from "../../../lib/withSession"

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if(req.method === "GET"){
    const tweets = await
    client.tweet.findMany({ include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },});
    res.json({
      ok:true,
      tweets,
    })
  }
  if (req.method === "POST") {
    const {
      body: { content },
      session: { user },
    } = req;
    const tweet = await client.tweet.create({
      data: {
        content,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      tweet,
    });
  }
}
export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);