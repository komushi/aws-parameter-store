const ParameterStore = require('../lib/index.js');

const parameterStore =
	new ParameterStore("ap-northeast-1");


// parameterStore.putParameters([
// 		{
// 			Name: 'globaladmin.authpass',
// 			Type: 'SecureString',
// 			Value: 'authpass001',
// 			Overwrite: true
// 		},
// 		{
// 			Name: 'globaladmin.authuser',
// 			Type: 'SecureString',
// 			Value: 'authuser001',
// 			Overwrite: true
// 		},
// 		{
// 			Name: 'globaladmin.grantuser',
// 			Type: 'SecureString',
// 			Value: 'grantuser001',
// 			Overwrite: true
// 		},
// 		{
// 			Name: 'globaladmin.grantpass',
// 			Type: 'SecureString',
// 			Value: 'grantpass001',
// 			Overwrite: true
// 		}
// 	])
// 	.then(values => { 
// 	      console.log(values);
// 	    }, reason => {
// 	      console.log(reason)
// 	    });


// parameterStore.getParameters(['globaladmin.authpass', 'globaladmin.authuser', 'globaladmin.grantpass', 'globaladmin.grantuser']).then((response) => {
//   console.log(response);
// }).catch((err) => {
//   console.log(err);
// });

// parameterStore.removeParameters(['globaladmin.authpass', 'globaladmin.authuser', 'globaladmin.grantpass', 'globaladmin.grantuser']).then((response) => {
//   console.log(response);
// }).catch((err) => {
//   console.log(err);
// });
