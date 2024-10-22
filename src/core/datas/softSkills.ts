import {Colors} from "../styles/colors.ts";

export const softSkills: SoftSkillsInterface[] = [
    {
        title: "Esprit d'équipe",
        description: "On avance plus vite et plus loin ensemble.\n" +
            "Que ce soit dans des groupes d'entraide (comme Discord) ou au sein d'une équipe, c'est en partageant nos expériences que chacun, et le groupe, progresse.",
        image: "team.jpeg",
        color: Colors.PRIMARY
    },
    {
        title: "Sens du détail",
        description: "Pour qu'une application soit adaptée, chaque détail compte.",
        image: "detail.jpeg",
        color: Colors.SECONDARY
    },{
        title: "Esprit d'innovation",
        description: "Le monde de l'IT évolue rapidement. Il faut sans cesse être à la recherche d'innovation pour proposer des applications pertinentes et performantes.",
        image: "innovation.jpeg",
        color: Colors.LIGHT
    },
]

export interface SoftSkillsInterface {
    title: string,
    description: string,
    image: string,
    color: string
}