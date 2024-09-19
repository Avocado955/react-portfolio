
import styles from "./App.module.scss";
import { ProjectsGrid } from "./containers/ProjectsGrid/ProjectsGrid";

function App() {
  return (
    <div className={styles.app}>
    <h1>Main Heading</h1>
    <ProjectsGrid />
    </div>
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