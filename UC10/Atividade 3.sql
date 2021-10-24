1 Nome de todos os jogadores titulares, por seleção
    select p.selecao, j.nome jogador from pais p
    inner join jogador j     
    on idpais=pais_idpais
    order by p.selecao,j.nome;



2 Seleção, o nome do jogador e número de vezes que ele foi substituído
    select p.selecao, j.nome jogador,count(j.nome) sustituicoes 
    from copa_mundo.pais p
    inner join jogador j on pais_idpais=p.idpais
    inner join substituicao s on jogador_idjogador_sai=j.idjogador
    group by p.selecao,j.nome
    order by 3 desc,selecao,nome; 


3 Número total de cartões amarelos e vermelhos por seleção;
    select p.selecao, sum(c.amarelo),sum(c.vermelho)
    from copa_mundo.pais p
    inner join jogador j on pais_idpais=p.idpais
    inner join cartao c on jogador_idjogador=j.idjogador
    group by p.selecao
    order by 3 desc,selecao,nome;


4   Tabela de pontuação ordenada por grupo de 
    forma decrescente por pontuação (vitória 3 pontos, empate 1 ponto),
    utilizando como critérios de desempate, o saldo de gols. 
    A tabela deve exibir grupo,
    seleção, pontuação,
    número de vitórias,
    número de empates,
    número de derrotas e saldo de gols (gols pró - gols contra).  
    select g.descricao,
    p.selecao,
    (p.vitorias * 3 + p.empates) pontos,
    p.vitorias,
    p.derrotas,
    (p.golspro - p.golscontra) saldo_gols
    from copa_mundo.grupo g
    inner join copa_mundo.pais p on p.grupo_idgrupo=g.idgrupo
    order by g.descricao, 3 desc, 6 desc;