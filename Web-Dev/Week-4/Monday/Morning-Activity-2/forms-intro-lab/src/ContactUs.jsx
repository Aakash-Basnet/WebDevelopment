import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
const[name,setName]=  useState('');
const[email,setEmail]=  useState('');
const[phone,setPhone]=  useState('');
const[phoneType,setPhoneType]=  useState('');
const[comments,setComments]=  useState('');

const handleSubmit = (e) => {
 e.preventDefault();
//  const formData=new FormData(e.currentTarget);
//  const values=Object.fromEntries(formData.entries());
// console.log(values);

const contactInformation={
    name,
    email,
    phone,
    phoneType,
    comments
}
console.log(contactInformation)
}


  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input name="name" id='name' type='text' value={name} onChange={e=> setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input name="email" id='email' type='text' value={email} onChange={e=> setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input name="phone" id='phone' type='text' value={phone} onChange={e=> setPhone(e.target.value)} /> <select
    name='phoneType'
    onChange={e => setPhoneType(e.target.value)}
    value={phoneType}
  >
    <option value='' disabled>
      Select a phone type...
    </option>
    <option>Home</option>
    <option>Work</option>
    <option>Mobile</option>
  </select>
        </div>

<div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='comments'>Comments:</label>
        <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
        />
        </div>

        <button name='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;