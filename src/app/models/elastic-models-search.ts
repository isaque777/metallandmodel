interface Shard {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

interface Total {
  value: number;
  relation: string;
}

export interface Source {
  _class: string;
  id: string;
  title: string;
  description: string;
  date: number;
  highlight: boolean;
  memoTypes: MemoType[];
  memoUsers: MemoUser[];
}

interface MemoType {
  id: string;
  description: string;
}

interface MemoUser {
  id: string;
  name: string;
}

interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _ignored: string[];
  _source: Source;
}

interface Hits {
  total: Total;
  max_score: number | null;
  hits: Hit[];
}

export interface Search {
  took: number;
  timed_out: boolean;
  _shards: Shard;
  hits: Hits;
}
