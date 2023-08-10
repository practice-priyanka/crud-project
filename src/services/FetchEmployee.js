import axios from "axios";

export  async function getEmployees() {
    try {
        let res = await axios.get("https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud")
        return res.data
    } catch (err) {
        console.log("Error fetch", err)
    }
}
export async function updateEmployee(id, date, skill, status) {
    try {
        let res = await axios.put(`https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud/${id}`, {
            date: date,
            skill: skill,
            status: status
        })
        return res.data;
    } catch (err) {
        console.log("Error fetch", err)
    }
}

export async function deleteEmployee(id) {
    try {
        let res = await axios.delete(`https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud/${id}`)
        return res.data;
    } catch (err) {
        console.log("Error fetch", err)
    }
}





