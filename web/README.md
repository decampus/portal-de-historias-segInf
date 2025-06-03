
# 📚 Portal de Histórias

Bem-vindo ao **Portal de Histórias**, um site desenvolvido para permitir que **escritores independentes** publiquem suas obras e que **leitores** possam acessá-las por categorias, gêneros ou autores.

---

## 🌐 Demonstração

Acesse o site publicado aqui:  
👉 https://kimwonnie.github.io/portal-de-historias/

> Substitua `seu-usuario` pelo nome do seu GitHub após publicação.

---

## 🎯 Objetivo

O objetivo deste projeto é criar um portal completo com:
- Cadastro e login de usuários
- Publicação de histórias e capítulos
- Perfil do autor com capa e foto de perfil
- Leitura de capítulos com modo escuro
- Edição de perfil
- Biblioteca de histórias salvas
- Navegação por categorias

---

## Execução

Primeiramente será necessário construir o banco de dados. Para isso, é necessário ter o PostgreSQL instalado e os seguintes comandos devem ser executados em algum client:

```
CREATE DATABASE portal_de_historias_seginf;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Depois é necessário criar um arquivo .env na raíz do projeto com os seguintes campos:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portal_de_historias_seginf
DB_USER=
DB_PASS=
PEPPER=
PORT=3000
```

Onde `DB_USER` é o nome do usuário de banco de dados local, `DB_PASS` é a respectiva senha deste usuário e `PEPPER` é uma chave usada para o procedimento de peppering da senha no banco de dados, pode ser qualquer sequência alfanumérica.

Instale os pacotes com `npm install` e servido com `node index.js`. Por padrão, o servidor irá abrir na pagina de cadastro para fins de teste da funcionalidade implementada.

## 🧪 Tecnologias Utilizadas

- HTML5
- CSS3 (com gradiente roxo/cinza)
- JavaScript
- Git e GitHub
- GitHub Pages
- VS Code

---

## 📁 Estrutura do Projeto

```
portal-de-historias/
├── index.html
├── perfil.html
├── biblioteca.html
├── categorias.html
├── nova-historia.html
├── novo-capitulo.html
├── visualizar-historia.html
├── editar-perfil.html
├── login.html
├── cadastro.html
├── logout.html
├── configuracoes.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── img/
    └── logo.png
```

---

## 🔒 Segurança da Informação

- Senhas não visíveis por padrão (com opção de mostrar)
- Autenticação de usuários
- Edição de dados restrita ao dono do perfil
- Logout com confirmação
- Acesso a histórias limitado por status

---

## 👥 Autores

- **Williams C M Santos**
- Projeto desenvolvido para a disciplina _Laboratório de Desenvolvimento de Software_

---

## 📌 Licença

Este projeto é apenas para fins educacionais e não pode ser adaptado.
