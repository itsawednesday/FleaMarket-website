
import ProjectItem from "./ProjectItem";
import ProjectData from "./Data";


const ProjectList = () => {
    return (
      <div className='item-container'>
      <h1 className='project-heading'>Market</h1>
  
      <div className='project-container'>

        {ProjectData.map((val, ind) => {

        
        return(

            <ProjectItem
            key={ind}
            imgsrc={val.imgsrc}
            text={val.text}
            link={val.link}
            title={val.title}/>


        )
            
        })}
     
     
          </div>
          </div>     
  
  
  
  
    )
  }
  
  export default ProjectList
