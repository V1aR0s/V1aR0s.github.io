
export interface User {
    id: number
    name: string
    age: number
   
}

export interface Task{
    id:string
    text: string
    isComplited:boolean
    addDate?: Date
}