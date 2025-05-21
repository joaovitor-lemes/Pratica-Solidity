const crypto = require('crypto');

// Gerar um par de chaves Pública e Privada RSA

const {publickey, privatekey} = crypto.generateKeyPairSync('rsa', { modulusLength: 4096, publicKeyEncoding: { type: 'spki'}})

// Assinando uma mensagem

const message = 'Esta é uma mensagem de teste';
console.log('Mensagem original:', message);

// Criando um Hash da Mensagem

const hash = crypto.createHash('sha256').update(message).digest();
console.log("\nHash da mensagem: ", hash.toString('hex'));

// Assinando o Hash

const signature = crypto.sign('sha256', hash, privatekey);
console.log("\nAssinatura da mensagem: ", signature.toString('hex'));

// Verificando a assinatura

const isVerified = crypto.verify('sha256', hash, publickey, signature);
console.log("\nA assinatura é válida?", isVerified);

