import react from 'react'
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import SideBar from "./SideBar"
import ItemsView from './ItemsView'
import Loader from "react-loader-spinner"
import Footer from "./footer"
class App extends react.Component{
  constructor(){
    super();
    this.state={
      data:[{name:"item1",rating:5,discription:"best quality item in budget price",tags:"Sports",price:200,display:true,img:"sport.png"},
            {name:"item2",rating:4,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Mens Fashion",price:670,display:true,img:"mensFash.png"},
            {name:"item3",rating:3,discription:"Electronics Component Ultimate Kit with Guide CD & Tutorial Book",tags:"Electronics",price:203,display:true,img:"Electronics.png"},
            {name:"item4",rating:2,discription:"best quality item in budget price",tags:"Clothing",price:476,display:true,img:"clothing.png"},
            {name:"item5",rating:5,discription:"Electronics Component Ultimate Kit with Guide CD & Tutorial Book",tags:"Eletronics",price:228,display:true,img:"Electronics.png"},
            {name:"item6",rating:1,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Women Fashion",price:451,display:true,img:"women.png"},
            {name:"item7",rating:3,discription:"best quality item in budget price",tags:"Mens Fashion",price:253,display:true,img:"mensFash.png"},
            {name:"item8",rating:2,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Women Fashion",price:824,display:true,img:"women.png"},
            {name:"item9",rating:4,discription:"best quality item in budget price",tags:"Electronics",price:123,display:true,img:"Electronics.png"},
            {name:"item10",rating:5,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Clothing",price:244,display:true,img:"clothing.png"},
            {name:"item11",rating:4,discription:"description 5",tags:"Sports",price:566,display:true,img:"sport.png"},
            {name:"item12",rating:4,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Women Fashion",price:271,display:true,img:"women.png"},
            {name:"item13",rating:2,discription:"best quality item in budget price",tags:"Mens Fashion",price:2773,display:true,img:"mensFash.png"},
            {name:"item14",rating:1,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Clothing",price:274,display:true,img:"clothing.png"},
            {name:"item15",rating:2,discription:"best quality item in budget price",tags:"Sports",price:2903,display:true,img:"sport.png"},
            {name:"item16",rating:3,discription:"Electronics Component Ultimate Kit with Guide CD & Tutorial Book",tags:"Electronics",price:164,display:true,img:"Electronics.png"},
            {name:"item17",rating:5,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Women Fashion",price:225,display:true,img:"women.png"},
            {name:"item18",rating:4,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Mens Fashion",price:223,display:true,img:"mensFash.png"},
            {name:"item19",rating:2,discription:"2019 Summer Short-sleeved Couple T-shirt, Youth Fashion Shirt。",tags:"Clothing",price:124,display:true,img:"clothing.png"},
            {name:"item20",rating:1,discription:"best quality item in budget price",tags:"Sports",price:1125,display:true,img:"sport.png"}],
      tags:[],
      rating:"0",
      price:1550,
      IsLoader:false
    }
    
 this.handleRate=this.handleRate.bind(this)
 this.handleSlider=this.handleSlider.bind(this)
 this.handleTag=this.handleTag.bind(this)
  }
  async handleTag(tag,operation){
       let tags=this.state.tags
       let Data=this.state.data
       if (operation){
         tags.push(tag)
       }
       else{
         tags.pop(tag)
       }
        Data.forEach((i,ind)=>{
        if(tags.includes(i.tags)){
          i.display=true
          Data[ind]=i
        }
        else{
          i.display=false
          Data[ind]=i
        }
       })
       this.setState({
         data:Data
       })

  }
 async handleRate(rate){
      await this.setState({
        IsLoader:!this.state.IsLoader
      })
      let Data=this.state.data
      Data.forEach((i,ind)=>{
       if(i.rating===Number(rate)){
         let item=i
         item.display=true
         Data[ind]=item
       }
       else{
        let item=i
        item.display=false
        Data[ind]=item
       }
    })
      
      await this.setState({
        rating:Number(rate),
        data:Data
      })
      await this.setState({
        IsLoader:!this.state.IsLoader
      })
  }
  async handleSlider(value){
    await this.setState({
      IsLoader:!this.state.IsLoader
    })
    let Data=this.state.data
    Data.forEach((i,ind)=>{
       if(i.price>value){
         let item=i
         item.display=false
         Data[ind]=item
       }
       else{
        let item=i
        item.display=true
        Data[ind]=item
       }
    })

     await this.setState({
           price:value
     })
     await this.setState({
       data:Data
     })
     await this.setState({
      IsLoader:!this.state.IsLoader
    })
  }
  
  render(){
  return (
    <div>
           <div className="navbar">
                <p>IRONLIST</p>
           </div>
           
           <div className="Container">
   
                <SideBar handleTag={this.handleTag} handleRate={this.handleRate} rate={this.state.rating} price={this.state.price} handleSlider={this.handleSlider} />
                <div>
                     <div className={"Container2" && this.state.IsLoader} >
                          {this.state.IsLoader &&
                           <Loader
                              type="Puff"
                              color="#00BFFF"
                              height={100}
                              width={100}
                              timeout={3000} //3 secs
                            />}
                      </div> 
                      {!this.state.IsLoader && <ItemsView data={this.state.data}/>
                      }  
                </div>
    
            </div>
          <Footer />
          </div>
  )
}}
export default App