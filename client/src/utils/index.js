import { surpriseMePrompts } from "../constants";
export const getRandomPrompt = (prompt) => {
    const random= Math.floor(Math.random() * surpriseMePrompts.length)
    console.log(surpriseMePrompts[random] , "randomprompt")

    if(surpriseMePrompts[random] === prompt) return getRandomPrompt(prompt)
    return surpriseMePrompts[random]
 
}
