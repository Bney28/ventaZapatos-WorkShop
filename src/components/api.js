
const api = "http://localhost:3000"

let argumentoApi = {
    allArticle: "/allArticle",
    men: "/men",
    women: "/women"
}



export const apiAll=()=>api+argumentoApi.allArticle
export const apiMen=()=>api+argumentoApi.men
export const apiWomen=()=>api+argumentoApi.women