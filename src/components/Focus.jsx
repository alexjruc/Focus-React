import { useState } from "react"

const Focus = () => {
    const [toggleFocus, setToggleFocus] = useState(false)

    const handleFocus = () => {
        setToggleFocus (!toggleFocus)
    }

    return (
        <div>
            { toggleFocus ? (
                <section className="container_focus">
                <div className="focus" style={{backgroundColor : "yellow"}}>
                </div>
                <button onClick={handleFocus}>Off</button>
                </section>
            ) : (
                <section className="container_focus">
                <div className="focus" style={{backgroundColor : "black"}}>
                </div>
                <button onClick={handleFocus}>On</button>
                </section>
            )}
            
        </div>
    )
}
export default Focus