create table if not exists storage_source
(
    id SERIAL primary key,
    enable boolean null,
    enable_cache boolean null,
    name varchar(255) null,
    auto_refresh_cache boolean null,
    type varchar(64) null,
    search_enable boolean null,
    search_ignore_case boolean null,
    order_num int null,
    default_switch_to_img_mode boolean null,
    remark text null,
    "key" varchar(64) null,
    enable_file_operator boolean null,
    search_mode varchar(32) null,
    enable_file_anno_operator boolean null
);
COMMENT ON TABLE storage_source IS '存储源设置';
COMMENT ON COLUMN storage_source.enable IS '使用启用';
COMMENT ON COLUMN storage_source.enable_cache IS '是否开启缓存';
COMMENT ON COLUMN storage_source.name IS '存储源名称';
COMMENT ON COLUMN storage_source.auto_refresh_cache IS '是否开启缓存自动刷新';
COMMENT ON COLUMN storage_source.type IS '存储源类型';
COMMENT ON COLUMN storage_source.search_enable IS '是否开启搜索';
COMMENT ON COLUMN storage_source.search_ignore_case IS '搜索是否忽略大小写';
COMMENT ON COLUMN storage_source.order_num IS '排序';
COMMENT ON COLUMN storage_source.default_switch_to_img_mode IS '是否默认开启图片模式';
COMMENT ON COLUMN storage_source.remark IS '备注';
COMMENT ON COLUMN storage_source."key" IS '存储源别名';
COMMENT ON COLUMN storage_source.enable_file_operator IS '是否启用文件操作';
COMMENT ON COLUMN storage_source.search_mode IS '搜索模式, 仅从缓存中搜索还是直接搜索';
COMMENT ON COLUMN storage_source.enable_file_anno_operator IS '是否允许匿名进行文件操作';

create table if not exists filter_config
(
    id SERIAL primary key,
    storage_id int null,
    expression varchar(255) null,
    description varchar(255) null,
    mode varchar(255) null
);
COMMENT ON TABLE filter_config IS '过滤设置';
COMMENT ON COLUMN filter_config.storage_id IS '存储源 ID';
COMMENT ON COLUMN filter_config.expression IS '路径表达式';
COMMENT ON COLUMN filter_config.description IS '表达式描述';

create table if not exists short_link
(
    id SERIAL primary key,
    short_key varchar(255) null,
    url text null,
    create_date timestamp null,
    storage_id int null
);

create table if not exists storage_source_config
(
    id SERIAL primary key,
    name varchar(255) null,
    type text null,
    title varchar(255) null,
    storage_id int null,
    value text null
);

create table if not exists system_config
(
    id SERIAL primary key,
    name varchar(255) null,
    value text null,
    title varchar(255) null
);

create table if not exists password_config
(
    id SERIAL primary key,
    storage_id int null,
    expression varchar(255) null,
    password varchar(255) null,
    description varchar(255) null
);

create table if not exists readme_config
(
    id SERIAL primary key,
    storage_id int null,
    expression varchar(255) null,
    description varchar(255) null,
    readme_text text null,
    display_mode varchar(32) null
);

create table if not exists download_log
(
    id SERIAL primary key,
    path varchar(2048) null,
    storage_key varchar(64) null,
    create_time timestamp null,
    ip varchar(64) null,
    user_agent varchar(2048) null,
    referer varchar(2048) null,
    short_key varchar(255) null
);