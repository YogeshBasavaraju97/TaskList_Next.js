'use client';
import { useRouter } from 'next/navigation';

import { HiOutlineTrash } from 'react-icons/hi';

const Remove = ({ id }) => {
  const router = useRouter();
  const removeItem = async () => {
    const confirmed = confirm('Are you sure you want to delete');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      } else {
        return;
      }
    }
  };
  return (
    <div>
      <button onClick={removeItem} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
};

export default Remove;
