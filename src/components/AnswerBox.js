import { useState, useEffect, useRef } from 'react'
import { Button, Input, Label } from 'semantic-ui-react'

const AnswerBox = ( {prompt, answer, id} ) => {

    const [msg, setMsg] = useState(null)
    const [input, setInput] = useState('')
    const msgTimer = useRef()

    // useEffect(() => {
    //     if(localStorage.getItem(id) && localStorage.getItem(id) === 'True'){
    //         clearTimeout(msgTimer.current)
    //         setMsg(`Correct! ${answer} is the answer.`)
    //     }
    // }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if(input.trim().toLowerCase() == answer.toLowerCase()){
            clearTimeout(msgTimer.current)
            setMsg(`Correct! ${answer} is the answer.`)
            localStorage.setItem(id, 'True')
        } else {
            setMsg('Incorrect')

            clearTimeout(msgTimer.current)

            msgTimer.current = setTimeout(() => {
                setMsg(null)
            }, 4000)
        }
    }

    return (
        <div>
            {prompt && (prompt + " ")}

            <Input 
                action
                value={input} 
                onChange={handleChange} 
                onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            handleSubmit(e)
                        }
                    }}
            />

            <Button attached="right" onClick={handleSubmit}>Submit</Button>

            {msg && (
                <Label basic color="red"> {msg} </Label>
            )}
        </div>
    )
}

export default AnswerBox