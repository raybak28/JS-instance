
function Collection() {
  this.arr = [];
    }


// collection methods
Collection.prototype.values = function () {
    return this.arr;
};

Collection.prototype.at = function() {
    if ((arguments[0] > 0) && (arguments[0] <= this.arr.length)) {
        return this.arr[arguments[0] - 1];
    }
    else {
        return null;
    }
};

Collection.prototype.append = function () {
    if (arguments[0] instanceof Collection) {
        this.arr = this.arr.concat(arguments[0].values());
    } else {
    this.arr = this.arr.concat(arguments[0]);
    }

    return this.arr;
};

Collection.prototype.removeAt = function() {
    if ((arguments[0] > 0) && (arguments[0] <= this.arr.length)) {
        this.arr.splice(arguments[0] - 1, 1);
        return true;
    } else {
        return false;
    }

};


Collection.prototype.count = function() {
    if (this.arr.length > 0){
     return this.arr.length;
    } else {
        return 0;
    }

};


 // create collection from the array 
 
Collection.from = function () {
    var collection = new Collection();

    for (var i=0; i<arguments.length; i++) {
    collection.arr = collection.arr.concat(arguments[i]);
    }

    //}

    return collection;

};

//*****************************************************************************  Check ***********************************************************************************


// Создаем коллекцию чисел
var numbers = new Collection();
numbers.append(10);
numbers.append(20);

console.log(numbers.count());  //2
console.log(numbers.values()); //[10, 20]

// Создаем коллекцию букв
var letters = Collection.from(['a', 'b', 'c']);
letters.append('d');

console.log(letters.count());  //4
console.log(letters.values()); //['a', 'b', 'c', 'd']

// Смешиваем обе коллекции
var items = new Collection();
items.append(numbers);
items.append(letters);

console.log(items.count());  //6
console.log(items.values()); // [10, 20, 'a', 'b', 'c', 'd']

// Проверяем получение элемента
console.log(items.at(0)); // null
console.log(items.at(1)); // 10
console.log(items.at(3)); // 'a'
console.log(items.at(6));  // 'd'

// Проверяем удаление
console.log(items.removeAt(0)); // false
console.log(items.removeAt(2)); // true
console.log(items.removeAt(5)); // true

console.log(items.values());  // [10, 'a', 'b', 'c']

