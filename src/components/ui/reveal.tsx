"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({children,delay=0,className=""}:{children:ReactNode;delay?:number;className?:string}){const reduceMotion=useReducedMotion();return <motion.div className={className} initial={reduceMotion?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduceMotion?0:.55,delay:reduceMotion?0:delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
