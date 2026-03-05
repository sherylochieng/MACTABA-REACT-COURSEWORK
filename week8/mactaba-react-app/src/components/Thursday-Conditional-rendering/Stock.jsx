//&& OPERATOR
// IF TRUE RETURS SOMETHING IF FALSE RETURNS NOTHING

function CasioWatch({name,price,instock,isNew}){

    return(
        <div>
    <h2>{name}</h2>
    <p>Ksh{price}</p>
    <p>{instock ? "12 watches available": "out of stock"}</p>
    <p>{isNew && 'New Arrival'}</p>
         </div>
    )
}

export default CasioWatch