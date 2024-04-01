import { useRouteError } from "react-router-dom"

const Error = () => {
    const err=useRouteError();
    return <>
    <h2>Oops...!!</h2>
    <h2>Something went wrong....!</h2>
    <h3>{err.status}: {err.statusText}</h3>
    </>
}

export default Error;