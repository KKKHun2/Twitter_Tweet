import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const tweet = await client.tweet.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  console.log(tweet);
  res.json({ ok: true, tweet });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);