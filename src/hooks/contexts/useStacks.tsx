import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { SkillProps } from "../../core/datas/skills";

export const StacksContext = createContext<SkillProps[]>([]);

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const StacksContextProvider = ({ children }: Props) => {
    const [stacks, setStacks] = useState([]);

    const apiConnection = async () => {
        try {
            // const datas = await axios.get("https://127.0.0.1:8001/api");
            // setStacks(datas.data.stacks);
            return;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        apiConnection();
    }, []);

    return (
        <StacksContext.Provider value={stacks}>
            {children}
        </StacksContext.Provider>
    );
};
