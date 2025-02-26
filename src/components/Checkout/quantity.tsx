import { useState } from 'react';
import { BsDash } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';

export default function DynamicInput() {
    const [value, setValue] = useState(5); // Initialize value with 5

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1); // Decrease value
        }
    };

    const handleIncrement = () => {
        setValue(value + 1); // Increase value
    };

    return (
        <td>
            <div className='flex items-center space-x-5 border px-4 rounded-xl w-full md:w-36 justify-center bg-white'>
                <BsDash className='text-2xl font-bold cursor-pointer' onClick={handleDecrement} />
                <input
                    className='h-10 w-10 rounded-sm text-xs border-0 px-3 text-center bg-white'
                    value={value}
                    readOnly
                />
                <IoMdAdd className='text-2xl font-bold cursor-pointer' onClick={handleIncrement} />
            </div>
        </td>
    );
}

