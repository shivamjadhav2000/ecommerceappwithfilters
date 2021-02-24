import './SideBar.css'
import React from 'react'
function SideBar(props) {
    function handleTag(e){

        if(e.target.style.backgroundColor){
          e.target.style.backgroundColor=""
          props.handleTag(e.target.innerHTML,false)
        }
        else{
            e.target.style.backgroundColor="#4aec3bc5"
            props.handleTag(e.target.innerHTML,true)
        }
    }
    function handleSlider(e){
             props.handleSlider(e.target.value)
    }
    return (
    <div>
         <div className="SideContainer">
              <h1>Filter</h1>
              <div>
              <div className="Container1">
                   <p>price</p>
                   <div className="sliderContainer">
                        <input type="range" min={50} max={3000} value={props.price} onChange={handleSlider}  className="slider"/>
                        <input type="text" value={props.price} onChange={handleSlider} className="sliderValue"/>
                   </div>
   
               </div>
              <div className="Container1">
                   <p>Tags</p>
                   <div className="TagsContainer">
                        <button onClick={handleTag}>Sports</button>
                        <button onClick={handleTag}>Electronics</button>
                        <button onClick={handleTag}>Clothing</button>
                        <button onClick={handleTag}>Mens Fashion</button>
                        <button onClick={handleTag}>Women Fashion</button>
                   </div>
              </div>
             <div className="Container1">
                  <p>Rating</p>
                  <div className="RatingContainer">
                        <div className="RatingSubContainer">
                             <div>
                                  <img src="ratingIcon.png" alt="star1" className="Rate"/>
                                  <img src="ratingIcon.png" alt="star2" className="Rate"/>
                                  <img src="ratingIcon.png" alt="star3" className="Rate"/>
                                  <img src="ratingIcon.png" alt="star4" className="Rate"/>
                                  <img src="ratingIcon.png" alt="star5" className="Rate"/>
                            </div>
                            <button onClick={()=>{props.handleRate("5")}} className={props.rate===5?"displayGreen":""}>5</button>
                         </div>
                        <div className="RatingSubContainer">
                            <div>
                            <img src="ratingIcon.png" alt="star1" className="Rate"/>
                            <img src="ratingIcon.png" alt="star2" className="Rate"/>
                            <img src="ratingIcon.png" alt="star3" className="Rate"/>
                            <img src="ratingIcon.png" alt="star4" className="Rate"/>
                            </div>
                            <button onClick={()=>{props.handleRate("4")}} className={props.rate===4?"displayGreen":""}>4</button>
                        </div>
                        <div className="RatingSubContainer">
                            <div>
                            <img src="ratingIcon.png" alt="star1" className="Rate"/>
                            <img src="ratingIcon.png" alt="star2" className="Rate"/>
                            <img src="ratingIcon.png" alt="star3" className="Rate"/>
                            </div>
                            <button onClick={()=>{props.handleRate("3")}} className={props.rate===3?"displayGreen":""} >3</button>
                        </div>
                        <div className="RatingSubContainer">
                            <div>
                            <img src="ratingIcon.png" alt="star1" className="Rate"/>
                            <img src="ratingIcon.png" alt="star2" className="Rate"/>
                            </div>
                            <button onClick={()=>{props.handleRate("2")}} className={props.rate===2?"displayGreen":""} >2</button>
                        </div>
                        <div className="RatingSubContainer">
                            <div>
                            <img src="ratingIcon.png" alt="star1" className="Rate"/>
                            </div>
                            <button onClick={()=>{props.handleRate("1")}} className={props.rate===1?"displayGreen":""} >1</button>
                        </div>
        
                   </div>
            </div>
    </div>
    </div>
    </div>
    )}

export default SideBar