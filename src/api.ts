import axios from "axios"
import sendgrid from '@sendgrid/mail';
import {feedbackEmailTemplate, partnerEmailTemplate} from "@/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const subscribe = async (email: string) => {
    try {
        const res = await axios.post(
            `${BASE_URL}/api/mailing/subscribe`,
            {
                email,
            })
        return res
    } catch (err: any) {
        if (err.response)
            return err.response.data
    }
}

export const getCertificate = async (payload: any) => {
    if (BASE_URL) {
        try {
            const res = await axios.get(`${BASE_URL}/api/certificate?name=${payload.name}&program=${payload.programme}&year=${payload.year}`)
            return res
        } catch (err: any) {
            if (err.response)
                return err.response.data
        }
    }
}
export const getYears= async () => {
    if (BASE_URL) {
        try {
            const res = await axios.get(`${BASE_URL}/api/years`)
            return res.data
        } catch (err: any) {
            if (err.response)
                return err.response.data
        }
    }
}
export const getProgrammes= async () => {
    if (BASE_URL) {
        try {
            const res = await axios.get(`${BASE_URL}/api/programs`)
            return res.data
        } catch (err: any) {
            if (err.response)
                return err.response.data
        }
    }
}
export const createPartner = async (payload: any) => {
    if (BASE_URL) {
        try {
            const res = await axios({
                method: "post",
                data: payload,
                url: `${BASE_URL}/api/partner`,
            })
            return res
        } catch (err: any) {
            if (err.response)
                return err.response.data
        }
    }
}

export const sendFeedback = async (payload: { email: string, message: string }) => {
    const API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    const TO_EMAIL = process.env.NEXT_PUBLIC_TO_EMAIL
    if (API_KEY && TO_EMAIL) {
        sendgrid.setApiKey(API_KEY);
        const msg = {
            to: TO_EMAIL,
            from: 'info@mail.cchubnigeria.com',
            subject: `You've got a feedback from ${payload.email}`,
            text: payload.message,
            html: feedbackEmailTemplate(payload)
        };
        try {
            const res = await sendgrid.send(msg);
            console.log('RESPONSE', res)
            return res
        } catch (error: any) {
            console.error("ERROR", error);
            if (error.response) {
                console.error(error.response.body)
            }
        }
    }
}

export const sendPartnerMail = async (payload: { fullName: string, organization: string, proposal: string, email: string, file: File | undefined }) => {
    const API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    const TO_EMAIL = process.env.NEXT_PUBLIC_TO_EMAIL

    if (API_KEY && TO_EMAIL) {
        console.log("API key and to email", API_KEY && TO_EMAIL)
        let msg;
        if (payload.file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(payload.file);
            console.log(reader.result);
            const fileBase64 = reader.result
            reader.onload = async function () {
                sendgrid.setApiKey(API_KEY);
                msg = {
                    to: TO_EMAIL,
                    from: 'info@mail.cchubnigeria.com',
                    subject: `You've got a feedback from ${payload.email}`,
                    text: payload.proposal,
                    html: partnerEmailTemplate({
                        fullName: payload.fullName,
                        organization: payload.organization,
                        email: payload.email,
                        proposal: payload.proposal
                    }),
                    attachments: [
                        {
                            filename: payload?.file?.name ? payload.file.name : 'Proposal Attachment',
                            content: fileBase64,
                            type: payload?.file?.name ? payload.file.name : 'application/pdf',
                            disposition: 'attachment'
                        }
                    ]
                };
            }
            msg = {
                to: TO_EMAIL,
                from: 'info@mail.cchubnigeria.com',
                subject: `You've got a feedback from ${payload.email}`,
                text: payload.proposal,
                html: partnerEmailTemplate({
                    fullName: payload.fullName,
                    organization: payload.organization,
                    email: payload.email,
                    proposal: payload.proposal
                }),
            }
            try {
                const res = await sendgrid.send(msg);
                console.log('RESPONSE', res)
                return res
            } catch (error: any) {
                console.error("ERROR", error);
                if (error.response) {
                    console.error(error.response.body)
                }
            }
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }

    }
}
