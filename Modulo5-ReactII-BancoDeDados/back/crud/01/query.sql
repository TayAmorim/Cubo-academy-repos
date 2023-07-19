1 - insert into usuarios (nome, idade, email, senha)
values 
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Aretha Montgomery', 20, 'raja.feugiat@nonummy.com', 'u2D18F6E');

2 - update usuarios 
set nome = 'Raja W. Coffey Thomas'
where email = 'raja.feugiat@nonummy.com'


5
delete from usuarios where id = 3
insert into usuarios
(nome, idade, email, senha)
values
('Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris', 29, 'nec.metus.facilisis@vitaealiquet.edu', 'l4S64Y3A'),
('Joel M. Hartman', 18, 'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'risus.Duis@eget.ca', 'e3P92I7R');


6- update usuarios 
set situacao = false
where email = 'montes.nascetur@odiotristique.co.uk';

7 - 
update usuarios 
set senha = 'k9P31H1O'
where email = 'risus.Duis@eget.ca';

8 - 
update usuarios 
set data_nascimento = '1991-09-29'
where email = 'auctor@duiFuscediam.edu';
update usuarios 
set data_nascimento = '1988-11-02'
where email = 'nec.metus.facilisis@vitaealiquet.edu';

9 -
delete from usuarios where data_nascimento is null

10 -
insert into usuarios
(nome, email, senha, data_nascimento)
values
('Tate I. Dean', 'Nunc@etmagnis.edu', 'd3V25D6Y', '1989-05-01'),
('Arsenio K. Harmon', 'adipiscing.elit@turpis.com', 'm3T58S0C', '1985-10-23');