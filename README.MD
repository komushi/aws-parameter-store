# AWS SSM Parameter Store Library
## The purposes of this example are
* example lib to use the parameter store of the AWS SSM service

## Usage
### To put parameters
```
parameterStore.putParameters([
    {
      Name: 'globaladmin.authpass',
      Type: 'SecureString',
      Value: 'authpass001',
      Overwrite: true
    },
    {
      Name: 'globaladmin.authuser',
      Type: 'SecureString',
      Value: 'authuser001',
      Overwrite: true
    },
    {
      Name: 'globaladmin.grantuser',
      Type: 'SecureString',
      Value: 'grantuser001',
      Overwrite: true
    },
    {
      Name: 'globaladmin.grantpass',
      Type: 'SecureString',
      Value: 'grantpass001',
      Overwrite: true
    }
  ])
  .then(values => { 
        console.log(values);
      }, reason => {
        console.log(reason)
      });
```

### To get parameters
```
parameterStore.getParameters(['globaladmin.authpass', 'globaladmin.authuser', 'globaladmin.grantpass', 'globaladmin.grantuser']).then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});
```


### To remove parameters
```
parameterStore.removeParameters(['globaladmin.authpass', 'globaladmin.authuser', 'globaladmin.grantpass', 'globaladmin.grantuser']).then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});
```
