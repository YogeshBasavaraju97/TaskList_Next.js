import React from 'react';

const AddTopic = () => {
  return (
    <form className="flex flex-col w-4/5 justify-center m-auto">
      <input
        type="text"
        placeholder="Add Title"
        className="text-xl w-full border border-black p-1"
      />
      <input
        type="text"
        placeholder="Add Description"
        className="text-xl mt-1 w-full border border-black p-1"
      />
      <button className="p-2 bg-green-500 mt-3 w-fit justify-center m-auto">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
