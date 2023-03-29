# solid-api
API Node + Typescript
based: https://www.youtube.com/watch?v=vAV4Vy4jfkc&ab_channel=Rocketseat

Using package by feature pattern
Using SOLID principle
Using unit tests

## step 0: setup
yarn init -y
yarn add express
yarn add @types/express -D
yard add typescript ts-node-dev -D
yarn add nodemon -D
yarn tsc --init

## step 1: folder organization
create /src
create /src/server.ts + /src/app.ts

## step 2: create entities
create /entities
create /entities/User.ts

yarn add uuidv4

## step 3: create first use case
create /useCases
create /useCases/CreateUser
create /useCases/CreateUser/CreateUserController.ts
create /useCases/CreateUser/CreateUserDTO.ts
create /useCases/CreateUser/CreateUserUseCase.ts
create /useCases/CreateUser/CreateUserUseCase.spec.ts

## step 4: create repository
create /repositories
create /repositories/IUsersRepository.ts
create /repositories/implementations

# step 5: create mail provider
create /providers
create /providers/IMailProvider.ts
create /providers/implementations
create /providers/implementations/MailtrapMailProvider.ts

yarn add nodemailer
yarn add @types/nodemailer -D