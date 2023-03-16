import {request} from "./index";

export const getLoginPrKey = () => request.get('/login/qr/key')