

function Band(props) {
    const { band_name, formed, origin, fans } = props

    return (
        <div className="MetalMeta-wrapper">
            <div className="">
                <div className="">{ band_name }</div>
                <div>Formed: { formed }</div>
                <div>{ origin }</div>
                <div>Fans: { fans }</div>
            </div>
        </div>
    )
}

export default Band;