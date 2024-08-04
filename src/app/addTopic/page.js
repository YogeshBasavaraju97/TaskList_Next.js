'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('title and description are required');
      return;
    }
    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      console.log(res);
      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        console.log('status 404');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-4/5 justify-center m-auto"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Add Title"
        className="text-xl w-full border border-black p-1"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Add Description"
        className="text-xl mt-1 w-full border border-black p-1"
      />
      <button
        type="submit"
        className="p-2 bg-green-500 mt-3 w-fit justify-center m-auto"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
