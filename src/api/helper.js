import axios from 'axios'

const ERR_OK = 0;
export function get(url) {
    return function (params) {
        return axios.get(url, {
                params
            })
            .then(res => {
                let {
                    errno,
                    data
                } = res.data;
                if (errno === ERR_OK) return data;
            })
            .catch(err => console.log(`请求失败${err}`))
    }
}
