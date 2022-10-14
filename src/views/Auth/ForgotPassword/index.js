import React, { useEffect } from 'react';
import { Toaster } from '../../../helper/react-toast'
import { ToastContainer } from 'react-toastify';
import validate from 'validate.js';
import { ForgetPasswordSchema } from "../../../validators";
import { Link } from 'react-router-dom'
import InputForms from '../.././../common/inputForm'
import SocialLinkesIcons from '../../../components/socialLinkes.js/socialIcons';

const ForgotPassword = () => {
    ///State for our form
    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {

        const errors = validate(formState.values, ForgetPasswordSchema);
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formState.isValid) {
            console.log("hello")
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

    return (
        <>
            <main className='bg-gray-100'>
                <div className='auth-banner relative flex items-center'>
                    <div className='container mx-auto px-4 pt-8 relative'>
                        <div className='login-box shadow-lg'>
                            <div className='grid grid-cols-3 items-center my-10'>
                                <div className='text-center left text-white p-6'>
                                    <h1 className='font-bold text-3xl mb-6'>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <Link to='login' className="block py-2 px-6 rounded-full signin-btn m-auto mt-6 uppercase font-medium">Login</Link>
                                </div>
                                <div className='col-span-2 right bg-white p-8'>
                                    <div className='login-signup-box'>
                                        <h1 className='font-bold text-3xl mb-6 text-center'>Forgot Password</h1>
                                        <form onSubmit={handleSubmit}>
                                            <div className='mb-3'>
                                                <p>Enter your email to reset your password.</p>
                                                <InputForms
                                                    className="flex items-center relative"
                                                    type='email'
                                                    name="email"
                                                    value={formState.values.email || ""}

                                                    errorMessage={hasError("email") ?
                                                        formState.errors.email[0] : null}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                />
                                            </div>

                                            <div className='mt-6'>
                                                <div className='text-center'>
                                                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full uppercase">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                        <SocialLinkesIcons/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="left-bottom"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
            
            </main>
        </>
    )
}

export default ForgotPassword
