import { Header } from "../components/Header"


export function ErrorPage({ cart }){

    return(
        <>
        <Header cart= { cart }/>
        
        <h2>Error 404 Not Found</h2>
        <h2>Page Not Found</h2>
        </>
    )
}