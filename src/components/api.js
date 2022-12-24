
export const api = "https://api.jsonbin.io/v3/b/63a69e03dfc68e59d56fcf2c"

let argumentoApi = {
    allArticle: "/allArticle",
    men: "/men",
    women: "/women"
}



export const apiAll=()=>api+argumentoApi.allArticle
export const apiMen=()=>api+argumentoApi.men
export const apiWomen=()=>api+argumentoApi.women