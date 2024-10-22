import {useState, useEffect, useRef} from "react";
import {ProjectContextProvider} from "./hooks/contexts/useProjects";
import {ScrollContextProvider} from "./hooks/contexts/useScroll";
import {StacksContextProvider} from "./hooks/contexts/useStacks";
import {RouterProvider} from "react-router-dom";
import {router} from "./core/router.tsx";

export default function App() {
    const [visibility, setVisibility] = useState(false)
    const lastTitle = useRef(document.title)
    /**
     * Change the title of the page when the tab is not visible
     */
    useEffect(() => {
        const handleVisibility = () => {
            document.title = visibility ? lastTitle.current : 'REVIENS !'
            visibility ? setVisibility(false) : setVisibility(true)
        }
        document.addEventListener('visibilitychange', handleVisibility)
        return () => {
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [visibility])


    return (
        <ProjectContextProvider>
            <ScrollContextProvider>
                <StacksContextProvider>
                    <RouterProvider router={router} />
                </StacksContextProvider>
            </ScrollContextProvider>
        </ProjectContextProvider>
    )
}