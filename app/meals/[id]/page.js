"use client"

export default function Id({params, searchParams}){
    return(
        <>
        <h1>Im the id page : {params.id}</h1>
        <h1>Im the id page : {searchParams.ali}</h1>
        </>
    )
}