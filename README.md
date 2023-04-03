# Project Store Manager :shopping:

In this project, an API was developed using the MSC architecture (model, service, and controller). The API to be built is a dropshipping sales management system where it will be possible to create, view, delete, and update products and sales. The MySQL database was used for data management. Additionally, the API is RESTful!

## :wrench:  Setup

Clone the repository:

```
git clone git@github.com:crisnabto/StoreManager.git
```

<details>
  <summary><strong>🐋 Running on Docker vs Locally</strong></summary><br />
  
  ## On Docker

  > :information_source: Run the `node` service with the command `docker-compose up -d`.
  
  - These services will initialize a container named `store_manager`.
  
  - From here you can run the `store_manager` container via CLI or open it in VS Code..
  
  > :information_source: Use the command `docker exec -it store_manager bash`.

  - It will give you access to the interactive terminal of the container created by compose, which is running in the background.

  > :information_source:  Install dependencies [**If any**] with `npm install` 
    
  - **⚠ Attention:** If you choose to use Docker, **ALL** commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INSIDE** the container, i.e., in the terminal that appears after executing the `docker exec` command mentioned above. 
  
---
  
  ## Without Docker
  
  > Install dependencies [**If any**] with `npm install

  ✨ **Tip:** To run the project in this way, you must have `Node` installed on your computer.

  ✨ **Tip:** The project expects the `Node` version used to be 16.

  <br/>
</details>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
