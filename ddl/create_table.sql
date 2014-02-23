/* ユーザテーブル */
create table user_info (
    user_id         varchar(255)    primary key,    -- ユーザID
    user_name       varchar(255)    not null,       -- ユーザ名
    password        varchar(255),                   -- パスワード
    mail_address    varchar(255),                   -- メールアドレス
    admin_flg       char(1),                        -- 管理者フラグ(1:管理者／0:非管理者)
    enable_flg      char(1)                         -- 有効フラグ(1:有効／0:無効)
);


/* プロジェクトテーブル */
create table project (
    project_id      int             primary key auto increment, -- プロジェクトID
    project_name    varchar(255)    not null                    -- プロジェクト名
);

/* 機能テーブル */
create table project_function (
    function_id     int             primary key auto increment, -- 機能ID
    project_id      int             not null,                   -- プロジェクトID
    function_name   varchar(255)    not null                    -- 機能名
);

/* サブ機能テーブル */
create table project_subfunction (
    subfunction_id      int             primary key auto increment, -- サブ機能ID
    function_id         int             not null,                   -- 機能ID
    project_id          int             not null,                   -- プロジェクトID
    subfunction_name    varchar(255)    not null                    -- サブ機能名
);

/* プロジェクトメンバーテーブル */
create table project_member (
    project_id      int,            -- プロジェクトID
    user_id         varchar(255),   -- ユーザID
    primary key(project_id, user_id)
);

/* 試験進捗テーブル */
create table test_progress (
    test_progress_id    int primary key auto increment,         -- 試験進捗ID
    project_id      int     not null,                           -- プロジェクトID
    test_progress_name  varchar(255)    varchar(255),           -- 試験進捗名    
);

/* バグ */
create table bug (
    bug_id          int             primary key auto increment, -- バグID
    project_id      int             not null,                   -- プロジェクトID
    function_id     int             not null,                   -- 機能ID
    subfunction_id  int             not null,                   -- サブ機能ID
    occur_date      date            not null,                   -- 起票日
    issuer_user_id  varchar(255)    not null,                    -- 起票者ユーザID
    cause           text,                                        -- 原因
    deal            text,                                       -- 対処
    update_date     date            not null                   -- 更新日
);

/* バグカテゴリ */
create table bug_category (
    category_id     int             primary key auto increment, -- バグカテゴリID
    project_id      int             not null,                   -- プロジェクトID
    category_name   varchar(255)    not null                    -- カテゴリ名
);

