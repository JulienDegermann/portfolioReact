// dependencies
import {Colors} from "../../../../core/styles/colors.ts";
import {softSkills, SoftSkillsInterface} from "../../../../core/datas/softSkills.ts";
import {useState} from "react";

// components
import Section from "../../../../components/Section";
import SoftSkill from "./SoftSkill";

import './styles.css'

export default function Values() {
    const [detailSoftSkill, setDetailSoftSkill] = useState<SoftSkillsInterface>(softSkills[0]);

    return (
        <Section id="skills" title='Mes softskills' large={true}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    color: Colors.DARK,
                    height: '400px',
                }}
            >
                <div className={'skillBubbleWrapper'}>

                    {softSkills.map((softSkill, index) =>
                        <SoftSkill
                            softSkill={softSkill}
                            key={index}
                            onClick={() => {
                                    setDetailSoftSkill(softSkill)
                            }}
                        />
                    )}
                </div>
                <div className={'bubbleDetail'}>
                    <h4 className={"sectionTitle"}>{detailSoftSkill.title}</h4>
                    <p>{detailSoftSkill.description}</p>
                </div>


            </div>
        </Section>
    )
}