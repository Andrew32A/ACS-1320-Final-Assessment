import data from "../../metal.json"
import "./MetalMeta.css"

function MetalMeta() {
    return (
        <div className="total">
            <div className="">
                <div className="">Metal Bands 🤘</div>
                <div>Bands: { data.length }</div>
            </div>
        </div>
    )
}

export default MetalMeta