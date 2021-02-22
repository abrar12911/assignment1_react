import React from 'react';
import ReactDOM from 'react-dom';
class  Demo extends React.Component{
state={}
   render()
   {
        return (
            <div className="ui container">
                            <div><h1>Mentor Students Job Portal</h1></div>
                            <div className="ui fluid" style={{width:"100%",height:"400px"}}>
                                <img class="ui fluid image" src="/images/image.jpg" style={{width:"100%",height:"400px"}}></img>
                            </div><br />
                            

                <div>
                            <label>What </label>
                            
                            <input type="text" placeholder="Job Titles Keywords or Company" style={{width:"300px"}}  />
                            

                            <label> where </label>
                            
                            <input type="text" placeholder="Enter City" style={{width:"300px"}} />
                            <button>Find Job</button>
                </div>
            
</div>
                
     
        );
        }
}


export default Demo;