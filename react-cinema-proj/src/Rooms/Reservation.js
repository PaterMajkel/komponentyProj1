import Stack from '@mui/material/Stack';
import React, {useState, useEffect} from 'react'
export function Reservation(params){
    const [chairs, setChairs] = useState([])
    const [selected, setSelected]= useState([])
    const [index, setIndex]= useState(0)

    useEffect(() => {
        setChairs(params.chairs)
    }, []) //TODO show tickets to choose as selectable chips
    return(
        <div> 
            {chairs.map(chair => {return(
                <Stack direction="row" spacing={1}>
              </Stack>
            )})}
        </div>
    )
}