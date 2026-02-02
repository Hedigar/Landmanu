# Myranda Informática - Landing Page
## Guia Completo de Edição e Compilação para Hostinger

---

## 📋 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Como Editar o Projeto](#como-editar-o-projeto)
3. [Como Compilar Localmente](#como-compilar-localmente)
4. [Como Fazer Upload para Hostinger](#como-fazer-upload-para-hostinger)
5. [Troubleshooting](#troubleshooting)

---

## 🗂️ Estrutura do Projeto

```
myranda-landing/
├── client/                          # Código frontend (React)
│   ├── public/
│   │   └── images/                 # Imagens do site
│   │       ├── hero-tech-background.png
│   │       ├── gaming-setup-neon.png
│   │       ├── network-server-industrial.png
│   │       ├── tech-store-modern.png
│   │       └── technician-workspace.png
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # 🎯 PÁGINA PRINCIPAL - EDITE AQUI
│   │   ├── index.css               # 🎨 ESTILOS E CORES - EDITE AQUI
│   │   ├── App.tsx                 # Configuração da app
│   │   └── main.tsx                # Entrada da aplicação
│   └── index.html                  # HTML principal
├── vite.config.ts                  # ⚙️ Configuração de compilação
├── package.json                    # Dependências do projeto
├── tsconfig.json                   # Configuração TypeScript
└── README-HOSTINGER.md             # Este arquivo

```

---

## ✏️ Como Editar o Projeto

### 1. **Editar o Conteúdo da Página (Textos, Links)**
Arquivo: `client/src/pages/Home.tsx`

**Exemplos de edições:**
- Mudar título: Procure por `"TECNOLOGIA"` e `"DE ELITE"`
- Mudar descrição: Procure por `"Assistência técnica especializada..."`
- Mudar números do WhatsApp: Procure por `"5551983591567"` ou `"555136636445"`
- Mudar endereço: Procure por `"Av. Getulio Vargas, 1144"`
- Editar descrição de serviços: Procure por `"LOJA DE ACESSÓRIOS"`, `"PCs GAMERS"`, etc.

### 2. **Editar Cores e Estilos**
Arquivo: `client/src/index.css`

**Cores principais:**
```css
--primary: oklch(0.65 0.25 25);        /* Vermelho Néon */
--accent: oklch(0.70 0.15 195);        /* Ciano Elétrico */
--background: oklch(0.12 0.01 240);    /* Fundo Escuro */
--foreground: oklch(0.95 0.01 240);    /* Texto Claro */
```

**Para mudar cores:**
1. Abra `client/src/index.css`
2. Procure por `:root {` (linha ~51)
3. Edite os valores `oklch()` conforme desejado
4. Salve e compile (veja próxima seção)

### 3. **Editar Imagens**
Pasta: `client/public/images/`

**Para trocar uma imagem:**
1. Substitua o arquivo PNG/JPG na pasta `client/public/images/`
2. Mantenha o mesmo nome do arquivo
3. Compile e faça upload

---

## 🔨 Como Compilar Localmente

### Pré-requisitos:
- **Node.js** instalado (versão 18+)
- **npm** ou **pnpm** instalado

### Passos:

#### 1️⃣ Abra o Terminal/CMD na pasta do projeto
```bash
cd caminho/para/myranda-landing
```

#### 2️⃣ Instale as dependências (primeira vez apenas)
```bash
npm install
```

#### 3️⃣ Compile o projeto
```bash
npm run build
```

**Resultado esperado:**
```
✓ built in 4.11s
✓ Arquivos compilados em: dist/public/
```

#### 4️⃣ Verifique se foi criada a pasta `dist/public/`
Você deve ver:
```
dist/public/
├── index.html
├── assets/
│   ├── index-DnnKB77s.css
│   └── index-D-dHwo6s.js
└── images/
    ├── hero-tech-background.png
    ├── gaming-setup-neon.png
    └── (outras imagens)
```

---

## 📤 Como Fazer Upload para Hostinger

### Opção 1: Via FTP/File Manager (Mais Fácil)

1. **Acesse o painel da Hostinger**
2. **Vá para: Hospedagem → Gerenciador de Arquivos**
3. **Navegue até: `public_html/manu/`**
4. **Delete tudo** que tem lá (client, package.json, etc)
5. **Faça upload** de todos os arquivos da pasta `dist/public/`:
   - `index.html`
   - Pasta `assets/`
   - Pasta `images/`

### Opção 2: Via SSH (Mais Rápido)

```bash
# 1. Conecte ao servidor SSH
ssh seu_usuario@seu_servidor.com

# 2. Navegue até a pasta manu
cd public_html/manu

# 3. Delete o conteúdo antigo
rm -rf *

# 4. Faça upload dos arquivos compilados
# (Use SCP ou copie via FTP)

# 5. Verifique se ficou correto
ls -la
```

---

## 🔄 Fluxo Completo de Edição e Publicação

```
1. Editar arquivo (Home.tsx ou index.css)
   ↓
2. Salvar o arquivo
   ↓
3. Abrir terminal na pasta do projeto
   ↓
4. Rodar: npm run build
   ↓
5. Fazer upload da pasta dist/public/ para Hostinger
   ↓
6. Acessar manutencao.dominio.com.br e verificar
```

---

## 🛠️ Comandos Úteis

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala dependências (primeira vez) |
| `npm run build` | Compila para produção |
| `npm run dev` | Roda servidor local para testes (porta 3000) |
| `npm run preview` | Visualiza a versão compilada localmente |
| `npm run check` | Verifica erros de TypeScript |

---

## ⚠️ Troubleshooting

### ❌ "npm: command not found"
**Solução:** Node.js não está instalado. Baixe em https://nodejs.org/

### ❌ "Pasta dist não foi criada"
**Solução:** 
```bash
npm install
npm run build
```

### ❌ "Erro de TypeScript ao compilar"
**Solução:** Verifique se não há erros de sintaxe no arquivo editado

### ❌ "Site abre mas está quebrado/sem estilos"
**Solução:** 
1. Verifique se todos os arquivos foram feitos upload (assets/, images/, index.html)
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Verifique se o subdomínio está apontando para `public_html/manu/`

### ❌ "Imagens não aparecem"
**Solução:** 
1. Verifique se a pasta `images/` foi feita upload
2. Verifique os nomes dos arquivos (case-sensitive)
3. Limpe cache do navegador

---

## 📝 Notas Importantes

- **Nunca edite a pasta `dist/`** - ela é gerada automaticamente
- **Sempre compile antes de fazer upload** - senão as mudanças não aparecem
- **Backup:** Guarde uma cópia do projeto original antes de fazer grandes mudanças
- **Teste localmente:** Use `npm run dev` para testar antes de fazer upload

---

## 📞 Suporte Rápido

**Precisa mudar:**
- ✏️ Textos → Edite `Home.tsx`
- 🎨 Cores → Edite `index.css`
- 📸 Imagens → Substitua em `client/public/images/`
- 🔗 Links WhatsApp → Procure por `whatsappLink` em `Home.tsx`

---

**Última atualização:** Janeiro 2026
**Versão:** 1.0.0
