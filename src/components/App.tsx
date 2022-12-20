import React, { useRef } from "react";
import { PROFILE_INFO } from "../utils/enums";
import './assets/styles/App.scss';

import Header from "./Header";
import About from "./About";
import Achievements from "./Achievements";
import Resume from "./Resume";
import Contact from "./Contact";

const App: React.FC = () => {
    // const scrollToAbout = useRef<null | HTMLDivElement>(null);
    // const scrollToAchievements = useRef(null);
    // const scrollToResume = useRef(null);
    // const scrollToContact = useRef(null);

    // const onNavClick = (e: React.MouseEvent, sectionName: string) => {
    //     console.log('onNavClick', sectionName)
    //     scrollToAbout.current?.scrollIntoView();
    // }

    return (
        <>
            {/* onNavClick={onNavClick} */}
            {/* ref={scrollToAbout} */}
            <Header />
            <About />
            <Achievements />
            <Resume />
            <Contact />
            {/* <Achievements ref={scrollToAchievements} />
            <Resume ref={scrollToResume} />
            <Contact ref={scrollToContact} /> */}
        </>
    )
}

export default App;