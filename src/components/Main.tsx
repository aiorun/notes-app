import React from 'react'

const Main = (props: any) => {


const handleChange = (e: any) => {
props.onTextChange(e.target.value)
}

const handleSubmit = () => {
props.onTextSubmit()
}


    return (

        <main className="main relative w-full h-screen ml-72 py-6 px-2 bg-gray-50">
          <textarea className="w-full min-w-full min-h-full bg-transparent" value={props.text} onChange={handleChange} />
           <button onClick={handleSubmit}>Save</button> 
        </main>
    )
}

export default Main