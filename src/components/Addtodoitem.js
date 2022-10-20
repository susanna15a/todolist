


export function  Addtodoitem(props){
    function handleSubmit(event){
        props.onSubmitForm()
        event.preventDefault();
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={props.value} onChange={props.onChangeText} />
            <input type = "submit" value="add"/>
        </form>
    </div>
    )
}