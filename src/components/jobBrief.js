import React from 'react';
import ReactDOM from 'react-dom';

class JobBrief extends React.Component
{

state={}
render()
{
return(
<div className="jobBrief" style={{width:"400px"}}>
    <h1>{this.props.jobTitle}</h1>
    <h2>{this.props.location}</h2>
    <img src="/images/image.jpg" style={{width:"100%"}} />
<p>
{this.props.description}
</p>
<label>Salary</label><label>{this.props.salary}</label><br />


</div>

)


}

}
export default JobBrief;