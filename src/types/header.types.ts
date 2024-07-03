export type MyNewsHeader = {
  title: string;
  uri?: string;
  alias?: string;
  weight: string;
  enabled: boolean;
  options: Options;
  field_id?: string | null;
  field_type?: string | null;
  image: any;
  absolute_url?: string;
  below?: Below[];
};

export type Options = {
  attributes: Attributes;
  modal?: any[];
  query?: any[];
};

export type Attributes = {
  class: string[];
  target?: string;
};

export type Below = {
  title: string;
  uri: string;
  alias: string;
  weight: string;
  enabled: boolean;
  options: Options2;
  field_id: string | null;
  field_type: string | null;
  image: any;
  absolute_url: string;
};

export type Options2 = {
  attributes: Attributes2;
  modal: any[];
  query: any[];
};

export type Attributes2 = {
  class: string[];
  target?: string;
};
