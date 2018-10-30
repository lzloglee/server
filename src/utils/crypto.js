import crypto from 'crypto';

const aesEncrypt = (data, key) => {
    const cipher = crypto.createCipher('aes192', key)
    let aesEn = cipher.update(data, 'utf8', 'hex')
    aesEn += cipher.final('hex')
    return aesEn
}
const aesDecrypt = (aesEn, key) => {
    const deCipher = crypto.createDecipher('aes192', key)
    let deAes = deCipher.update(aesEn, 'hex', 'utf8')
    deAes += deCipher.final('utf8')
    return deAes
}
export {
    aesEncrypt,
    aesDecrypt
}