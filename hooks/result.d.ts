export interface Root {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

export interface Url {
  type: string;
  template: string;
}

export interface Queries {
  request: Request[];
  nextPage: NextPage[];
}

export interface Request {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface NextPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface Context {
  title: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export interface Pagemap {
  cse_thumbnail?: CseThumbnail[];
  metatags: Metatag[];
  cse_image?: CseImage[];
  VideoObject?: VideoObject[];
  BreadcrumbList?: BreadcrumbList[];
  imageobject?: Imageobject[];
  person?: Person[];
  videoobject?: Videoobject[];
  WebPage?: WebPage[];
}

export interface CseThumbnail {
  src: string;
  width: string;
  height: string;
}

export interface Metatag {
  referrer?: string;
  "og:image"?: string;
  "og:type"?: string;
  "og:title"?: string;
  "twitter:app:url:iphone"?: string;
  "twitter:app:id:googleplay"?: string;
  "theme-color"?: string;
  "og:image:width"?: string;
  "twitter:card"?: string;
  "og:site_name"?: string;
  "twitter:url"?: string;
  "twitter:app:url:ipad"?: string;
  "al:android:package"?: string;
  "twitter:app:name:googleplay"?: string;
  title?: string;
  "al:ios:url"?: string;
  "twitter:app:id:iphone"?: string;
  "og:description"?: string;
  "al:ios:app_store_id"?: string;
  "twitter:image"?: string;
  "twitter:player"?: string;
  "twitter:player:height"?: string;
  "twitter:site"?: string;
  "og:video:type"?: string;
  "og:video:height"?: string;
  "og:video:url"?: string;
  "twitter:title"?: string;
  "al:ios:app_name"?: string;
  "og:image:height"?: string;
  "twitter:app:id:ipad"?: string;
  "al:web:url"?: string;
  "og:video:secure_url"?: string;
  "og:video:tag"?: string;
  "og:video:width"?: string;
  "al:android:url"?: string;
  "fb:app_id"?: string;
  "twitter:app:url:googleplay"?: string;
  "twitter:app:name:ipad"?: string;
  "twitter:description"?: string;
  "og:url"?: string;
  "twitter:player:width"?: string;
  "al:android:app_name"?: string;
  "twitter:app:name:iphone"?: string;
  viewport?: string;
  "shopify-checkout-api-token"?: string;
  "og:image:secure_url"?: string;
  "shopify-digital-wallet"?: string;
  "csrf-param"?: string;
  "twitter:creator"?: string;
  "csrf-token"?: string;
  "og:locale"?: string;
  "msapplication-tilecolor"?: string;
  handheldfriendly?: string;
  "apple-mobile-web-app-capable"?: string;
  mobileoptimized?: string;
}

export interface CseImage {
  src: string;
}

export interface VideoObject {
  duration: string;
  embedUrl: string;
  itemtype: string;
  uploadDate: string;
  name: string;
  genre: string;
  description: string;
  interactionCount: string;
  thumbnailUrl: string;
}

export interface BreadcrumbList {
  itemtype: string;
}

export interface Imageobject {
  width: string;
  url: string;
  height: string;
}

export interface Person {
  name: string;
  url: string;
}

export interface Videoobject {
  embedurl: string;
  playertype: string;
  isfamilyfriendly: string;
  uploaddate: string;
  description: string;
  videoid: string;
  url: string;
  duration: string;
  unlisted: string;
  name: string;
  paid: string;
  width: string;
  regionsallowed: string;
  genre: string;
  interactioncount: string;
  channelid: string;
  datepublished: string;
  thumbnailurl: string;
  height: string;
}

export interface WebPage {
  name: string;
}
