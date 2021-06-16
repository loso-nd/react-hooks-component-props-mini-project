import React from 'react';

function Header({name}){
   // let {name} = props.blogData
   // console.log(props.blogData.name)
    return (
    
        <header>
            <h1>
                {name}
            </h1>
      
        </header>
    
    )
}

export default Header