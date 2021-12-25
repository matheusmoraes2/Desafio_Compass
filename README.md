# Desafio_Compass
Desafio Compasso API em nodeJS 


## Executando o projeto 


**Para clonar o projeto execute:**

```
git clone https://github.com/matheusmoraes2/Desafio_Compass.git
```



**Conexão com o banco de dados:**

1- Crie uma database chamada "task" com o comando:

```
CREATE DATABASE IF NOT EXISTS task;
```

2- Entre na pasta config, abra o arquivo default.json e altere o "usuario" e a "senha" 
para o usuario e senha do seu banco de dados.


**Instale as dependencias usando:** 

```
npm i
```

**Execute o comando a seguir para criar as tabelas:**

```
node .\api\banco-de-dados\criarTabelas.js
```

**Execute a aplicação usando:** 

```
npm start
```

### Rotas do projeto 

**Rota para o Post e Get do Project**

```
localhost:3000/api/project
```

**Rota para o Get por ID, Put e Delete do Project**

```
localhost:3000/api/project/'id-do-Project'
```

**Rota para o Get e Post das Tasks:**

```
localhost:3000/api/project/'id-do-Project'/task
```

**Rota para o Put e Delete das Tasks:**

```
localhost:3000/api/project/'id-do-Project'/task/'id-da-task'
```



