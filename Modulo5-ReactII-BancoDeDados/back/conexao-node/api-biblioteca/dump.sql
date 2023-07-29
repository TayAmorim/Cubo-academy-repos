create database biblioteca

create table autores (
id serial primary key,
nome text not null,
idade integer
);


const quey = `insert into autores (nome, idade) values ($1, $2)`;