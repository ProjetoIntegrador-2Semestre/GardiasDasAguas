# 🚀 Guia de Instalação e Execução - Guardiões das Águas

Este documento contém todas as instruções necessárias para executar o projeto **Guardiões das Águas** em uma nova máquina.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### 1. Node.js e npm
- **Versão recomendada**: Node.js 18.x ou superior
- **Download**: https://nodejs.org/
- **Verificar instalação**:
  ```bash
  node --version
  npm --version
  ```

### 2. .NET SDK
- **Versão**: .NET 8.0 ou superior
- **Download**: https://dotnet.microsoft.com/download
- **Verificar instalação**:
  ```bash
  dotnet --version
  ```

### 3. PostgreSQL
- **Versão recomendada**: PostgreSQL 14.x ou superior
- **Download**: https://www.postgresql.org/download/
- **Verificar instalação**:
  ```bash
  psql --version
  ```

### 4. Git
- **Download**: https://git-scm.com/downloads
- **Verificar instalação**:
  ```bash
  git --version
  ```

### 5. Entity Framework Core Tools (CLI)
- **Instalar globalmente**:
  ```bash
  dotnet tool install --global dotnet-ef
  ```
- **Verificar instalação**:
  ```bash
  dotnet ef --version
  ```

---

## 📥 Clonando o Projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd Guardi-sDas-guas
```

---

## 🗄️ Configuração do Banco de Dados PostgreSQL

### Passo 1: Criar o Banco de Dados

Abra o terminal do PostgreSQL (psql) ou use uma ferramenta como pgAdmin:

```sql
CREATE DATABASE guardioesdasaguas;
```

### Passo 2: Criar Usuário (Opcional)

Se quiser criar um usuário específico para o projeto:

```sql
CREATE USER gda_user WITH PASSWORD 'sua_senha_aqui';
GRANT ALL PRIVILEGES ON DATABASE guardioesdasaguas TO gda_user;
```

### Passo 3: Configurar String de Conexão

Edite o arquivo `backend-gda/BackEndAPI/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=guardioesdasaguas;Username=postgres;Password=SUA_SENHA_AQUI"
  }
}
```

**⚠️ IMPORTANTE**: Substitua `SUA_SENHA_AQUI` pela senha do seu PostgreSQL.

Se criou um usuário específico, use:
```json
"DefaultConnection": "Host=localhost;Port=5432;Database=guardioesdasaguas;Username=gda_user;Password=sua_senha_aqui"
```

---

## ⚙️ Configuração do Backend

### Passo 1: Navegar até a pasta do backend

```bash
cd backend-gda/BackEndAPI
```

### Passo 2: Restaurar dependências

```bash
dotnet restore
```

### Passo 3: Aplicar Migrations (Criar tabelas no banco)

```bash
dotnet ef database update
```

Este comando irá:
- Criar todas as tabelas necessárias
- Aplicar todas as migrations
- Popular o banco com dados de exemplo

### Passo 4: Compilar o projeto

```bash
dotnet build
```

### Passo 5: Executar o backend

```bash
dotnet run
```

**✅ Sucesso**: O backend estará rodando em `https://localhost:5269` e `http://localhost:5268`

**Swagger**: Acesse `https://localhost:5269/swagger` para testar a API

---

## 🎨 Configuração do Frontend

### Passo 1: Navegar até a pasta do frontend

Abra um **novo terminal** e execute:

```bash
cd frontend-gda
```

### Passo 2: Instalar dependências

```bash
npm install
```

Este processo pode demorar alguns minutos.

### Passo 3: Verificar configuração da API

Abra o arquivo `frontend-gda/src/services/api.ts` e verifique se a URL da API está correta:

```typescript
const API_URL = 'http://localhost:5268/api';
```

### Passo 4: Executar o frontend

```bash
npm run dev
```

**✅ Sucesso**: O frontend estará rodando em `http://localhost:3000`

---

## 🔐 Primeiro Acesso

### Usuário Admin Padrão

O sistema cria automaticamente um usuário admin para testes:

- **Email**: `admin@gda.com`
- **Senha**: `admin123`
- **Tipo**: Admin

### Criar Novo Usuário

1. Acesse `http://localhost:3000`
2. Clique em "Cadastrar"
3. Preencha os dados
4. Faça login

### Promover Usuário a Admin

Via Swagger (`https://localhost:5269/swagger`):

1. Localize o endpoint `PUT /api/Usuarios/{id}/promover-admin`
2. Insira o ID do usuário
3. Execute

---

