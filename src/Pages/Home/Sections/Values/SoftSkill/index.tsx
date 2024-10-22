import {SoftSkillsInterface} from "../../../../../core/datas/softSkills.ts";
import './styles.css'
import {Dispatch, SetStateAction} from "react";
export default function SoftSkill({softSkill, onClick}: SoftSkillProps) {
    return (
        <div
            className={'softSkillBubble'}
            style={{
                background: softSkill.color
            }}
            onClick={() => onClick(softSkill)}
        >
            <h4>{softSkill.title}</h4>
        </div>
    )
}

interface SoftSkillProps {
    softSkill: SoftSkillsInterface,
    onClick: Dispatch<SetStateAction<SoftSkillsInterface>>
}