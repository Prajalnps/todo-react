import { useState } from "react"

export default function InputField(props) {

    const [inputText, setInputText] = useState('')

    const handleInput = () => {
        props.addList(inputText)
        alert(inputText)
    }

    return (
        <>
            <div className="input-field-container">
                <input
                    type="text"
                    className="task-input border-solid border-2 outline-none py-2 px-2 mr-2 rounded-xl"
                    placeholder="Enter new task"
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                />
                <button
                    className="bg-blue-500 rounded-full py-2 px-4 hover:bg-blue-700 text-white font-bold outline-none"
                    onClick={handleInput}
                >
                    +
                </button>
            </div>
        </>
    )
}