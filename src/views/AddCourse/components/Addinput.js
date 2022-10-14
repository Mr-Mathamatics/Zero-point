import React, { useState } from 'react';
import InputForms from '../../../common/inputForm';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast';
import { ToastContainer } from 'react-toastify';

const AddInputs = () => {
    const [inputList, setInputList] = useState([{ objective: "" }]);
    const [form, setFormValue] = useState(
        {
            values: ""
        }
    )

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    ///For disable button after 7 objectives
    const [isDisabledAdding, setIsDisabledAdding] = useState(false)
    useEffect(() => {
        if (inputList.length >= 5) {
            setIsDisabledAdding(true);
            Toaster(
                {
                    type: "info",
                    text: "You reached max limit of adding objectives."
                }
            )
        }
        else setIsDisabledAdding(false)
    }, [inputList])

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { objective: "" }]);
    };
    const handleChangeNormal = () => {
        console.log("hello")
    }

    return (
        <>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold ">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                        Learning Objectives-1</span>
                </label>
                <div className="mb-3 items-center"></div>
                <div className={
                    `flex justify-center items-center custom mt-2 width-100 ${inputList.length !== 1 ? "mt-2" : null}`}>
                    <InputForms
                        className="block font-medium"
                        type='text'
                        name="objective1"
                        value={form.values}
                        onChange={handleChangeNormal}
                       
                    />
                </div>
            </div>
            <div className="">
                <label className="block text-gray-700 text-sm font-bold ">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                        Learning Objectives-2</span>
                </label>
                <div className="mb-3 items-center"></div>
                <div className={
                    `flex justify-center items-center custom mt-2 width-100 `}>
                    <InputForms
                        className="block font-medium"
                        type='text'
                        name="objective1"
                        value={form.values}
                        onChange={handleChangeNormal}
                      
                    />
                </div>
            </div>

            {inputList.map((x, i) => {
                return (
                    <>
                        <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                    {`Learning Objectives-${2 + 1 + i}`}</span>
                            </label>
                            <div className="mb-3 items-center"></div>
                            <div className={
                                `flex justify-center items-center  custom mt-2 width-100 `}>
                                <InputForms
                                    className="block font-medium"
                                    type='text'
                                    name="objective"
                                    value={x.firstName}
                                    onChange={e => handleInputChange(e, i)}
                                  
                                />
                                <div className="remove_div_input">
                                    {inputList.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}>
                                        <i className="fa-solid fa-trash-can delete-button" data-tip="Remove item" />
                                        <ReactTooltip />
                                    </button>}

                                </div>

                            </div>
                            <div data-tip = {isDisabledAdding ? "You can add max 7" : ""}>
                            {inputList.length - 1 === i &&
                                <button onClick={handleAddClick}
                                    className = {`bg-theme-color hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-1 px-4 rounded negative-margin-top ${isDisabledAdding ? "disabled" : ""}`}
                                    disabled = {isDisabledAdding}
                                    
                                >
                                    Add +
                                </button>}
                            </div>
                        </div>
                    </>
                );
            })}
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default AddInputs