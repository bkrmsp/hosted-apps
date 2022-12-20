import React from 'react';

import { Button, Typography } from '@mui/material';
import DownloadSharp from '@mui/icons-material/DownloadSharp';

import './assets/styles/Resume.scss';

const Resume: React.FC = (): React.ReactElement => {
    const contentList: Array<string> = [
        'Besides an individual contributor, I am a team player who helps and supports his peers / subordinates and remove the blockers w.r.t their tasks.',
        'My focus is customer experience, quality work and timely delivery, which is why, i pay attention to low level details during analysis and avoid rework as much as possible along with checking for feasibility and complexities.',
        'For betterment of community, I mentor junior engineers and publish articles on development community portals.',
        'And last but not the least, i continuously work on improving self by learning new technologies and revising concepts time-to-time.'
    ];

    const getContent = (): React.ReactElement => {
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

    const onDownloadResumeClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        let downloadLink = document.createElement('a');
        downloadLink.href = window.APP_CONFIG.CV_URL;
        downloadLink.download = 'Bikram Singh Patel_CV.pdf';
        downloadLink.dispatchEvent(new MouseEvent('click'));
    }

    return (
        <div className="mp-row mp-resume">
            <div className='mp-row mp-align-right'>
                <div className='mp-resume-heading'>
                    <Typography variant="h2" sx={{ fontWeight: 700 }}>
                        Why hire me?
                    </Typography>
                </div>
            </div>
            <div className='mp-row'>
                <div className="mp-resume-content">
                    {getContent()}
                </div>
            </div>
            <div className='mp-row mp-align-center'>
                <div className='mp-resume-download'>
                    <Button variant="contained" endIcon={<DownloadSharp />} sx={{ color: 'var(--mp-content-color)', fontSize: '1.15rem' }} onClick={onDownloadResumeClick}>
                        Résumé
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Resume;