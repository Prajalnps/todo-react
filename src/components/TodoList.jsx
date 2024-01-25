import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function TodoList(props) {

    //edit state
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(props.item)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleEditing = (e) => {
        setEditedTodo(e.target.value)
    }

    const handleSave = () => {
        // change the value, pass to the parent function
        props.handleEdit(props.index, editedTodo)
        // end is editing
        setIsEditing(false);
    }
    return (
        <>
            <li
                className={`todo-item flex justify-between px-4 py-4 border-b-2 hover:bg-gray-200 ${isEditing ? "bg-gray-200" : " "}`}>
                {
                    isEditing ? (
                        <input
                            className="w-full mr-5 rounded-sm px-4 outline-none border-none"
                            type="text"
                            value={editedTodo}
                            onChange={handleEditing}
                        />
                    ) : (
                        <span>
                            {props.item}
                        </span>
                    )
                }
                <div className="actions flex gap-2">
                    {
                        isEditing ? (
                            <span
                                className='cursor-pointer'
                                onClick={
                                    handleSave
                                }
                            >
                                <FontAwesomeIcon icon={faCheck} className="hover:text-green-500 font-bold" />
                            </span>
                        ) : (
                            <span
                                className='cursor-pointer'
                                onClick={handleEditClick}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} className="hover:text-blue-500" />
                            </span>
                        )
                    }
                    <span
                        className='cursor-pointer'
                        onClick={(e) => {
                            props.handleDelete(props.index)
                        }}
                    >
                        <FontAwesomeIcon icon={faEraser} className="hover:text-red-500" />
                    </span>
                </div>
            </li>
        </>
    )
}

/* editing a list 


*/