import React from 'react'

 function FormCom() {
    return (
        <div>
          <form className="formbox">
            <div className="formlayout">
            <label className="formstyle">
              <h3>search your favorite cocktail</h3>
        

            </label>
        <p><input className="formcolor" type="text" name="name" id="name" placeholder="Search your favorite Margarita recipe"></input></p>
      
        </div>
          </form>
        </div>
    )
}

export default FormCom;
