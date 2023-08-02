create database catalogo_pokemons

create table usuarios (
id serial primary key,
nome text not null ,
email text not null unique,
senha text not null
);