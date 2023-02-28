import Band from "../Band/Band";
import data from "../../metal.json"
import "./BandList.css"
import { useState } from 'react'

function BandList() {
    const [query, setQuery] = useState('')
    const bands = data
      
    .map(({ id, band_name, formed, origin, fans }) => {
        return (
            <Band
            id={id}
            key={`${band_name}-${id}`}
            name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
            />
        )
    })

    return (
        <div className="BandsList-wrapper">
            <div className="formWrapper">
                <form>
                    <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="BandsList">
                {bands}
            </div>
        </div>
    )
}

export default BandList;