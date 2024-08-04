import { NextResponse } from 'next/server';
import ConnectMongoDB from '../../../../../lib/mongoose';
import Topic from '../../../../../model/Topic';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await ConnectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: 'Topic Updated' }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await ConnectMongoDB();
  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
