import { request } from "./index";
import type { AxiosPromise } from "axios";

// 获取二维码登录的key
export const getLoginPrKey = () => request.get("/login/qr/key");

// 获取轮播图
/*
 * type:资源类型,对应以下类型,默认为 0 即 PC
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 * */
interface Banners$1Type {
  imageUrl?: string;
  targetId?: number;
  adid?: null;
  targetType?: number;
  titleColor?: string;
  typeTitle?: string;
  url?: null;
  exclusive?: boolean;
  monitorImpress?: null;
  monitorClick?: null;
  monitorType?: null;
  monitorImpressList?: null;
  monitorClickList?: null;
  monitorBlackList?: null;
  extMonitor?: null;
  extMonitorInfo?: null;
  adSource?: null;
  adLocation?: null;
  adDispatchJson?: null;
  encodeId?: string;
  program?: null;
  event?: null;
  video?: null;
  song?: null;
  scm?: string;
  bannerBizType?: string;
}
type getBannerType = {
  banners: Array<Banners$1Type>;
  code: number;
};
export const getBanner = (data: 0 | 1 | 2 | 3 = 0): AxiosPromise<getBannerType> => request.get(`/banner?type=${data}`);

// 获取推荐歌单
interface Recommend$1Type {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}
type getRecommendType = {
  hasTaste: boolean;
  code: number;
  category: number;
  result: Array<Recommend$1Type>;
};
export const getRecommend = (data: number = 1): AxiosPromise<getRecommendType> => request.get(`/personalized?limit=${data}`);

//获取新碟
/*
 * limit : 返回数量 , 默认为 30
 * area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * */
interface Artists$1Type {
  img1v1Id: number;
  topicPerson: number;
  trans: string;
  alias: Array<any>;
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  name: string;
  id: number;
  img1v1Id_str: string;
}
interface Artist$2Type {
  img1v1Id: number;
  topicPerson: number;
  trans: string;
  alias: Array<any>;
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}
interface Albums$3Type {
  songs: Array<any>;
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags: null;
  companyId: number;
  blurPicUrl: string;
  pic: number;
  alias: Array<any>;
  artists: Array<Artists$1Type>;
  picId: number;
  copyrightId: number;
  artist: Artist$2Type;
  company: string;
  briefDesc: string;
  publishTime: number;
  picUrl: string;
  commentThreadId: string;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}

type AlbumNewType = {
  total: number;
  albums: Array<Albums$3Type>;
  code: number;
};
export const getAlbumNew = (limit: number, area: string = "ZH"): AxiosPromise<AlbumNewType> => request.get(`/album/new?area=${area}&limit=${limit}`);
