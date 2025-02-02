import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-row w-full justify-end items-start bg-primary-600 text-white-100 pb-20'>
            <div className='flex justify-end gap-4 mr-3 mt-3 underline'>
                <div className="no-underline">© 2025 Educative Inc.</div>
                <p >Term of use</p>
                <p >Privacy</p>
                <p >Interest-based ads</p>
                <p >Local Shops</p>
                <p >Regions</p>
            </div>
        </div>
    )
}

export default Footer