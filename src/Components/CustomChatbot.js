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
        message: "Hi {previousValue}, how can I help you today? Please click on what you want to do.",
        trigger: "Display options"
    },
    {
        id: "Display options",
        options: [
            {

            }
        ]
    }
]

const CustomChatBot = () => (
    <ThemeProvider theme={theme}>
        <Chatbot steps={steps} />
    </ThemeProvider>
)

export default CustomChatBot