var bnc = require('composer-client').BusinessNetworkConnection;

let _bnc = new bnc();

_bnc.connect('admin@tutorial-network').then(function (bnd) {
    console.log(bnd)
})

// _bnc.getAllAssetRegistries().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })