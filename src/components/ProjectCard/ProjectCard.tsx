import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: {
    name: string;
    stack: string;
    description: string;
    link: string;
  }
}

const ProjectCard = ({project}: ProjectCardProps) => {
  console.log(project);
  return (
    <div className={styles.card}>
      <h1>{project.name}</h1>
      <h4>Stack: {project.stack}</h4>
      <h3>{project.description}</h3>
      <a href={project.link} className={styles.link}>Link to Project</a>
    </div>
  )
}
export default ProjectCard