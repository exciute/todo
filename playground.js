var request = function(url, cb) {
    return new Promise((resolve, reject) => {
      resolve(111);
    });
};


/a/123/b/§123/dd


request('a').then((response) => {
  return request('a/' + response.id + '/b/');
}).then((response) => {
  return request('a/' + response.id + '/b/' + response.id + '/c/');
}).then((response) => {
  return request('a/' + response.id + '/b/' + response.id + '/c/');
}).catch((e) => {
  console.log(e);
});


(async () => {
  let response = request('a/' + response.id + '/b/');
  response.then(function() => {
    console.
  })
  response = await request('a/' + response.id + '/b/');
})();


let promises = [];
for (let i= 0; i< 100 ;i++) {
  promises.push(requeter());
}
await Promise.all(promises);


let i = 0;

request('/a/', function(response) {
  request('/a/' + response.id + '/b/', function(response) {
    request('/a/' + response.id + '/b/' + response.id + '/c/', function(response) {
      request('/a/' + response.id + '/b/' + response.id + '/c/' + response.id + '/d/', function(response) {
        i++;
        if (i === 2) {
          console.log('prca');
        }
      });
    });
  });
});

request('/a/', function(response) {
  request('/a/' + response.id + '/b/', function(response) {
    request('/a/' + response.id + '/b/' + response.id + '/c/', function(response) {
      request('/a/' + response.id + '/b/' + response.id + '/c/' + response.id + '/d/', function(response) {
        i++;
        if (i === 2) {
          console.log('prca');
        }
      });
    });
  });
});

console.log('aaaaa');

(new Promise((resolve, reject) => {
  resolve(response);
  //reject()
})).then((response) => {

}).then((response) => {

})
