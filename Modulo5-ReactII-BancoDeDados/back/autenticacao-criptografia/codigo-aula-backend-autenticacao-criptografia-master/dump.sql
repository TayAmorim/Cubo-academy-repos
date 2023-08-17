create table carros (
    id serial primary key,
    modelo text not null,
    marca text not null,
    ano integer not null,
    cor text not null,
    descricao text
);

create table usuarios (
	id serial primary key,
  	nome text not null,
  	email text not null unique,
  	senha text not null
);