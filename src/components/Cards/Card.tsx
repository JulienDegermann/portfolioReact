import { useState } from "react";
import { Colors } from "../../core/styles/colors";

export default function Card({ children, title, image }: CardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                flex: hovered ? 2 : 1,
                height: "100%",
                border: hovered
                    ? `8px solid ${Colors.LIGHT}`
                    : `2px solid ${Colors.LIGHT}`,
                lineHeight: "2",
                transition: "all .25s",
                background: `url("/src/assets/images/${image}") no-repeat center center`,
                backgroundSize: "cover",
                position: "relative",
                overflow: "hidden",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                style={{
                    background: Colors.LIGHT,
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    transition: "all .5s",
                    transform: hovered ? "translateY(0)" : "translateY(100%)",
                }}
            >
                <h3
                    style={{
                        color: Colors.PRIMARY,
                        background: Colors.DARK,
                        padding: ".25rem 4rem",
                    }}
                >
                    {title}
                </h3>

                <div
                    style={{
                        transition: "all .5s",
                        color: Colors.DARK,
                        padding: "1rem",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export interface ProjectProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    stacks?: string[];
    need?: string;
    action?: string;
    link?: string;
    industry?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface CardProps {
    children: React.ReactNode;
    title: string;
    image?: string;
}
