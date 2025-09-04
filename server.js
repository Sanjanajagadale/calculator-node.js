
 const setting =require('./config/setting')

 console.log(setting.port)



// const {addition} =require('./math')

const Math =require('./math')
 n1=10
 n2=20
  //sum=addition(n1,n2)

  sum =Math.addition(n1,n2)

  console.log(`Addition : ${n1} and ${n2} is ${sum}`)


  console.log(`subtraction :${n1} from ${n2} ${Math.subtrsction(n2,n1)}  `)

  console.log(`multiplication :${n1} from ${n2} ${Math.multiplication(n2,n1)} `)

    console.log(`division :${n1} from ${n2} ${Math.division(n2,n1)} `)
