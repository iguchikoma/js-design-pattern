function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    // このやり方だと、instanceまいにtoStringが生成されてしまう
    // それを改善するために、Car.prototype.xxxにtoStringを定義する
    //this.toString = function () {
    //  return this.model + " has done " + this.miles + " miles " + this.year + " year";
    //};
}

Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles " + this.year + " year";
};

var toyota = new Car("toyota", 2017, 10000)
var honda = new Car("honda", 2016, 20000)

console.log( toyota.toString() );
console.log( honda.toString() );

