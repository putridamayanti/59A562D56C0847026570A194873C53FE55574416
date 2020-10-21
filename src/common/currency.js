export function formatToRupiah(amount) {
    var	reverse = amount.toString().split('').reverse().join(''),
        result 	= reverse.match(/\d{1,3}/g)
        result	= result.join('.').split('').reverse().join('')

    return 'Rp ' + result
}
