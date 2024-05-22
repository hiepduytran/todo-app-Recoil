import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { newListState, inprogressListState } from "../recoil/listState";
const NewList = () => {
  const newList = useRecoilValue(newListState); // ở đây chỉ hiện data, nên useRecoilValue là đủ.
  const setInprogress = useSetRecoilState(inprogressListState);
  const handleClick = (id) => () => {
    setInprogress(id); // truyền id vào
  };
  return (
    <div className="col">
      <h3>New</h3>
      <ul>
        {newList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={handleClick(item.id)}>In-Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
