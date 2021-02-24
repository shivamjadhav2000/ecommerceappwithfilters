import './ItemsView.css'
function ItemsView(props){
    return (
    <div className="ItemsView">
         {props.data.map((i,id)=>{
             if(i.display){
                return (<div className="Item">
                 <img src={i.img} width="50%" alt="download.png"/>
                 <div className="ItemCont1">
                 <p><b>name</b> : {i.name}</p>
                 <p><b>rating</b> : {i.rating}</p>
                 </div>
                 <p><b>price</b> : {i.price} $</p>
                 <p><b>discription</b> : {i.discription}</p>
                 </div>)
             }
             else{
                 return null
             }
         })}
    </div>
    )
}
export default ItemsView