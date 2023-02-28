import data from "../../metal.json"

function MetalMeta() {
    return (
        <div className="MetalMeta-wrapper">
            <div className="">
                <div className="">Metal Bands 🤘</div>
                <div>Bands: { data.length }</div>
            </div>
        </div>
    )
}

export default MetalMeta