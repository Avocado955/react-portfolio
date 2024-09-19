import styles from "./ProjectsGrid.module.scss";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import data from '../../data/projects-data.json';

export const ProjectsGrid = () => {
  return (
    <div className={styles.projectsGrid}>
      {data.projects.map((project) => (<ProjectCard project={project} key={project.name} />))}
    </div>
  )
}