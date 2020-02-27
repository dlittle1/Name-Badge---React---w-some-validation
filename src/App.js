import React from 'react';
import './App.css';
import UserInput from "./UserInput"
import Badge from "./Badge"

class App extends React.Component{
   constructor(){
      super()

      this.state = {
         firstName: "",
         lastName: "",
         email: "",
         birthPlace: "",
         phone: "",
         favFood: "",
         info: "",
         badgeList: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.submitBadge = this.submitBadge.bind(this)
   }

   handleChange(event){
      const {name, value} = event.target
      this.setState({[name]: value})
   }

   threeCharacterValidation(){
      const countValues = Object.values(this.state)
      for (let i = 0; i < countValues.length; i++){
         if (countValues[i].length < 3){
            let count = 0;
            for (let key in this.state){
               if (count === i){
                  let humanizedKey = this.humanizeIt(key)
                  alert(`${humanizedKey} is less than 3 characters`)
                  return
               }
               count++
            }
         }
      }
   }

   humanizeIt(key){
      switch (key) {
         case "firstName":
            return "First Name"
         case "lastName":
            return "Last Name"
         case "birthPlace":
            return "Place of Birth"
         case "phone":
            return "Phone Number"
         case "email":
            return "Email Address"
         case "favFood":
            return "Favorite Food"
         default:
            return "what the hell?"
      }
   }

   submitBadge(e){
      e.preventDefault()
      const newBadge = [...this.state.badgeList]

      this.threeCharacterValidation()
      newBadge.push(this.state)
      this.setState({
         badgeList: newBadge
      })
      console.log(this.badgeList)
   }
   render(){
      let badges = this.state.badgeList.map((badge) => <Badge info={badge} />)
      return (
        <div className="App">
          <UserInput state={this.state} handleChange={this.handleChange} submitBadge={this.submitBadge}/>
          <h1>{this.state.firstName}</h1>
          {badges}
        </div>
      )
   }

}

export default App;
