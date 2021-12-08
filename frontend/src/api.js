import axios from "axios";

export default class Api {
    getAllProfiles() {
        return axios.get("http://localhost:3003/users", { crossdomain: true })
    }

    deleteProfile(name) {
        axios.delete(`http://localhost:3003/users/${name}`, { crossdomain: true })
    }

    createProfile(publication) {
        return axios
            .post("http://localhost:3003/users", publication, { crossdomain: true })
    }

    updateProfile(profile) {
        return axios
            .put(`http://localhost:3003/users/${profile.id}`, profile, { crossdomain: true })
    }
}