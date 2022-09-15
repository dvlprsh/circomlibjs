import poseidon from "./poseidon.js"
import buildPoseidonOpt from "./poseidon_opt.js";

(async () => {
    const poseidonOpt = await buildPoseidonOpt();
    const result2 = poseidonOpt([1, 2])
    //const result3 = poseidonOpt.F([1, 2])
    const hi = poseidonOpt.F.e("0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a");
    console.log('current poseidon result -- ', result2, result2.toString('hex'));
})()

const result = poseidon([1, 2])


console.log('prev poseidon result -- ', result)