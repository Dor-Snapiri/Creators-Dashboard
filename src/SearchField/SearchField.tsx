import { useState } from 'react'
import './SearchField.scss'
import MagnifyingGlassIcon from '../assets/magnifyingGlassIcon.svg?react'
import CloseIcon from '../assets/closeIcon.svg?react'

type SearchFieldProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
};

export default function SearchField({ placeholder = "Search", onChange = () => { } }: SearchFieldProps) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
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