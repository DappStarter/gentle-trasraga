require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess clock other sugar fan riot sister common include arctic success gift'; 
let testAccounts = [
"0x656d7c6fea941ada751ea523dc7fc83d0fe688bf3a05a6f48e79c3ca4127be82",
"0x7c73795bc5f238c580f88d218cac4a0a4ecdebb4ee606649aa518cb181fb0845",
"0x24d18c493c01ea6122fb28a9779c25feae4a96391326e43be69b9e359bfdc0eb",
"0xc3df64a30465a2dfd35227613f222818ebe55c709541babdc037142cc2557695",
"0xbd848cf5871f1d64a7dd2a3197788e087419539dfcb85611c2ffabdbd8b3e4eb",
"0xf3392b4d19c6266c5de62c9eba5eb860098c35c53518a6600dc361fbeef4e95a",
"0xb2a1b7c896048daf3b040121bf502265523ded7430a3e11c2d3cfd92ed5c87c0",
"0xddab58ee672fbd3cbd952770ea20a138f44429b6cf9e0b1f58314652da456a01",
"0x8d4fa5fdedda63138b0760d97fc1a1e21d5b6a7a5e5d44bc185bdd34fe27b357",
"0xe9cf938e774a3b339f6ac3cad538a0db2c3903344ec0daee964acfb6d61fa266"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

