import data from './data/projects-data.json';
import './App.css'
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
console.log(data);
  return (
    <>
    <h1>Main Heading</h1>
    {data.projects.map((project) => (<ProjectCard project={project} key={project.name} />))}
    </>
  )
}

export default App

// template for Project Data
// {
//   "name": "",
//   "stack": "",
//   "description": "",
//   "link": ""
// },