import React, { useState } from "react"

export default function Form() {
    const [formsData, setFormsData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments:"",
        isFriendly: true,
        employment: "",
        favLanguage: ""

    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormsData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formsData)
    }
    return (
        <form onSubmit={handleSubmit} className="forms">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formsData.firstName}
            />
            <input 
            type="text" 
            placeholder="Last Name" 
            onChange={handleChange}
             name="lastName"
              value={formsData.lastName}
               />
            <input 
            type="email" 
            placeholder="Enter your email"
             onChange={handleChange} 
             name="email" 
             value={formsData.email} 
             />
             <textarea
              placeholder="Comments"
              onChange={handleChange} 
              name="comments" 
              value={formsData.comments} 
             />
  <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formsData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly" className="checklabel"> <strong>Are you a developer? </strong> </label>
            <br />

  
            <fieldset>
                <legend> <strong>Current employment status </strong></legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formsData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formsData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formsData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
             
            <label className="selectcolor" htmlFor="favLanguage">  <strong> What is your favorite language? </strong> </label>
            <br />
            <select 
                id="favLanguage"
                value={formsData.favColor}
                onChange={handleChange}
                name="favLanguage"
                className="optionslanguage"
            >
                <option value="">-- Choose --</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="Dev oops">Dev oops</option>
                <option value="Blockchain">Blockchain </option>
            </select>
            <br />
            <button className="submitbtn">Submit</button>
        </form>
    )
}
