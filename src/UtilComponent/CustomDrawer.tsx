import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { JsxFragment } from 'typescript';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { IconButton } from '@mui/material';
type Anchor = 'top' | 'left' | 'bottom' | 'right';



interface Props {
    isOpen: boolean,

    onClose: () => void
    children: React.ReactNode
}

export default function CustomDrawer({ isOpen, children, onClose }: Props) {




    const handleOpen = () => {


    }

    const handleClose = () => {


    }

    return (
        <div>


            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}

            <SwipeableDrawer
                sx={{
                    position: 'relative',

                }}

                BackdropProps={{
                    onClick: handleClose,
                }}
                allowSwipeInChildren={true}
                anchor="top"
                open={isOpen}
                onOpen={onClose}
                onClose={handleClose}

            >
                {children}


                <Box sx={{
                    display: "inline-block", position: 'absolute',

                    left: "50%",
                    transform: "translateX(-50%)",

                    bottom: "0px",


                }}>

                    <IconButton aria-label="fingerprint" color="secondary"

                        onClick={
                            onClose
                        }
                    >

                        <KeyboardDoubleArrowUpIcon
                            sx={{
                                color: "red",
                                zIndex: 3,
                                fontSize: "50px",
                                backgroundColor: "secondary"

                            }}
                        >


                        </KeyboardDoubleArrowUpIcon>
                    </IconButton>


                </Box>
            </SwipeableDrawer>


        </div >
    );
}