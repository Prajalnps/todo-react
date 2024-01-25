import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export default function App() {

  const [listTodo, setListTodo] = useState([])

  const addList = (inputText) => {
    //to update in array, using spread operator
    setListTodo([...listTodo, inputText])
  }

  //deleting item
  const handleDelete = (index) => {
    let newTodoList = [...listTodo]
    newTodoList.splice(index, 1)
    setListTodo([...newTodoList])
  }

  return (
    <>
      <div className="container h-full w-full">
        <h1 className="text-2xl font-bold m-4">Todo application</h1>
        <InputField addList={addList} />

        <h2 className="underline m-4 font-bold">Todo List</h2>
        <ul className="w-96 h-auto max-h-96 overflow-auto border-2 border-solid border-black-400">
          {
            listTodo.map((todo, index) => {
              return (
                <TodoList key={index} index={index} item={todo} handleDelete={handleDelete} />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}