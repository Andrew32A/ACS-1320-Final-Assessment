import Like from "../Like/Like";
import "./Band.css"

function Band(props) {
    const { band_name, formed, origin, fans } = props

    return (
        <div className="Band-wrapper">
            <div className="">
                <div className="">{ band_name }</div>
                <div>Formed: { formed }</div>
                <div>{ origin }</div>
                <div>Fans: { fans }</div>
                <Like />
            </div>
        </div>
    )
}

export default Band;