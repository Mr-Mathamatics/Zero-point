import React, { useEffect } from 'react'
import validate from 'validate.js';
import { toast, ToastContainer } from 'react-toastify';
import { Toaster } from '../../helper/react-toast';
import { AddCourseSchema } from '../../validators';
import { Link } from 'react-router-dom';
import InnerPageBanner from "../../components/InnerPageBanner";
import InputForms from "../../common/inputForm";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditCourse = () => {

    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    ///For validating error everytime change in inputs
    useEffect(() => {
        const errors = validate(formState.values, AddCourseSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    ///Handle change for storing input values to state.
    const handleChange = (event) => {
        event.persist();
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    ///Submiting values to api.
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formState.isValid) {
            let addCourse = JSON.parse(localStorage.getItem("addCourse"));
            let tempArray = [];

            // localStorage.removeItem("addCourse");
            tempArray.push(formState.values);
            localStorage.setItem("addCourse", JSON.stringify(tempArray));
            
            {
                Toaster({
                    type: "success",
                    text: "Course Added Successfully."
                })
            }
        }
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                ...formState.errors,
            },
        }));
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    useEffect(() => {
        let addCourse = JSON.parse(localStorage.getItem("addCourse"));
        if(addCourse) {
            setFormState((formState) => ({
                ...formState,
                values: {
                    ...formState.values,
                    title: addCourse[0].title,
                    sub_title: addCourse[0].sub_title,
                    category: addCourse[0].category,
                    sub_category: addCourse[0].sub_category,
                    price: addCourse[0].price,
                    },
            }));
        }

    }, []);

    return(
        <>
        <main className="bg-gray-100">
        <InnerPageBanner title={"Fit and Fierce Over 40"} />
            <section className='sec-padding'>
                <div className="course-header border-b">
                    <div className="container mx-auto px-4 flex items-center justify-between pb-4">
                        <h2 className="font-bold text-3xl mb-0">Fit and Fierce Over 40</h2>
                        <button className="px-4 py-3 font-semibold text-sm bg-theme-color hover:bg-blue-700 text-white rounded shadow-sm">Edit in Builder</button>
                    </div>
                </div>
            
                <div className="container m-auto px-4">
                    <div className="w-full">
                        <div className="bg-white p-4 pb-8 mt-6 rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Title</span>
                                        </label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="title"
                                            value={formState.values.title || ""}
                                            errorMessage={hasError("title") ?
                                                formState.errors.title[0] : null}
                                            onChange={handleChange}
                                            placeholder="Enter Title"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">Sub Title</label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="sub_title"
                                            value={formState.values.sub_title || ""}
                                            errorMessage={hasError("sub_title") ?
                                                formState.errors.sub_title[0] : null}
                                            onChange={handleChange}
                                            placeholder="Enter Sub Title"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Category</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        name='category'
                                        value={formState.values.category || ""}
                                        errorMessage={hasError("category") ?
                                            formState.errors.category[0] : null}
                                        onChange={handleChange}
                                            >
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Sub Category</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full"
                                        name='sub_category'
                                        value={formState.values.sub_category || ""}
                                        onChange={handleChange}
                                        >
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Level</span>
                                        </label>
                                        <select className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded-md w-full">
                                            <option selected>Choose Option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Price</span>
                                        </label>
                                        <InputForms
                                            className="block font-medium"
                                            type='text'
                                            name="price"
                                            value={formState.values.price || ""}
                                            errorMessage={hasError("price") ?
                                                formState.errors.price[0] : null}
                                            onChange={handleChange}
                                            placeholder="Price"
                                        />
                                    </div>
                                
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                Learning Objectives</span>
                                        </label>
                                        <div className="mb-3 flex items-center">
                                            <InputForms
                                            className="block font-medium w-full"
                                            type='text'
                                            name="learning_objectives"
                                            value=""
                                            placeholder="Enter Objectives"
                                        />
                                            <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                        </div>
                                        <div className="mb-3 flex items-center">
                                            <InputForms
                                            className="block font-medium w-full"
                                            type='text'
                                            name="learning_objectives"
                                            value=""
                                            placeholder="Enter Objectives"
                                        />
                                            <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                        </div>
                                        <div className="mb-3 flex items-center">
                                            <InputForms
                                            className="block font-medium w-full"
                                            type='text'
                                            name="learning_objectives"
                                            value=""
                                            placeholder="Enter Objectives"
                                        />
                                            <img className="ml-2 w-4" src="https://img.icons8.com/material-sharp/24/000000/multiply.png"/>
                                        </div>
                                        <div className="text-center">
                                            <button className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded uppercase font-medium text-sm'>Add Objective</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                                Banner Image</span>
                                        </label>
                                        <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    </div>
                                    <div className='col-span-3'>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block">
                                            Details</span>
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="Enter Description"
                                            config={{ placeholder: 'Enter Description' }}
                                            name='description'
                                            enterMode='CKEDITOR.ENTER_BR'
                                            shiftEnterMode='CKEDITOR.ENTER_P'
                                            onReady={(editor) => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                            const data = editor.getData();
                                            console.log({ event, editor, data });
                                            //   setFormData({ ...formData, description: data });
                                            }}
                                            onBlur={(event, editor) => {
                                            // console.log( 'Blur.', editor );
                                            }}
                                            onFocus={(event, editor) => {
                                            // console.log( 'Focus.', editor );
                                            }}
                                        />
                                    </div>
                                </div>
                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-6 uppercase py-2 px-8 rounded">
                                Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default EditCourse;