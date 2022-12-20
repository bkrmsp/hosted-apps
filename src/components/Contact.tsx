import React, { useState } from 'react';

import { ButtonGroup, Button, Popover, Tooltip, Typography, Alert, Snackbar } from '@mui/material';
import {
    Mail as MailIcon, LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon, WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

import { CONTACT_OPTIONS } from '../utils/enums';
import './assets/styles/Contact.scss';


const Contact: React.FC = (): React.ReactElement => {
    const [selectedOption, setSelectedOption] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [isCopyClicked, setIsCopyClicked] = useState(false);

    const onIconClick = (e: React.MouseEvent<HTMLDivElement>, optionType: string) => {
        setAnchorEl(e.currentTarget)
        setSelectedOption(optionType);
        setOpenDialog(true);
    }

    const getDialogContent = (): React.ReactElement => {
        const getOpenButtonText = () => {
            let buttonText: string = 'Open Profile';
            switch (selectedOption) {
                case CONTACT_OPTIONS.CALL:
                    buttonText = 'Call';
                    break;
                case CONTACT_OPTIONS.EMAIL:
                    buttonText = 'Send Email';
                    break;
                default:
                    break;
            }

            return buttonText;
        }

        return (
            <>
                <Button key="1" onClick={onCopyButtonClick}>Copy</Button>
                <Button key="2" onClick={onOpenButtonClick}>
                    {getOpenButtonText()}
                </Button>
            </>

        )
    }

    const onCopyButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        let value: string = '';
        switch (selectedOption) {
            case CONTACT_OPTIONS.CALL:
                value = window.APP_CONFIG.PHONE_NUMBER;
                break;

            case CONTACT_OPTIONS.EMAIL:
                value = window.APP_CONFIG.EMAIL_ADDRESS;
                break;

            case CONTACT_OPTIONS.GITHUB:
                value = window.APP_CONFIG.GITHUB_PROFILE_URL;
                break;

            case CONTACT_OPTIONS.LINKED_IN:
                value = window.APP_CONFIG.LINKEDIN_PROFILE_URL;
                break;

            case CONTACT_OPTIONS.DEV_COMMUNITY:
                value = window.APP_CONFIG.DEV_COMMUNITY_PROFILE_URL;
                break;

            case CONTACT_OPTIONS.MEDIUM:
                value = window.APP_CONFIG.MEDIUM_PROFILE_URL;
                break;
        }

        let textField: HTMLInputElement = document.createElement('input');
        textField.type = 'text';
        textField.value = value;

        textField.select();
        textField.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textField.value);
        setIsCopyClicked(true);
    }

    const onOpenButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        switch (selectedOption) {
            case CONTACT_OPTIONS.CALL:
                window.open(`tel://${window.APP_CONFIG.PHONE_NUMBER}`);
                break;
            case CONTACT_OPTIONS.EMAIL:
                window.open(`mailto:${window.APP_CONFIG.EMAIL_ADDRESS}`);
                break;
            case CONTACT_OPTIONS.GITHUB:
                window.open(window.APP_CONFIG.GITHUB_PROFILE_URL, '_blank');
                break;
            case CONTACT_OPTIONS.LINKED_IN:
                window.open(window.APP_CONFIG.LINKEDIN_PROFILE_URL, '_blank');
                break;
            case CONTACT_OPTIONS.DEV_COMMUNITY:
                window.open(window.APP_CONFIG.DEV_COMMUNITY_PROFILE_URL, '_blank');
                break;
            case CONTACT_OPTIONS.MEDIUM:
                window.open(window.APP_CONFIG.MEDIUM_PROFILE_URL, '_blank');
                break;
        }
    }

    return (
        <div className="mp-row mp-contact">
            <div className="mp-row">
                <div className='mp-contact-heading'>
                    <Typography variant="h2" sx={{ fontWeight: 700 }}>
                        Contact
                    </Typography>
                </div>
            </div>
            <div className="mp-row">
                <div className='mp-row mp-contact-content'>
                    {/* onDoubleClick={(e) => onIconClick(e, 'CALL')} */}
                    <div className='mp-contact-icon' onClick={(e) => onIconClick(e, CONTACT_OPTIONS.CALL)}>
                        <Tooltip title="Phone No.">
                            <WhatsAppIcon className='mp-whatsapp-icon' sx={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%'
                            }} />
                        </Tooltip>
                    </div>
                    <div className='mp-contact-icon mp-contact-circle-icon mp-mail-icon mp-gmail-icon'
                        onClick={(e) => onIconClick(e, CONTACT_OPTIONS.EMAIL)}>
                        <Tooltip title="Email ID">
                            <MailIcon />
                        </Tooltip>
                    </div>
                    <div className='mp-contact-icon mp-contact-box-icon'
                        onClick={(e) => onIconClick(e, CONTACT_OPTIONS.LINKED_IN)}>
                        <Tooltip title="LinkedIn">
                            <LinkedInIcon className='mp-linkedin-icon' sx={{
                                width: '2rem',
                                height: '2rem'
                            }} />
                        </Tooltip>
                    </div>
                    <div className='mp-contact-icon'
                        onClick={(e) => onIconClick(e, CONTACT_OPTIONS.GITHUB)}>
                        <Tooltip title="Github">
                            <GitHubIcon sx={{
                                width: '2.5rem',
                                height: '2.5rem'
                            }} />
                        </Tooltip>
                    </div>
                    <div className='mp-contact-icon mp-contact-rect-icon'
                        onClick={(e) => onIconClick(e, CONTACT_OPTIONS.DEV_COMMUNITY)}>
                        <Tooltip title='Dev Community'>
                            <img className='mp-dev-icon' src={window.APP_CONFIG.DEV_COMMUNITY_ICON_URL} />
                        </Tooltip>
                    </div>
                    <div className='mp-contact-icon mp-contact-rect-icon'
                        onClick={(e) => onIconClick(e, CONTACT_OPTIONS.MEDIUM)}>
                        <Tooltip title='Medium'>
                            <img className='mp-medium-icon' src={window.APP_CONFIG.MEDIUM_ICON_URL} />
                        </Tooltip>
                    </div>
                </div>
            </div>
            {
                openDialog && <Popover open={true} anchorEl={anchorEl}
                    onClose={() => setOpenDialog(false)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <ButtonGroup orientation="vertical" variant="contained">
                        {getDialogContent()}
                    </ButtonGroup>
                </Popover>
            }
            {/* <Alert severity="success">Success</Alert> */}
            <Snackbar open={isCopyClicked} autoHideDuration={2000}
                onClose={() => setIsCopyClicked(false)}
                message="Copied!"
            />
        </div>
    )
}

export default Contact;