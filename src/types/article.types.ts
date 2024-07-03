export type NewsArticleType = {
  nid: string;
  legacyid: any;
  uuid: string;
  type: string;
  title: string;
  publishdate: string;
  lastupdated: string;
  url: string;
  image: Image;
  image_caption: any;
  hero_gallery: any;
  brief: string;
  category: Category[];
  topics: Topic[];
  flags: any[];
  ciakeywords: string;
  author: string;
  byline: string[];
  byline_detail: BylineDetail[];
  source: string;
  initials: any;
  sponsor_text: any;
  sponsor: any[];
  content: Content[];
  standfirst: any;
  tldr: string;
  isEverGreenContent: boolean;
  isOriginalContent: boolean;
  isFeelGoodContent: boolean;
  short_description: any;
  hero_video: any;
  episodenumber: string;
  seasonnumber: string;
  related_article: string[];
  type_key: string;
  programme: any;
  show_as_web_view: boolean;
  noAd: boolean;
  schedule_date: any;
  prgads: boolean;
  largeads: boolean;
  season: any;
  content_origin: string;
  content_origin_id: any;
  standalone_video: any;
  external_author: string;
  static_banner: string;
  field_text_to_speech_export: FieldTextToSpeechExport;
  components: Component[];
  "24lb_token": string;
  minute_url: string;
  minute: boolean;
  next_minute_nid: string;
  prev_minute_nid: string;
};

export type Image = {
  description: string;
  media_image: string;
  name: string;
  thumbnail: string;
  image_caption: any;
  created: string;
  id: string;
  image_byline_and_source: ImageBylineAndSource;
  media_minute_image: string;
};

export type ImageBylineAndSource = {
  byline: string[];
  source: string;
};

export type Category = {
  id: string;
  name: string;
  link: string;
  landing_page: string;
};

export type Topic = {
  id: string;
  name: string;
  link: string;
  landing_page: string;
};

export type BylineDetail = {
  id: string;
  title: string;
  url: string;
  hero_media: HeroMedia;
  position: string;
  summary: string;
  uid: string;
  created: string;
};

export type HeroMedia = {
  created: string;
  media_image: string;
  source: string;
  use_original: string;
  name: string;
  thumbnail: string;
};

export type Content = {
  id: string;
  bundle: string;
  body?: string;
  text_format?: string;
  reusable?: boolean;
  label?: string;
  placeholder?: string;
  sub_description?: string;
  subscription_type?: string;
  title?: string;
  newsletter_image?: string;
  view_mode_selection?: string;
  programmatic?: boolean;
  hero_media?: HeroMedia2;
  hero_media_mobile?: HeroMediaMobile;
  view_more?: ViewMore;
};

export type HeroMedia2 = {
  media_image: string;
  name: any;
  thumbnail: string;
};

export type HeroMediaMobile = {
  media_image: string;
  name: any;
  thumbnail: string;
};

export type ViewMore = {
  url: string;
  text: string;
  id: any;
  type: string;
};

export type FieldTextToSpeechExport = {
  audio_id: string;
  audio_title: string;
  audio_duration: number;
  audio_publish_date: string;
};

export type Component = {
  label: string;
  label_display: string;
  label_view: boolean;
  type: string;
  uuid: string;
  view_mode: string;
  region: string;
  weight: number;
  is_navigation: number;
  ads?: Ad[];
  id?: string;
  widget_id?: string;
  mobile_widget_id?: string;
  view_more_title?: string;
  view_more_url?: string;
  view_more_url_field_id?: any;
  view_more_url_field_type?: string | null;
  body?: string | null;
  title?: string;
  image?: string;
  placeholder?: string;
  subscription_type?: string;
  sub_description?: string;
  image_media_mobile?: string;
};

export type Ad = {
  id: string;
  networkCode: string;
  adChannel: string;
  adUnit1: string;
  adUnit2: string;
  device: string;
  sizes: number[][];
  noad: string;
  adtag1: string;
  pos: string;
  vidnart: string;
  prgads: string;
  largeads: string;
  replaceAdSection: boolean;
  isElevator: boolean;
  infinitescroll: boolean;
};
