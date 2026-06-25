# 📘 Exercícios de Lógica com Testes

Este projeto contém uma sequência de exercícios de lógica de programação usando JavaScript/TypeScript e testes automatizados com `node:test`.

O objetivo é que o aluno implemente as funções até que todos os testes passem.

---

# 🚀 Como rodar os testes

Execute todos os testes:

```bash
npm run test
```

Para executar um por vez:
```bash
npm run test -- tests/nome.test.ts
```

---

# 📁 Estrutura do projeto

index.ts   -> onde você implementa as funções

tests/                    -> arquivos de teste

helpers.ts                  -> funções auxiliares (quando necessário)

---

# 🧪 Regra principal

- Os testes já estão prontos
- Sua missão é fazer as funções passarem em todos eles
- Não altere os testes

---

# 📌 Convenções dos testes

- Usamos `node:test`
- Usamos `node:assert/strict`
- Sempre utilizamos `assert.deepStrictEqual`
- Em alguns testes usamos o [Faker.js](https://www.npmjs.com/package/@faker-js/faker) para gerar dados aleatórios e evitar soluções “fixas”
- Funções devem retornar:
  - valores corretos quando possível
  - mensagens de erro quando a entrada for inválida
