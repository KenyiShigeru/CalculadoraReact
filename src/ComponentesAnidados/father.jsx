import { Children } from "./child"

export function Father(){
    return(
        <div className="PADRE">
            <h1>esto pertenece al padre</h1>
            <Children/>
        </div>
    )
}