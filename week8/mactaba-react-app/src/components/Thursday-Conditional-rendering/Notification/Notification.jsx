//logical &&...want to return one output condition

function Notification(hasMessage){
return(
    <div>
         {hasMessage && ' You have a new message'}
    </div>

)
}
export default Notification