import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="grid grid-flow-col m-1  bg-slate-400 p-4">
      <input className="gird col-span-1 border border-cyan-600 "></input>

      <div className=" flex col-span-8 align-middle justify-center font-bold text-3xl">
        <Link href={'/'}> Task List</Link>
      </div>
      <Link href={'/addTopic'}>
        <div className="grid col-span-2 p-2 bg-sky-300 m-auto"> AddTopics</div>
      </Link>
    </div>
  );
};
export default NavBar;
