import React from 'react';

import { Typography, useMediaQuery, useTheme } from '@mui/material';
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
    TimelineContent, TimelineDot
} from '@mui/lab';

import './assets/styles/Achievements.scss';


const Achievements = (): React.ReactElement => {
    const theme = useTheme();
    const isMediumOrLargeDevice = useMediaQuery(theme.breakpoints.up('md'));

    const contentList: Array<string> = [
        'A Go-To Guy for Director in current company for any challenging UI Development with tight deadlines.',
        'Developed a Load Balancing Algorithm with Self Healing & automated manual tasks thereby saving revenue for Australian based Top Online Travel Agency.',
        'Led a team of 10+ resources (with only 2 yrs of Experience) in the absence of Team Lead and made successful releases while working for a U.S. based client serving Master Card and American Express.',
        'Star Performer of Team twice for Quality & Timely work during starting years of career while working for U.S. based client serving Master Card and American Express.'
    ];

    const getContent = (): React.ReactElement => {
        return (
            <Timeline position={isMediumOrLargeDevice ? 'alternate' : 'right'}>
                {
                    contentList.map(x => {
                        return (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ fontSize: '1.5rem' }}>
                                    {x}
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        )
    }
    return (
        <div className="mp-row mp-achievements">
            <div className='mp-row mp-align-left'>
                <div className="mp-achievements-heading">
                    <Typography variant="h2" sx={{ fontWeight: 700 }}>
                        Achieve&shy;ments
                    </Typography>
                </div>
            </div>
            <div className='mp-row'>
                <div className='mp-achievements-content'>
                    {getContent()}
                </div>
            </div>
        </div>
    )
}

export default Achievements;