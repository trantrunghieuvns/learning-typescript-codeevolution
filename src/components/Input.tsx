type InputProps = {
    value: string
    className: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, className, handleChange }: InputProps) => {


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return <input type='text' value={value} onChange={handleInputChange} />
}