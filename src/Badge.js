import React from 'react'


export default function Badge(props){
   console.log(props)
   return (
      <div>
         <h1>Name: {props.info.firstName} {props.lastName}</h1>
         <h1>Place of birth: {props.info.birthPlace}</h1>
         <h1>Email: {props.info.email}</h1>
         <h1>Phone: {props.info.phone}</h1>
         <h1>Favorite food: {props.info.favFood}</h1>
         <h1>info: {props.info.info}</h1>
      </div>
   )
}
