import axios from "axios";

export default axios.create({
    baseURL: 'https://overone-9de00-default-rtdb.europe-west1.firebasedatabase.app/'
})