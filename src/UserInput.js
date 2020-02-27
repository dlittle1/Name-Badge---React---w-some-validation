import React from 'react'


export default function UserInput(props){
   console.log(props);
   return (
      <div className="badge">
         <form onSubmit={props.submitBadge}>
            <input type="text" placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange}/>
            <input placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.handleChange}/>
            <br />
            <input placeholder="Email" name="email" value={props.email} onChange={props.handleChange}/>
            <input placeholder="Place of Birth" name="birthPlace" value={props.birthPlace} onChange={props.handleChange}/>
            <br />
            <input placeholder="Phone" type="number" name="phone" value={props.phone} onChange={props.handleChange}/>
            <input placeholder="Favorite Food" name="favFood" value={props.favFood} onChange={props.handleChange}/>
            <br />
            <textarea name="info" onChange={props.handleChange} placeholder="Tell me about yourself"/>
            <button>Submit</button>
         </form>
      </div>
   )
}
