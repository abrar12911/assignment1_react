import React from 'react';
import ReactDOM from 'react-dom';

class JobBriefList extends React.Component
{

state={}
render()
{
return(
<div className="jobBriefList" style={{width:"400px"}}>
    <h1>{this.props.jobTitle}</h1>
    <h2>{this.props.location}</h2>
    <img src="/images/image.jpg" style={{width:"100%"}} />
<p>
{this.props.description}
</p>
<p>{this.props.salary}</p>



</div>

)


}

}
export default JobBriefList;