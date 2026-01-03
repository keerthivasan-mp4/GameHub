import axios  from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"409c079a7ee14f77aacea0d98724fab1"
    }
})