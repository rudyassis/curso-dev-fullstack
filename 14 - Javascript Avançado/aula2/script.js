/*

HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do
Javascript de mover as declarações para
o topo.

*/


function teste() {
    function outraFuncao () {
        console.log('eu sou a outra função!')
    }

    outraFuncao()
}

teste()