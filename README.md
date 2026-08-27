# FastShop Frontend

Frontend do projeto FastShop, uma aplicação de e-commerce desenvolvida para consumir a API REST do [FastShop Backend](https://github.com/AlbertoVilar/fastshop-backend).

## Tecnologias

- React 19
- TypeScript
- React Router
- CSS Modules
- Create React App

## Funcionalidades atuais

- Página inicial com vitrine e categorias.
- Catálogo de produtos integrado aos endpoints públicos do backend.
- Página de detalhes do produto.
- Rotas protegidas e tela de login em construção.
- Tratamento básico de erros nas requisições de produtos.

> O catálogo consulta a API. A autenticação visual do frontend ainda não está integrada ao JWT do backend.

## Estrutura

```
src/
├── app/          # composição da aplicação e providers
├── components/   # componentes reutilizáveis
├── features/     # recursos por domínio
├── pages/        # páginas e estilos
├── routes/       # rotas e proteção de acesso
└── services/     # integração com a API
```

## Como executar

### Pré-requisitos

- Node.js 20 ou superior
- npm
- [FastShop Backend](https://github.com/AlbertoVilar/fastshop-backend) em execução

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

Instale as dependências e inicie a aplicação:

```bash
npm install
npm start
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o ambiente de desenvolvimento. |
| `npm test` | Executa os testes no modo interativo. |
| `npm run build` | Gera o build de produção em `build/`. |

## Integração com o backend

A URL da API é definida por `REACT_APP_API_BASE_URL`. Sem essa variável, o projeto usa `http://localhost:8080`.

Para o catálogo carregar corretamente, inicie o backend e verifique se o CORS permite a origem do frontend, normalmente `http://localhost:3000`.

## Próximos passos

- Integrar login e armazenamento seguro do token JWT.
- Conectar dashboard, carrinho e pedidos à API.
- Adicionar testes de componentes e fluxos de navegação.
- Publicar uma demonstração do frontend.

## Autor

[Alberto Vilar](https://github.com/AlbertoVilar)
