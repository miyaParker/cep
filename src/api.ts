import axios, {AxiosError} from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getCertificate = async (payload: any) => {
    if (BASE_URL) {
        try {
            const res = await axios({
                method: "get",
                url: `${BASE_URL}/certificate?name=${payload.name}&program=${payload.programme}&year=${payload.year}`
            })
            return res
        } catch (err: any) {
            if (err.response)
                return err.response.data
        }
    }
}
