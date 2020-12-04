const {input} = require('./input') 

const sum2020 = (a, b, c)=>{
    return a+b+c ===2020
}
const iterate = (receipt) => {
    for (let i=0; i<receipt.length; i++){
        for (let j=0; j<receipt.length; j++) {
            for (let k=0; k<receipt.length; k++) {
                if(sum2020(receipt[i], receipt[j], receipt[k])) {
                    return receipt[i]*receipt[j]*receipt[k]
                }
            }
        }
    }
}
console.log(iterate(input))

// export default {
//     sum2020
// }