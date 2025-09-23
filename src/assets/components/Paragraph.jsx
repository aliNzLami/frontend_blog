import React from 'react'

function Paragraph({children, mb = false}) {
    return (
        <div className={`artcileParagraph ${mb ? "mb-50" : ""}`}>
            { children }
        </div>
    )
}

export default Paragraph