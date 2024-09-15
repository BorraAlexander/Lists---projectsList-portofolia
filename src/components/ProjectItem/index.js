import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, title, description} = projectDetails

  return (
    <li className="project-item-container">
      <img
        className="project-item-image"
        alt={`project-item ${projectId}`}
        src={imageURL}
      />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
      </div>
    </li>
  )
}
export default ProjectItem
