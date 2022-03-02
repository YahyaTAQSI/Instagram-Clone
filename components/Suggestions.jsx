import { useEffect, useState } from "react";
import faker from "faker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold">Suggestions for you </h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px] "
            src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-8/13497830_2045135279044117_5473688183756205169_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH__gz3p1OcBQFOAHat1K800g72p5MlCezSDvankyUJ7C1B-xGN2wrwf-zqBPa1kKV3TyBLVDSgL2RVnq2nc481&_nc_ohc=_IenYWBhf0IAX9_lmWs&tn=112umDptS5ujphxD&_nc_ht=scontent-mad1-1.xx&oh=11d9a98d6105651a11ead04db66498de&oe=61D88615"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm  ">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">profile.company.name</h3>
          </div>

          <button className=" text-blue-400 font-bold text-xs ">Follow</button>
        </div>
      ))}
    </div>
  );
}
