#ENV - Environment Variable

Simple way to parse and load .env files for node.js

##Usage

Create a .env file in the root of your project. For exemplo:

```
PORT=3000
HOSTNAME=test
DB_USER=test
DB_PASS=123456
```

##In your code

```javascript
require('./path-to-env.js').config('./path-to-your/.env');

console.log(process.env.PORT); // "3000"
```