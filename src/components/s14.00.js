var b = [1,2,3];
// c = [4].concat(b);

// c = [4,...b];

// c = [...b.slice(0,2),4,...b.slice(2)];

var obj = {name: 'Minh', gfs: ['Trang', 'Linh']};

c = Object.assign({}, obj);

c.name='Thong';

// console.log(b)
console.log(obj);
console.log(c);

c = {...obj, name: 'Dat'}
console.log(obj);
console.log(c);

var dat = {...obj, name: 'Dat', gfs: [...obj.gfs, 'Lan']}
console.log(obj);
console.log(dat);