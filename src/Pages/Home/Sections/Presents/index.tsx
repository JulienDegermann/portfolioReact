import Section from "../../../../components/Section";
import Back from "../../../../assets/images/back.webp";
import Front from "../../../../assets/images/front.webp";
import "./styles.css";
import Button from "../../../../components/Button/index.tsx";
import { useEffect, useState } from "react";

// import {Colors} from "../../../../core/styles/colors.ts";
// import NavBar from "./NavBar";

export default function Presents() {
    const [maxWidth, setMaxWidth] = useState<number>();
    const [isDragging, setIsDragging] = useState(false);
    const [event, setEvent] = useState("");

    const mailTo = () => {
        window.open("mailto:julien.degermann@gmail.com", "_blank");
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        setMaxWidth(e.clientX);

        if (e instanceof MouseEvent) {
        } else {
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        setMaxWidth(e.touches[0].clientX);
    };

    const handleMouseUp = (e: MouseEvent | TouchEvent) => {
        setIsDragging(false);
        setEvent(e.type);
        document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseDown = (e: MouseEvent) => {
        setEvent(e.type);
        setIsDragging(true);
        if (e.type === "mousedown") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        if (isDragging) {
            if (event === "touchstart") {
                document.addEventListener("touchmove", onTouchMove);
                document.addEventListener("touchend", handleMouseUp);
            } else {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            }
        }

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [isDragging]);

    return (
        <Section id="presents" hero={true}>
            <div id="sliderWrapper">
                <div
                    id="heroTitle"
                    className="container"
                    onMouseDown={ () => onMouseDown}
                    onTouchStart={() => onMouseDown}
                    style={{
                        left: maxWidth ? maxWidth + "px" : "50%",
                        cursor: isDragging ? "grabbing" : "grab",
                    }}
                >
                    <h2>
                        Besoin de renforcer <br />
                        <span>votre équipe ?</span>
                    </h2>
                    <Button
                        id={"contact"}
                        text={"contactez-moi"}
                        className={"cta"}
                        onClick={() => mailTo()}
                    />
                </div>
                <div
                    id="left"
                    className="slider"
                    style={{
                        maxWidth: maxWidth ? maxWidth + "px" : "100%",
                    }}
                >
                    <img src={Back} alt="photo de julien degermann" />
                    <h2>Backend</h2> <br />
                    <p>#Symfony #Laravel #Wordpress</p>
                </div>
                <div id="middle"></div>
                <div
                    id="right"
                    className="slider"
                    style={{
                        maxWidth: maxWidth
                            ? "calc(100% - " + maxWidth + "px"
                            : "100%",
                    }}
                >
                    <img src={Front} alt="photo de julien degermann" />
                    <h2>Frontend</h2> <br />
                    <p>#React #Bootstrap</p>
                </div>
            </div>
        </Section>
    );
}
