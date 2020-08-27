import React, { Component } from 'react';

import Alloutput from './Components/Alloutput'
import './App.css';
const arr = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
let color={}
class App extends Component {
  state={
    items : [],
    filterResult : [],
    launchFilter : true,
    landingFilter : true,
    isUpdated : false
  }
  firstChangeHandler = async ()=> {
   let result = [];

   color= {backgroundColor : "green"}
    const response = await 
    fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
     result = await response.json()
   
   
      
      
     // console.log(result)
      this.setState({items : result,filterResult : result,isUpdated: true} ,()=>{console.log(this.state.items)})

  }
  changeHandler = async (e) => {
    let result = [] ;
//if(this.state.launchFilter&&this.state.landingFilter){
  const response = await 
    fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${e.target.value}`)
     result = await response.json()
//}  
  /*  if(this.state.launchFilter&&(!this.state.landingFilter))
    {
      const response = await 
    fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false&launch_year=${e.target.value}`)
     result = await response.json()

    
    }
    if(!this.state.launchFilter)
    {
      const response = await 
    fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=false&launch_year=${e.target.value}`)
     result = await response.json()

    
    }*/
    this.setState({items : result,filterResult : result} )
    
    
  }

  componentDidMount () {
    this.firstChangeHandler();
  }
 launchclickHandler = (e) => {
   let result = []
   color= {backgroundColor : "green"}
   let val = e.target.value
   //console.log(this.state.items , val)
    result = this.state.items.filter(item => item.launch_success===JSON.parse(val))
    
    console.log(result)

this.setState({
  filterResult : result
} )
  }
  landclickHandler = (e) => {
    let result = []
    let val = e.target.value
    color= {backgroundColor : "green"}
    //console.log(this.state.items , val)
     result = this.state.items.filter(item => item.rocket.first_stage.cores[0].land_success===JSON.parse(val)
     )
     console.log(result)
 
 this.setState({
   filterResult : result
 } )
   }
   
  render() {
const buttonList = arr.map(item => {
  return  <button className="button-styling" key={item} value={item} 
  onClick={e=>{this.changeHandler(e)}}>{item}</button>
})
    
    return (
      <>
      <h3>SpaceX Launch Programs</h3>
      <div className="App">
        
     
      <div className="year-button">
      <span style={{justifyContent : "center",marginLeft : "15px" , marginBottom : "2px" }}>Filters</span> 
      <span style={{justifyContent : "center",marginLeft : "15px" , marginBottom : "2px"}}>Launch Year</span> 
        {buttonList} 
          <span style={{justifyContent : "center",marginLeft : "10px" }}>Successful Launch</span>    
        
        <button className="button-styling"name='launchFilter' value={this.state.launchFilter} onClick={e=>{this.launchclickHandler(e)}}>True</button>
        <button className="button-styling" name='launchFilter' value={false} onClick={e=>{this.launchclickHandler(e)}}>False</button>
        <span style={{justifyContent : "center",marginLeft : "10px"}}>Successful Landing</span>      
          <button className="button-styling" name='landingFilter' value={true} onClick={e=>{this.landclickHandler(e)}}>True</button>
        <button className="button-styling" name='landingFilter' value={false} onClick={e=>{this.landclickHandler(e)}}>False</button>
      </div>
     {(this.state.isUpdated==true) &&<Alloutput lists={this.state.filterResult}/> } <br/>
     
      </div>

     
      </>
    );
  }
  
}

export default App;
