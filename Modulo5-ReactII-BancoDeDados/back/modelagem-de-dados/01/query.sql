-CRIAÇÃO DE ENTIDADES

create database ecommerce 

create table clientes 
(
 cpf char(11) unique,
 nome varchar(150)
);

create table vendedores 
(
 cpf char(11) unique,
 nome varchar(150)
);

create table categorias 
(
 id serial primary key,
 nome text
);

create table produtos 
(
 id serial primary key,
 nome varchar(100),
 descricao text,
 preco int,
 quantidade_em_estoque int,
 categoria_id integer references categorias(id) 
);

create table pedidos 
(
 id serial primary key,
 valor int,
 cliente_cpf char(11) references clientes(cpf),
 vendedor_cpf char(11) references vendedores(cpf)
);

create table itens_do_pedido 
(
 id serial primary key,
 pedido_id integer references pedidos(id),
 quantidade integer,
 produto_id integer references produtos(id)
);

 - alimentação das tabelas - 
 *categorias
 insert into categorias 
(nome) values
('frutas'), ('verduras'), ('massas'), ('bebidas'), ('utilidades');

*produtos
insert into produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

*clientes
insert into clientes (cpf, nome)
values 
('803.713.500-42', 'José Augusto Silva'),
('676.428.690-61', 'Antonio Oliveira'),
('631.933.100-34', 'Ana Rodrigues'),
('756.705.050-18', 'Maria da Conceição'),

*vendedores
alter table clientes alter column cpf type char(14);
alter table vendedores alter column cpf type char(14);
alter table pedidos alter column cliente_cpf type char(14);
alter table pedidos alter column vendedor_cpf type char(14);
insert into clientes (cpf, nome)
values 
('803.713.500-42', 'José Augusto Silva'),
('676.428.690-61', 'Antonio Oliveira'),
('631.933.100-34', 'Ana Rodrigues'),
('756.705.050-18', 'Maria da Conceição');

*vendedores
insert into vendedores (cpf, nome)
values 
('825.398.410-31', 'Rodrigo Sampaio'),
('232.625.460-03', 'Beatriz Souza Santos'),
('280.071.550-23', 'Carlos Eduardo');

vendas 
1 -
insert into pedidos (cliente_cpf, vendedor_cpf)
values ('803.713.500-42', '280.071.550-23')

update pedidos 
set valor = (
(select (1 * preco) from produtos where nome = 'Mamão')
+ (select (1 * preco) from produtos where nome = 'Refrigerante Pepsi 2l') 
+ (select (6 * preco) from produtos where nome = 'Cerveja Heineken 600ml')
+ (select (1 * preco) from produtos where nome = 'Escova dental')
+ (select (5 * preco) from produtos where nome = 'Maça')
)
where id = 1

insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values 
(1, 1, (select id from produtos where nome = 'Mamão'));
(1, 1, (select id from produtos where nome = 'Refrigerante Pepsi 2l')),
(1, 6, (select id from produtos where nome = 'Cerveja Heineken 600ml')),
(1, 1, (select id from produtos where nome = 'Escova dental')),
(1, 5, (select id from produtos where nome = 'Maçã'));

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Refrigerante Pepsi 2l'
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Mamão'
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Cerveja Heineken 600ml';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Escova dental';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Maça';

*compra 2
insert into pedidos (cliente_cpf, vendedor_cpf) 
values 
('631.933.100-34', '232.625.460-03')

update pedidos 
set valor = (
(select (10 * preco) from produtos where nome = 'Manga')
+ (select (3 * preco) from produtos where nome = 'Uva') 
+ (select (5 * preco) from produtos where nome = 'Mamão')
+ (select (10 * preco) from produtos where nome = 'Tomate')
+ (select (2 * preco) from produtos where nome = 'Acelga')
)
where id = 2
insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values 
(2, 10, (select id from produtos where nome = 'Manga')),
(2, 3, (select id from produtos where nome = 'Uva')),
(2, 5, (select id from produtos where nome = 'Mamão')),
(2, 10, (select id from produtos where nome = 'Tomate')),
(2, 2, (select id from produtos where nome = 'Acelga'));


*compra 4
update pedidos 
set valor = (
(select (1 * preco) from produtos where nome = 'Balde para lixo 50l')
+ (select (6 * preco) from produtos where nome = 'Uva') 
+ (select (1 * preco) from produtos where nome = 'Macarrão parafuso')
+ (select (3 * preco) from produtos where nome = 'Mamão')
+ (select (20 * preco) from produtos where nome = 'Tomate')
+ (select (2 * preco) from produtos where nome = 'Acelga')
)
where id = 4

insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values 
(4, 1, (select id from produtos where nome = 'Balde para lixo 50l')),
(4, 6, (select id from produtos where nome = 'Uva')),
(4, 1, (select id from produtos where nome = 'Macarrão parafuso')),
(4, 3, (select id from produtos where nome = 'Mamão')),
(4, 20, (select id from produtos where nome = 'Tomate')),
(4, 2, (select id from produtos where nome = 'Acelga'));

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Balde para lixo 50l';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Uva';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Macarrão parafuso';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Mamão';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 20 where nome = 'Tomate';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Acelga';


*compra 5
insert into pedidos (cliente_cpf, vendedor_cpf) 
values 
('676.428.690-61', '825.398.410-31')

update pedidos 
set valor = (
(select (8 * preco) from produtos where nome = 'Uva')
+ (select (1 * preco) from produtos where nome = 'Massa para lasanha') 
+ (select (3 * preco) from produtos where nome = 'Manga')
+ (select (8 * preco) from produtos where nome = 'Tomate')
+ (select (2 * preco) from produtos where nome = 'Cerveja Heineken 600ml')
)
where id = 5

update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where nome = 'Uva';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Massa para lasanha';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Manga';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where nome = 'Tomate';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Cerveja Heineken 600ml';