## 📂 Estrutura de Pastas

```
Guardi-sDas-guas/
├── backend-gda/
│   └── BackEndAPI/
│       ├── Controllers/        # Endpoints da API
│       ├── Models/             # Modelos de dados
│       ├── DTOs/               # Data Transfer Objects
│       ├── Data/               # Contexto do banco
│       ├── Migrations/         # Migrations do EF Core
│       ├── Program.cs          # Configuração principal
│       └── appsettings.json    # Configurações (STRING DE CONEXÃO)
│
└── frontend-gda/
    ├── src/
    │   ├── app/
    │   │   ├── Components/     # Componentes React
    │   │   ├── context/        # Context API (Auth)
    │   │   └── [pages]/        # Páginas Next.js
    │   └── services/
    │       └── api.ts          # Serviço de comunicação com API
    └── package.json
```

---

## 🐛 Solução de Problemas Comuns

### Erro: "Cannot connect to PostgreSQL"

**Causa**: PostgreSQL não está rodando ou credenciais incorretas.

**Solução**:
1. Verifique se o PostgreSQL está rodando
2. Confirme usuário e senha no `appsettings.json`
3. Teste a conexão com `psql -U postgres`

### Erro: "dotnet ef not found"

**Causa**: Entity Framework Tools não instalado.

**Solução**:
```bash
dotnet tool install --global dotnet-ef
```

### Erro: "Port 5268 already in use"

**Causa**: Outra aplicação está usando a porta.

**Solução**:
1. Feche outras instâncias do backend
2. Ou altere a porta em `backend-gda/BackEndAPI/Properties/launchSettings.json`

### Erro: "npm install failed"

**Causa**: Problemas com dependências ou cache.

**Solução**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Migration already applied"

**Causa**: Tentando aplicar migration já existente.

**Solução**:
```bash
dotnet ef database update
```

### Frontend não conecta com Backend

**Verificar**:
1. Backend está rodando? (`dotnet run`)
2. URL correta em `api.ts`? (`http://localhost:5268/api`)
3. CORS configurado? (já está no `Program.cs`)

---

## 🧪 Testando a Instalação

### 1. Testar Backend

Acesse: `https://localhost:5269/swagger`

Teste o endpoint: `GET /api/Postagens`

**Esperado**: Lista de postagens de exemplo

### 2. Testar Frontend

Acesse: `http://localhost:3000`

**Esperado**: Página inicial carregada

### 3. Testar Integração

1. Faça login com `admin@gda.com` / `admin123`
2. Vá para "Perfil"
3. Clique em "Editor" → "Ir para Meus Posts"
4. Crie um novo post
5. Verifique se aparece na lista

**✅ Se tudo funcionar, a instalação está completa!**

---

## 📝 Comandos Úteis

### Backend

```bash
# Restaurar dependências
dotnet restore

# Compilar
dotnet build

# Executar
dotnet run

# Criar nova migration
dotnet ef migrations add NomeDaMigration

# Aplicar migrations
dotnet ef database update

# Reverter última migration
dotnet ef migrations remove

# Ver status das migrations
dotnet ef migrations list
```

### Frontend

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Executar produção
npm start

# Limpar cache
npm cache clean --force
```

---

## 🔧 Configurações Opcionais

### Alterar Porta do Backend

Edite `backend-gda/BackEndAPI/Properties/launchSettings.json`:

```json
"applicationUrl": "https://localhost:NOVA_PORTA_HTTPS;http://localhost:NOVA_PORTA_HTTP"
```

**Lembre-se**: Atualizar também em `frontend-gda/src/services/api.ts`

### Alterar Porta do Frontend

Edite `frontend-gda/package.json`:

```json
"scripts": {
  "dev": "next dev -p 3001"
}
```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do terminal
2. Consulte a seção "Solução de Problemas"
3. Verifique se todos os pré-requisitos estão instalados
4. Confirme as versões das ferramentas

---

## ✅ Checklist de Instalação

- [ ] Node.js instalado
- [ ] .NET SDK instalado
- [ ] PostgreSQL instalado e rodando
- [ ] Git instalado
- [ ] dotnet-ef instalado
- [ ] Repositório clonado
- [ ] Banco de dados criado
- [ ] String de conexão configurada
- [ ] Migrations aplicadas
- [ ] Backend rodando (porta 5268/5269)
- [ ] Dependências do frontend instaladas
- [ ] Frontend rodando (porta 3000)
- [ ] Login funcionando
- [ ] Criação de post funcionando

---

**🎉 Projeto pronto para uso!**
