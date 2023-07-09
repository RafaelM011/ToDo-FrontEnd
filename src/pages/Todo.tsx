import { useParams } from "react-router-dom"

export const ToDo : React.FC = (): JSX.Element => {
    const {id, name} = useParams();
    
    return(
        <>
            Hello my id is {id} and my name is {name}
        </>
    )
}