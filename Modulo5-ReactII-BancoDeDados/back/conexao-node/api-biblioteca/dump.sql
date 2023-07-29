create database biblioteca

create table autores (
id serial primary key,
nome text not null,
idade integer
);


create table livros (
  id serial primary key,
  nome text not  null,
  genero text,
  editora text,
  data_publicacao date not null,
  autor_id integer references autores(id)
);
