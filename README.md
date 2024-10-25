
# Sistema de Mensageria com RabbitMQ

Este projeto é um exemplo básico de implementação de um sistema de mensageria usando RabbitMQ. Ele inclui um produtor que envia mensagens para uma fila e um consumidor que processa essas mensagens.

## Pré-requisitos

- Node.js instalado
- Docker instalado
- RabbitMQ rodando em um contêiner Docker

## Como rodar a aplicação

### 1. Subir o RabbitMQ

Execute o seguinte comando para rodar o RabbitMQ no Docker:

```bash
docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

Acesse o painel de controle do RabbitMQ em [http://localhost:15672](http://localhost:15672) com as credenciais padrão:
- Usuário: `guest`
- Senha: `guest`

### 2. Instalar dependências

Na raiz do projeto, instale as dependências necessárias rodando:

```bash
npm install
```

### 3. Rodar o produtor

Para rodar o produtor, execute:

```bash
node producer.js
```

Isso vai iniciar o servidor Express que envia mensagens para a fila RabbitMQ.

### 4. Rodar o consumidor

Em outro terminal, rode o consumidor para processar as mensagens:

```bash
node consumer.js
```

O consumidor vai ficar ouvindo a fila e processar as mensagens assim que elas forem enviadas.

### 5. Enviar uma mensagem

Você pode enviar uma mensagem para a fila fazendo uma requisição POST para:

``http://localhost:3000/send``

## Arquivos

- **producer.js**: Código do produtor que envia mensagens para a fila.
- **consumer.js**: Código do consumidor que processa as mensagens da fila.
- **concepts.txt**: Resumo dos principais conceitos de mensageria.
