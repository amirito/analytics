# Analytics
Game analitycs SDK

## Installation

Use this command:
```js
npm i @ideacompiler/analytics
```

## USAGE
1. import module
```js
import Analytics from 'analytics/src/config'; 
```

2. init Analytics
```js
const myAnalytics = new Scuti($environment);
```
> * **$environment** can be one of ( '**staging**' or '**production**')

3. Use `gameLog` method to log events
```js
myAnalytics.gameLog('myEventName', {...options })
``` 
