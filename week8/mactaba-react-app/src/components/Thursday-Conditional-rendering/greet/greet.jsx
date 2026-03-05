// function Greeting({isLoggedIn}){
//     if (isLoggedIn){
//         return 
//         <h2>welcome back</h2>
//     }
//     return 
//     <h2>please log in</h2>

// }
// export default Greeting

function Result({passed}){
    if (passed){
        return(
        <h2>congrats</h2>
    )}
    return (
    <h2>you failed ,you need a retake</h2>)

}
export default Result