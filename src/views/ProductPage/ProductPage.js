import React from 'react'

export default function ProductPage(props) {
    const data = props.match.params.id;
    const data2 = props.match.params.key;
    return (
        <div>
            {data + " - "+ data2}
        </div>
    )
}
