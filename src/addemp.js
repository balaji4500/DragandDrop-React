import { inputAdornmentClasses } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
function Emp() {

  const [name, Setname] = useState('')
  const [role, Setrole] = useState("")



  const onsubmit = (e) => {
    e.preventDefault();
    const req = { name, role }

    return (
      axios.post('http://localhost:3000/posts', req).then((res) => {
        console.log(res.data)
      })

    )


  }

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type='text' placeholder="name" value={name} onChange={(e) => { Setname(e.target.value) }} /><br />
        <label for="cars">Choose a role:</label>
        <select id="cars" onChange={(e) => { Setrole(e.target.value) }} value={role}>
          <option value="Cheif executive officer">Cheif executive officer</option>
          <option value="Cheif techonology officer">Cheif techonology officer</option>
          <option value="Cheif business officer">Cheif business officer</option>
          <option value="Cheif accounting officer">Cheif accounting officer</option>
          <option value="technology">technology</option>
          <option value="business">business</option>
          <option value="accounting">accounting</option>
        </select>
        <input type="submit" />
        <a href="http://localhost:3001/">back</a>
      </form>


    </div>




  )






};


export default Emp

