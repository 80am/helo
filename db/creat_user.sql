insert into users
(name, city, feeling)
values
($1, $2, $3)
returning *;