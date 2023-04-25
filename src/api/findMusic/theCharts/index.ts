import { request } from "../../index";
import type { AxiosPromise } from "axios";

//获取榜单
export const getAllRankings = () => request.get(`/toplist`);

//获取歌单详情
/*
 * 必选参数：id：歌单id
 * 可选参数：s：歌单最近的 s 个收藏者,默认为 8
 * */
export const getSingingListDetails = (id: string | number, s?: string | number) => request.get(`/playlist/detail?id=${id}`);
