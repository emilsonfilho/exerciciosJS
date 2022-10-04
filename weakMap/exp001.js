const privates = new WeakMap()

function Public() {
    const me = {
        // Dados privados vem aqui
    }
    privates.set(this, me)
}

Public.prototype.method = function() {
    const me = privates.get(this)
    // Faça coisas com dado privado em `me`...
}

module.exports = Public