import { NextResponse } from 'next/server';
import ConnectMongoDB from '../../../../lib/mongoose';
import Topic from '../../../../model/Topic';

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await ConnectMongoDB();
    await Topic.create({ title, description });

    return NextResponse.json({ message: 'ok' }, { status: 201 });
  } catch (error) {
    console.error('Error creating topic:', error);

    return NextResponse.json(
      { message: 'Error creating topic', error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await ConnectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await ConnectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Topic Deleted' }, { status: 200 });
}
