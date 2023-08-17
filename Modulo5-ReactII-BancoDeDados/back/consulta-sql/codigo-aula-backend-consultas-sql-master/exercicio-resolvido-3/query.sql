
select compositor, composicao, tempo 
from musicas where tempo between 60*2 and 60*5 and compositor <> 'Mozart';