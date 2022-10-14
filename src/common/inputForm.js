import React from 'react'
const InputForms = (
    {
        className,
        labelText,
        labelclassName,
        inputclassName,
        labeltext,
        iconClassName,
        type = "text",
        id = "",
        placeholder = "",
        name,
        value,
        maxLength,
        required = false,
        readOnly = false,
        disabled = false,
        errorMessage = "",
        onChange,
        icon,
        selected,
        src,
        onClick
    }
) => {
    return (
        <>
            {
                labelText && labelText.length ? 
                <label className={labelclassName}>{labelText}</label>
                : null
            }
            <div className="input_group relative flex items-center modified mb-2">
            <input type={type} name={name}
                value={value}
                onChange={onChange}
                className="bg-white border border-slate-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded w-full"
                placeholder={placeholder} />
                
                {
                    iconClassName ?
                        <span className='form-icon absolute right-2'>
                            <i className={iconClassName} onClick={onClick}></i>
                        </span>
                        : null
                }
                {
                    src ?
                        <span className='form-icon absolute right-2'>
                            <img src={src} />
                        </span>
                        : null
                }
            </div>
            
            <span className='error text-red-500 text-sm font-medium'>
                {errorMessage}
            </span>

        </>
    )
}
export default InputForms