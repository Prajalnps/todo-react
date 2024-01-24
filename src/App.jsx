import { useState } from "react";
import InputField from "./components/InputField";

export default function App() {

  const [listTodo, setListTodo] = useState([])

  let addList = (inputText) => {
    //to update in array, using spread operator
    setListTodo([...listTodo, inputText])
  }

  return (
    <>
      <div className="container border-2 border-red-700 border-solid h-full w-full">
        <h1 className="text-2xl font-bold">Todo application</h1>
        <InputField addList={addList} />
      </div>
    </>
  )
}