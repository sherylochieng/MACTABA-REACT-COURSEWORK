//EVENT...CLICKING
function Button(){
    function click(){
        alert('You clicked me')
    }
    return(
        <div>
            <button onClick={click}>CLICK ME</button>
        </div>
    )
}

export default Button

//looks..like a closure or callback?