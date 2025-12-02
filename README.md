# Gardiãs das Águas 🌊
 Guardiãs das Águas é um projeto socioambiental voltado para a **preservação** dos recursos hídricos e para a **construção** de uma cultura de cuidado com rios, lagos, nascentes e oceanos. Ele nasce da compreensão de que a água é um recurso essencial para todas as formas de vida e que sua conservação depende tanto de ações práticas quanto de educação e engajamento comunitário.

## Participantes 🧜🧜🧜
- Kelvim Lucas de Paula
- Felipe Cutiur dos Santos
- Ryan Augusto de Oliveira

## Objetivo do projeto 🎯
O objetivo do site Guardiãs das Águas é criar uma plataforma digital completa e acessível que fortaleça a visibilidade do projeto, amplie sua capacidade de impacto e promova a conscientização socioambiental. Através do site, buscamos centralizar informações, comunicar ações e engajar a comunidade em torno da preservação dos recursos hídricos.

## Diagrama de caso de uso

![Diagrama de caso de uso](/docs/diagramas/casoDeUso.jpg)

## Tecnologias usadas 💻

### FrontEnd
![image](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### Protótipo
O protótipo do conceito do projeto foi feito pelo Felipe Cutiur usando a ferramenta figma:

![protótipo figma](/docs/imagens/Projeto%20Integrador%202%20–%20Figma.png)

### BackEnd
![image](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white) ![image](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white) ![image](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white&style=for-the-badge)

#### Diagrama de classes
Diagrama de Classes que será usado para criar as tabelas do banco de dados PostgreSQL.
    
---
```mermaid
classDiagram
    class Usuario {
        +Integer Id
        +String Nome
        +String Email
        +String Senha
        +String Bio
        +String FotoPerfil
        +login()
        +registrar()
        +recuperarSenha()
        +editarPerfil()
    }

    class Postagem {
        +Integer Id
        +String Titulo
        +String Conteudo
        +Date DataCriacao
        +String ImagemCapa
        +Integer Likes
        +criar()
        +editar()
        +excluir()
        +compartilhar()
    }

    class Comentario {
        +Integer Id
        +String Texto
        +Date Data
        +publicar()
    }

    class Evento {
        +Integer Id
        +String Titulo
        +Date DataHora
        +String Local
        +String Descricao
        +inscrever()
    }

    class Galeria {
        +Integer Id
        +String TituloAlbum
        +adicionarFoto()
    }

    class Midia {
        +Integer Id
        +String Url
        +String Tipo
    }

    %% Relacionamentos
    Usuario "1" --> "*" Postagem : cria/autor
    Usuario "1" --> "*" Comentario : escreve
    Usuario "1" --> "*" Evento : participa
    
    Postagem "1" --> "*" Comentario : possui
    Postagem "1" --> "*" Midia : contem
    
    Galeria "1" --> "*" Midia : armazena
    
    Evento "*" --> "1" Usuario : organizado_por
```

---
## Wiki
[Wiki do projeto](https://github.com/ProjetoIntegrador-2Semestre/GardiasDasAguas/wiki).

## Agradecimentos

**a todes e todxs.**