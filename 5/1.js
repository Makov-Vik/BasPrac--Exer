'use strict'

const seq = a => b =>
 typeof b !== 'number' ? seq(x => a(b(x))) : console.log(a(b)) 

seq(x => x + 7)(x => x * 2)(5)
