import axios from "axios";
// let baseURL = 'https://adorable-culottes-worm.cyclic.app/';
const baseURL = 'https://glamorous-bee-miniskirt.cyclic.app/user/';
const service = axios.create({ baseURL });
const getApiMethod = async (url) => {
    try {
        const res = await service.get(url);
        return res;
    } catch (error) { return error.message }
};
const postApiMethod = async (url, data) => {
    try {
        const res = await service.post(url, data);
        return res;
    } catch (error) { return error.message }
};
const updateApiMethod = async (url, data) => {
    try {
        const res = await service.put(url, data);
        return res;
    } catch (error) { return error.message }
};
export { getApiMethod, postApiMethod, updateApiMethod };