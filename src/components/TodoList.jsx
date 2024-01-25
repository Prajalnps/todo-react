import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

export default function TodoList(props) {
    return (
        <>
            <li
                className="todo-item flex justify-between px-4 py-4 border-b-2 hover:bg-gray-50">
                {props.item}
                <span
                    className='cursor-pointer'
                    onClick={(e) => {
                        props.handleDelete(props.index)
                    }}
                >
                    <FontAwesomeIcon icon={faEraser} className="hover:text-red-500" />
                </span>
            </li>
        </>
    )
}