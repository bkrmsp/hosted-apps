import { Typography } from "@mui/material";
import React, { ReactElement, useRef } from "react";
import './assets/styles/About.scss';

// interface Props {
//     children: any,
//     ref: any,
//     $$typeof: symbol
// }
//<{ ref: any }>
const About: React.FC = (props) => {  //React.ForwardRefExoticComponent<Props> = (props) => {
    // const ref = useRef<null | HTMLDivElement>(props.ref);
    // console.log(props.ref)
    const contentList: Array<string> = [
        'I.T. Professional with 9+ yrs of work experience.',
        'Experience with Startups to Corporate MNCs in both Product & Services.',
        'Worked with U.S., Australian and Indian client(s).',
        'Insurance, Healthcare, Retail, Travel, Finance & Banking Domain Experience.'
    ];

    const getContent = (): ReactElement => {
        return (
            <ul>
                {
                    contentList.map(x => {
                        return (
                            <li>
                                <Typography sx={{ fontSize: '1.5rem' }}>
                                    {x}
                                </Typography>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };

    return (
        // ref={props.ref}
        <div className="mp-row mp-about" >
            <div>
                <div className="mp-row mp-about-content">
                    <div className="mp-about-description">
                        <Typography variant="h2" sx={{ fontWeight: 700, marginLeft: '1rem' }}>
                            UI Developer
                        </Typography>
                        {/* <div className="mp-about-desc-header">
                        UI Developer
                    </div> */}
                        <div className="mp-about-desc-content">
                            {getContent()}
                        </div>
                    </div>
                    <div className="mp-profile-pic">
                        <img src={`${window.APP_CONFIG.PROFILE_PIC_URL}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;