// export interface Suggestion {
//   took: number;
//   timed_out: boolean;
//   _shards: {
//     total: number;
//     successful: number;
//     skipped: number;
//     failed: number;
//   };
//   hits: {
//     total: {
//       value: number;
//       relation: string;
//     };
//     max_score: null;
//     hits: any[];
//   };
//   suggest: {
//     "my-suggestion": {
//       text: string;
//       offset: number;
//       length: number;
//       options: any[];
//     }[];
//   };
// }

interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

interface Total {
  value: number;
  relation: string;
}

export interface Hit {
  text: string;
  offset: number;
  length: number;
  options: any[]; // You can specify the type of options if you have more information about them
}

export interface Suggest {
  [key: string]: Hit[];
}

interface Hits {
  total: Total;
  max_score: null | number;
  hits: any[]; // You can specify the type of hits if you have more information about them
}

export interface Suggestion {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
  suggest: Suggest;
}
