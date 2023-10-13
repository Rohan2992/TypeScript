# Why TypeScript

- Superset of JS
- Statically typed
- Makes code more strict
- functions in ts
- Making a calculator

### TypeScript never runs the TS file it only converts the ts file to the js file with the strict mode enabled (using TS compiler)

- it only throws a compilation error

# tsc --init

- creates a config file to TS - it tells how strict our TS file should be...
- esnext - latest version of JS
- interfaces can be implemented by classes whereas types don't
- type
- type allows to do unions and ors
- Types cannot be extended
- A interface can extend a type whereas vice-versa is not allowed.

# Type inference - it is the mechanism by which ts automatically infer the return type of a function and variables

- try making the variable as number or string in ts

# Backend validation

- can be done sending the wrong inputs or exposing the folders to the end-user

  - system("ls") - c++ code #include<cstdlib> - to import system library

- frontend - npm run , node dis , npm run start
- backend - tsc node dist/index.js

- Input Validation

TRPC - used to add backend validations and send them to frontend

# Process Managers

- these runs the backend automatically when it goes down
- modules - forever & pm2
- pm2 start file_name // pm2 logs // pm2 list // pm2 kill

# using the zod library


# Backend validation

- can be done sending the wrong inputs or exposing the folders to the end-user

  - system("ls") - c++ code #include<cstdlib> - to import system library

- frontend - npm run , node dis , npm run start
- backend - tsc node dist/index.js

- Input Validation

- By adding some conditions manually in the starting of the routes

TRPC - used to add backend validations and send them to frontend - allows to write types in backend and send them to frontend

# Process Managers

- these runs the backend automatically when it goes down
- modules - forever & pm2
- pm2 start file_name // pm2 logs // pm2 list // pm2 kill

# using the zod library

-
