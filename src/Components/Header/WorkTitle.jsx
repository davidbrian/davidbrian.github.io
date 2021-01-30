import React, { useEffect, useState } from "react"
import { animated, useTransition } from "react-spring";

const workTitles = [
    "Web developer.",
    "UX designer.",
    "UI designer.",
    "Software Engineer.",
];

const WorkTitle = () => {
    const [index, setIndex] = useState(0);

    const transitions = useTransition(workTitles[index], null, {
        config: { friction: 20, tension: 400, mass: 1 },
        from: { opacity: 0, transform: "translate(-40px, 12px)", position: 'absolute' },
        enter: { opacity: 1, transform: "translate(0px, 12px)", position: 'static' },
        leave: { opacity: 0, transform: "translate(40px, 12px)", position: 'absolute' },
    })
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 4), 1750), [])
    return transitions.map(({ item, props, key }) =>
        <animated.span key={key} style={{ overflow: "hidden", display: "inline-block", ...props }}> {item}</animated.span >
    )
}

export default WorkTitle
