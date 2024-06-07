import { HiPencilAlt } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import Link from 'next/link';

const Topic = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex w-4/5 p-2 m-1 justify-between border border-cyan-800">
        <div>
          <h1 className="font-bold text-2xl">Topic Title</h1>
          <p> Description</p>
        </div>
        <div className=" flex items-start">
          <button className="p-1 text-red-400">
            <HiOutlineTrash size={24} />
          </button>
          <button className="p-1">
            <Link href={'/editTopic/123'}>
              <HiPencilAlt size={24} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
