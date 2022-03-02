export default function Story({ img, username }) {
  return (
    <div className="">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer space-x-3
        hover:scale-110 transition transform ease-out duration-200;
        "
        src={img}
        alt="pic"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
