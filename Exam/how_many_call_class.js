'use strict';

class CLASS{
  constructor(){                                  // or -  constructor(options){this.count = options.numberstart})
    this.count = 0
  }
  countcall(){
    return (this.count += 1)
  }
  howmany(){
    return console.log('count is ', this.count )
  }
}

const myclass = new CLASS({})                   // const myclass = newCLASS({ numberstart: 0})

myclass.countcall()
myclass.countcall()
myclass.countcall()

myclass.howmany()
