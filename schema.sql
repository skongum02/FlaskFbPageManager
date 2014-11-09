drop table if exists entries;
create table entries (
  user_id integer primary key,
  page_id integer not null,
  page_name text not null,
  page_token text not null
);


drop table if exists posts;
create table posts (
  page_id integer primary key,
  page_name text not null,
  page_token text not null
);