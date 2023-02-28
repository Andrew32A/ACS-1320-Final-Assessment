import Band from "../Band/Band";
import data from "../../metal.json"
import "./BandList.css"
import { useState } from 'react'

function BandList() {
    const [query, setQuery] = useState('')
    const bands = data
    .filter(obj => obj.band_name.toLowerCase().includes(query.toLowerCase()))
    .map(({ id, band_name, formed, origin, fans }) => {
        return (
            <Band
            id={id}
            key={`${band_name}-${id}`}
            band_name={band_name}
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