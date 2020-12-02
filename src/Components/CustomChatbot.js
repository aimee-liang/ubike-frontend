import React from "react"
import {ThemeProvider} from 'styled-components'
import Chatbot from "react-simple-chatbot"

const theme={
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#390099',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#390099',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
}

const steps = [
    {
        id: "Greet",
        message: "Welcome to ubike!",
        trigger: "Ask name"
    },
    {
        id: "Ask name",
        message: "May I have your name?",
        trigger: "Waiting for user input for name"
    },
    {
        id: "Waiting for user input for name",
        user: true,
        trigger: "Ask help"
    },
    {
        id: "Ask help",
        message: "Hi {previousValue}, how can I help you today? ",
        trigger: "Display options"
    },
    {
        id: "Display options",
        options: [
            {
                value: "NYPD",
                label: "Report an incident to NYPD",
                trigger: "Report to NYPD"
            },
            {
                value: "DoT",
                label: "Report an incident to DoT",
                trigger: "Report to DoT"
            },
            {
                value: "Report",
                label: "Report a comment",
                trigger: "What's the report for?"
            }
        ]
    },
    {
        id: "Report to NYPD",
        message: "If this is a life threatening emergency, please exit this app and call 911.",
        trigger: "What's your emergency?"
    },
    {
        id: "What's your emergency?",
        message: "Before we alert the NYPD, please provide additional information about this incident.",
        trigger: "Waiting for user incident input"
    },
    {
        id: "Waiting for user incident input",
        user: true,
        trigger: "NYPD Thanks"
    },
    {
        id: "NYPD Thanks",
        message: "Thank you for reporting this issue. We've sent an alert to the NYPD. Please hold while we connect you.",
        trigger: "Anything else?"
    },
    {
        id: "Report to DoT",
        message: "Before we alert the DoT, can you provide any additional information about this bike shelter?",
        trigger: "Waiting for user input for DoT"
    },
    {
        id: "Waiting for user input for DoT",
        user: true,
        trigger: "Thank for input"
    },
    {
        id: "Thank for input",
        message: "Thank you for reporting this issue. We've sent an alert to the DoT.",
        trigger: "Anything else?"
    },
    {
        id: "What's the report for?",
        message: "Thank you for flagging a comment. Which comment are you reporting?",
        trigger: "Wait for user to confirm"
    }, 
    {
        id: "Wait for user to confirm",
        user: true,
        trigger: "Looking into it"
    },
    {
        id: "Looking into it",
        message: "Thanks! Our team is looking into this matter.",
        trigger: "Anything else?"
    },
    {
        id: "Anything else?",
        message: "Is there anything else you'd like to do today?",
        trigger: "Display last options"
    },
    {
        id: "Display last options",
        options: [
            {
                value: "Yes",
                label: "Yes",
                trigger: "Not built!"
            },
            {
                value: "No",
                label: "No",
                trigger: "Goodbye"
            }
        ]
    },
    {
        id: "Not built!",
        message: "Unfortunately we haven't built more functionalities to ubike at this time. We will continue to optimize this app though.",
        trigger: "Goodbye"
    },
    {
        id: "Goodbye",
        message: "We hope you enjoyed using our app! Please check out my Github @aimee-liang for more projects, and ride safe.",
        end: true
    }
]

const CustomChatBot = (props) => (
    <>
        <ThemeProvider theme={theme}>
            <Chatbot steps={steps} className="chatbot" />
        </ThemeProvider>
    </>
)

export default CustomChatBot