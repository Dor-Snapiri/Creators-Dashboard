import { useState } from 'react'
import './SearchField.scss'
import MagnifyingGlassIcon from '../assets/magnifyingGlassIcon.svg?react'
import CloseIcon from '../assets/closeIcon.svg?react'

type SearchFieldProps = {
    name: string
    placeholder?: string
};

export default function SearchField({ name, placeholder = "Search" }: SearchFieldProps) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleClear = () => {
        setInputValue('')
    }

    return (
        <form name={name}>
            <div className='inputContainer'>
                <MagnifyingGlassIcon />
                <input
                    type="text"
                    placeholder={placeholder}
                    name={`${name}Input`}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>

            {inputValue && (
                <button className='clearButton' onClick={handleClear}>
                    <CloseIcon />
                </button>
            )}
        </form>
    );
}