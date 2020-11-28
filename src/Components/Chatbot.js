import React from "react"
import Chatbot from "react-simple-chatbot"

const CustomChatBot = (props) => {

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
}

export default CustomChatBot