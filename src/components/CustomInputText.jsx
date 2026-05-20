import React from 'react'

const CustomInputText = ({
    customId,
    titleLabel,
    customPlaceholder,
    ...rest
}) => {
    return (
        <div className='mb-3'>
            <label
                htmlFor={customId}
                className='form-label'>{titleLabel}</label>
            <input
                type="text"
                id={customId}
                className='form-control'
                placeholder={customPlaceholder}
                autoComplete='off'
                {...rest}
            />
        </div>
    )
}

export default CustomInputText