import React from 'react';
import ReactDOM from 'react-dom';

class Post extends React.Component
{
    render()
    {
        return(
<div className="Post" style={{width:"400px"}}>
    <h1>{this.props.jobTitle}</h1>
    <h2>{this.props.location}</h2>
    <img src="/images/image.jpg" style={{width:"100%"}} />
<p>
{this.props.description}
</p>
<label>Salary</label><label>{this.props.salary}</label><br />
<button className="ui blue button">Apply</button>
<button className="ui red button">Not Interested</button>
</div>
        );
}
}
export default Post;