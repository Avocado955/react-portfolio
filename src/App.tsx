
import styles from "./App.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Title from "./components/Title/Title";
import { ProjectsGrid } from "./containers/ProjectsGrid/ProjectsGrid";

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <ProjectsGrid />
      <AboutMe />
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