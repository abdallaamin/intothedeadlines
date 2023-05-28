import React from 'react'
import { motion } from "framer-motion";
///


const ScrollAnimation = () => {
    return (
        <div style={{
            bottom: '10px', position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',
        }}>
            <div style={{ width: '35px', height: '64px', borderRadius: '3rem', borderWidth: '5px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '0.5rem', backgroundColor: '#ebebeb' }}>
                <motion.div
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', marginBottom: '0.25rem', backgroundColor: '#707070' }}
                />
            </div>
        </div>
    )
}

export default ScrollAnimation