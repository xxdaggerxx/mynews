export interface MyNewsSidebar {
  id: string;
  site: string;
  layoutConfig: LayoutConfig;
  slotCount: number;
  tags: string[];
  items: Item[];
}

export interface LayoutConfig {
  title: string;
  headers: Header[];
}

export interface Header {
  lang: string;
  title: string;
}

export interface Item {
  algorithm: string;
  id: string;
  ranking_algorithm: string;
  is_backfill: boolean;
  content_id: string;
  uuid: string;
  publish_date: string;
  section: string;
  section_label: string;
  site: string;
  title: string;
  author: string;
  categories: string[];
  main_category: string;
  sub_category: any;
  slot_group: string;
  thumbnail: string;
  image: string;
  thumbnail_type: string;
  url: string;
  site_label: string;
  click_through_url: string;
  click_tracker: string;
  is_video: boolean;
}
