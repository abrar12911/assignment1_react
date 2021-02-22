
import '../App.css';
import Demo from '../components/Demo';
import JobBrief from '../components/jobBrief';
import JobBriefList from '../components/jobBriefList';
import Post from './post';
import Job from '../job.json';

function App() {
  return (
<div>

<Demo /><br /><br />
<h1>Jobs</h1>
{Job.job.map((item) => (
                              <Post jobTitle={item.jobTitle}
                               location={item.location}
                               description={item.description}
                               salary={item.salary}
                                />
                            ))} 
                            <br />

{Job.job.map((item) => (
                              <JobBriefList jobTitle={item.jobTitle}
                               location={item.location}
                               description={item.description}
                               salary={item.salary}
                                />
                           ))} 
                           <br /> 


</div> 
  );
}

export default App;
