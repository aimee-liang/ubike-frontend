import React from "react"
import {ThemeProvider} from 'styled-components'
import Chatbot from "react-simple-chatbot"

const theme={
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
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
        trigger: "Goodbye"
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
        trigger: "Goodbye"
    },
    {
        id: "Goodbye",
        message: "We hope you enjoyed using our app! Please check out my Github @aimee-liang for more projects, and ride safe.",
        end: true
    }
]

const CustomChatBot = () => (
    <ThemeProvider theme={theme}>
        <Chatbot steps={steps} />
    </ThemeProvider>
)

export default CustomChatBot