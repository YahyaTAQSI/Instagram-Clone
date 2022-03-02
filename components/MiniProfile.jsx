import { signOut, useSession } from "next-auth/react";
export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className=" h-16 w-16 rounded-full border p-[2px] "
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Hello world</h3>
      </div>
      <button
        onClick={signOut}
        className="text-blue-400 text-sm font-semibold "
      >
        Sing Out
      </button>
    </div>
  );
}
