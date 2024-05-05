
type definationofprop={
    image:string,
    data:string
}

const ServicesCards=(props:definationofprop)=>{
    return(
        <>
            <div className="service-card-prices">
                <div className="service-img-container-prices">
                    <img src={props.image} alt="" />
                </div>
                <p style={{fontSize:"16px",color:"#646464",marginBottom:"5px",textAlign:'center'}}>{props.data}</p>
                <p style={{fontSize:"18px",color:"#1D7A8C",fontWeight:"bold"}}>30 minutes</p>
            </div>
        </>
    );
}
export default ServicesCards;