import React, {useState} from 'react';
import './styles.css';


function PhoneBookForm({ addEntryToPhoneBook }) {

    const [first, setFirst] = useState('Coder')
    const [last, setLast] = useState('Byte')
    const [phone, setPhone] = useState('8885559999')

    const onFormSubmit =(e)=> {
        e.preventDefault()
        addEntryToPhoneBook({first, last, phone})
        setFirst('')
        setLast('')
        setPhone('')
    }


    return (
        <form onSubmit={onFormSubmit} className='form' >
            <label>First name:</label>
            <br />
            <input
                onChange={(e)=> setFirst(e.target.value)}
                className='inputs'
                placeholder='First name'
                type='text'
                value={first}
            />
            <br/>
            <label>Last name:</label>
            <br />
            <input
                onChange={(e)=> setLast(e.target.value)}
                className='inputs'
                placeholder='Last name'
                type='text'
                value={last}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                onChange={(e)=> setPhone(e.target.value)}
                className='inputs'
                placeholder='Phone'
                type='text'
                value={phone}
            />
            <br/>
            <input

                className='submitBtn'
                placeholder='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

export default PhoneBookForm;