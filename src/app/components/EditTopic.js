'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopic = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error('Failed to Update');
      }
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-4/5 justify-center m-auto"
      >
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Add Title"
          className="text-xl w-full border border-black p-1"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Add Description"
          className="text-xl mt-1 w-full border border-black p-1"
        />
        <button className="p-2 bg-green-500 mt-3 w-fit justify-center m-auto">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopic;
