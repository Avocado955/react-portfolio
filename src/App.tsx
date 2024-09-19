
import styles from "./App.module.scss";
import Title from "./components/Title/Title";
import { ProjectsGrid } from "./containers/ProjectsGrid/ProjectsGrid";

function App() {
  return (
    <div className={styles.app}>
    <Title />
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