import { motion } from "framer-motion"
import "./Loading.css"

export const Loading = ({load}) => {
    return (

        <div className= "container-load">
            <motion.div
            className="box"
            animate={{
                scale: [1, 2, 2, 2, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["10%", "10%", "50%", "50%", "10%"]
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
            />
        </div>
    );
}