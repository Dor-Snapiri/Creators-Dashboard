import { useState } from 'react'
import './SearchField.scss'
import MagnifyingGlassIcon from '../assets/magnifyingGlassIcon.svg?react'
import CloseIcon from '../assets/closeIcon.svg?react'

type SearchFieldProps = {
    placeholder?: string
};

export default function SearchField({ placeholder = "Search" }: SearchFieldProps) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <form>
            <div className='inputContainer'>
                <MagnifyingGlassIcon />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>

            {inputValue.trim() && (
                <button className='clearButton' onClick={() => setInputValue('')}>
                    <CloseIcon />
                </button>
            )}
        </form>
    );
}