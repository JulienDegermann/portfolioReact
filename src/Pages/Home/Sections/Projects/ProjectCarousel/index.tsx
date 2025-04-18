import {useContext, useMemo, useState} from "react"
import {ProjectContext} from "../../../../../hooks/contexts/useProjects.tsx"
import ProjectCard from "./ProjectCard"
import {Colors} from "../../../../../core/styles/colors.ts"
import Link from "../../../../../components/Link.tsx"
import {ProjectProps} from "../../../../../components/Cards/Card.tsx"


export default function ProjectCarousel() {

    const [hovered, setHovered] = useState(false)

    const projects: ProjectProps[] = useContext(ProjectContext)

    const loadingProject: ProjectProps = useMemo(() => {
        return (projects[0])
    }, [projects])

    const [showProject, setShowProject] = useState<ProjectProps>({})

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '1000px',
                margin: 'auto',
                height: '400px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <iframe src={showProject?.url ? showProject.url : loadingProject?.url} width="100%"
                        height="100%"></iframe>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        transition: 'all .5s',
                        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
                        background: 'rgba(0, 0, 0, .75)',
                        width: '100%',
                        padding: '1rem',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'inline-block',
                            maxWidth: '75%',
                        }}
                    >
                        <h2>
                            {showProject?.title ? showProject.title : loadingProject?.title ? loadingProject.title : 'Titre du projet'}
                        </h2>
                        <p>{showProject?.need ? showProject.need : loadingProject?.need ? loadingProject.need : 'Besoins du projet'}</p>

                    </div>

                    <Link
                        color={Colors.PRIMARY}
                        text="Voir le projet"
                        link={showProject.url ? showProject.url : loadingProject?.url ? loadingProject.url : 'https://www.google.com'}
                    />

                </div>
            </div>
            <div
                style={{
                    flexDirection: 'column',
                    width: 'max-content',
                    height: 'max-content%',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    minWidth: '100px',
                }}
            >
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                project={project}
                                key={index}
                                selector={setShowProject}
                                selected={showProject === project ? true : false}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

// export interface ProjectProps {
//     title?: string
//     need?: string
//     description?: string
//     action?: string
//     link?: string
//     images?: string[]
//     industry?: string
//     stack?: string[]
//     createdAt?: string
//     updatedAt?: string,
//     stacks?: string[]
// }