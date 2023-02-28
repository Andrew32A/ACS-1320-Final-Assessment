import { useState } from 'react'

function Like() {
    const [like_count, setCount] = useState(0)
   
     return (

        <div className="Counter">
        <button 
            onClick={() => { 
            setCount(like_count - 1 )
            }}
        >-</button>
        <h2>Likes: {like_count}</h2>
        <button 
            onClick={() => {
            setCount(like_count + 1)
            }}
        >+</button>
        </div>

    );
}

export default Like;