// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongodb from "@/utils/mongodb"
import Todo from '../../../models/Todo'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await mongodb.dbConnect();
  // mongodb.dbDisconnect();
  // res.status(200).json({ name: 'John Doe' })

  if (req.method === 'GET') {
    try {
      const todos: any = await Todo.find()
      res.status(200).json(todos)
    } catch (error: any) {
      res.status(500).json(error)
    }
  }

  if (req.method === 'POST') {
    try {
      const todo = await Todo.create(req.body)
      res.status(201).json(todo)
    } catch (error: any) {
      res.status(500).json(error)
    }
  }

  if (req.method === 'DELETE') {
    try {
      const todo = await Todo.findByIdAndDelete(req.body);
      res.status(200).json(todo);
    } catch (error: any) {
      res.status(500).json(error)
    }
  }
}
