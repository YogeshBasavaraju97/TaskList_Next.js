import { HiPencilAlt } from 'react-icons/hi';

import Remove from './Remove';

import Link from 'next/link';

const getTopic = async () => {
  const data = await fetch('http://localhost:3000/api/topics', {
    cache: 'no-store',
  });

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const jsonData = await data.json();

  console.log(jsonData);

  return jsonData;
};

const Topic = async () => {
  const { topics } = await getTopic();

  return (
    <>
      {topics.map((t) => (
        <>
          <div key={t.id} className="flex  justify-center">
            <div className="flex w-4/5 p-2 m-1 justify-between border border-cyan-800">
              <div>
                <h1 className="font-bold text-2xl">{t.title}</h1>
                <p> {t.description}</p>
              </div>
              <div className=" flex items-start">
                <Remove id={t._id} />

                <button className="p-1">
                  <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Topic;
