import EditTopic from '@/app/components/EditTopic';

const getTopicById = async (id) => {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new error('Failed to fetch topic');
    }
    const jsonData = await res.json();

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};
export default async function editTopic({ params }) {
  const { id } = params;
  console.log(id);
  const { topic } = await getTopicById(id);
  console.log(topic);
  const { title, description } = topic;
  console.log('id', id, title, description);

  return <EditTopic id={id} title={title} description={description} />;
}
