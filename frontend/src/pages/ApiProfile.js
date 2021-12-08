import axios from "axios";

export default class ApiProfile {
    getAllProfiles() {
        return axios.get("http://localhost:3003/Profiles", { crossdomain: true })
    }

    deleteProfile(name) {
        axios.delete(`http://localhost:3003/Profiles/${name}`, { crossdomain: true })
    }

    createProfile(profile) {
        return axios.post("http://localhost:3003/Profiles", profile, { crossdomain: true })
    }

    updateProfile(profile) {
        return axios.put(`http://localhost:3003/Profiles/${profile.lastName}`, profile, { crossdomain: true })
    }
}