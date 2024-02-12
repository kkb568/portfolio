import { useParams } from "react-router-dom"
import { projects } from "../data";
import { useEffect, useState } from "react";
import './ProjectDetails.scss'

export default function ProjectDetails() {
    const [projectObject, setProjectObject] = useState({
        name: "",
        imageUrl: "",
        details: "",
        siteUrl: ""
    });
    const { id } = useParams();

    useEffect(() => {
        projects.filter(project => project.id == id).map((filteredProject) => {
            setProjectObject(prevState => {
                return {
                    ...prevState,
                    name: filteredProject.name,
                    imageUrl: filteredProject.imageUrl,
                    details: filteredProject.details,
                    siteUrl: filteredProject.siteUrl
                }
            })
        })
    }, [])

    return (
        <div className="projectDetails">
            <img src={projectObject.imageUrl}/>
            <div className="details">
                <h3>{projectObject.name}</h3>
                <p>{projectObject.details}</p>
                <p>You can check the project site <a href={projectObject.siteUrl}>here</a></p>
            </div>
        </div>
    )
}