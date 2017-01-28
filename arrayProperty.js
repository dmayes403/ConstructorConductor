//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

// String.prototype.reverse = function(){
//   console.log('test');
//   stringArr = [];
//   string = this.split('');
//   for(var i = 0;i<string.length;i++){
//     stringArr.unshift(string[i]);
//   }
//   stringArr = stringArr.join('');
//   return stringArr;
// }
//
//
// return this.split('').reverse().join('');


String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}
