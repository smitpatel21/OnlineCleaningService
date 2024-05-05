
type definationofprop={
    image:string,
    card_data:string
}


const FlowCard=(props:definationofprop)=>{
    return(
        <>
        <div className="process-flow-card">
            <img src={props.image} alt="step image" />
            <p>{props.card_data}</p>          
        </div>
        </>
    );
}
export default FlowCard;