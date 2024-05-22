import React from "react";
import { RecoilRoot } from "recoil";
import NewList from "./components/NewList";
import InProgressList from "./components/InProgressList";
import CompletedList from "./components/CompletedList";
import NewActionInput from "./components/NewActionInput";

/** 
 * Hooks:
 * useRecoilState: giống y change useState của React luôn, nhận vào recoil state, 
 * trả về giá trị của state cùng với hàm để thay đổi giá trị state.
 * 
 * useRecoilValue: cũng nhận vào recoil state, nhưng khác cái là chỉ trả về giá trị của state - 
 * dùng để truy xuất giá trị state.
 * 
 * useSetRecoilState: giống cái useRecoilState, nhưng chỉ trả về hàm để thay đổi giá trị state.
 * 
 * useResetRecoilState: trả về hàm để reset state về giá trị default.
*/

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <h1>To-do List</h1>
        </header>
        <NewActionInput />
        <div className="content">
          <NewList />
          <InProgressList />
          <CompletedList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
