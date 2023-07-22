import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const tweets = await prisma.tweet.findMany({
      // 작성자 정보를 가져오도록 include 설정
      include: {
        author: true, // or { select: { id: true, name: true } } 원하는 필드만 선택
      },
    });
    res.status(200).json(tweets);
  } else if (req.method === 'POST') {
    const { content, author } = req.body; // 클라이언트에서 작성자 정보를 전달 받음
    const tweet = await prisma.tweet.create({
      data: {
        content,
        likes: 0,
        author: {
          // 작성자 정보를 데이터베이스에 저장
          create: {
            name: author, // or id 등 다른 필드 사용 가능
          },
        },
      },
      // 작성자 정보를 가져오도록 include 설정
      include: {
        author: true, // or { select: { id: true, name: true } } 원하는 필드만 선택
      },
    });
    res.status(201).json(tweet);
  }
}
