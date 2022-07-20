# OneAddress

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat help
```


## How to Deploy ?

prepare:
```
yarn install
npx hardhat compile
```
and run:

```sh
npx hardhat run ./scripts/deploy.js --network 'target network'
```

## Single-use Registry Deployment Account

```text
0x9f90E444AfeAbf6EEF2F090060d90450579ecA88
```

This account is generated by reverse engineering it from its signature for the transaction. This way no one knows the private key, but it is known that it is the valid signer of the deployment transaction.

>To deploy the registry, 0.0521266 ether MUST be sent to this account first.


## Registry Contract Address

```text
0x902B3f3C384E9f77dbb0D4bBDCB0b1DF022171D4
```

The contract has the address above for every chain on which it is deployed.

<details><summary>singed deploy contract transaction</summary>


```text
0xf908f98085174876e8008307f4328080b908a6608060405234801561001057600080fd5b50610886806100206000396000f3fe60806040526004361061003f5760003560e01c806308508b8f1461004457806364e030871461009f57806385cf97ab146100d7578063a49a7c90146100f7575b600080fd5b34801561005057600080fd5b5061008a61005f366004610731565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100b26100ad366004610767565b610117565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610096565b3480156100e357600080fd5b506100b26100f2366004610767565b61054f565b34801561010357600080fd5b506100b26101123660046107e3565b61065b565b600083606081901c33148061014c57507fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008116155b610203576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604560248201527f496e76616c69642073616c74202d206669727374203230206279746573206f6660448201527f207468652073616c74206d757374206d617463682063616c6c696e672061646460648201527f726573732e000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b600084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604051949550933093508a925061025391508590602001610805565b604051602081830303815290604052805190602001206040516020016102d9939291907fff00000000000000000000000000000000000000000000000000000000000000815260609390931b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830191909152603582015260550190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012073ffffffffffffffffffffffffffffffffffffffff811660009081529283905291205490915060ff16156103c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f496e76616c696420636f6e7472616374206372656174696f6e202d20636f6e7460448201527f726163742068617320616c7265616479206265656e206465706c6f7965642e0060648201526084016101fa565b81602001825188818334f595505050833b6103df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146104c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604660248201527f4661696c656420746f206465706c6f7920636f6e7472616374207573696e672060448201527f70726f76696465642073616c7420616e6420696e697469616c697a6174696f6e60648201527f20636f64652e0000000000000000000000000000000000000000000000000000608482015260a4016101fa565b73ffffffffffffffffffffffffffffffffffffffff84166000818152602081815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815192835282018990527f94bfd9af14ef450884c8a7ddb5734e2e1e14e70a1c84f0801cc5a29e34d26428910160405180910390a15050509392505050565b600030848484604051602001610566929190610840565b604051602081830303815290604052805190602001206040516020016105ec939291907fff00000000000000000000000000000000000000000000000000000000000000815260609390931b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830191909152603582015260550190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012073ffffffffffffffffffffffffffffffffffffffff811660009081529283905291205490915060ff1615610654575060005b9392505050565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b1660218201526035810183905260558101829052600090607501604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152815160209283012073ffffffffffffffffffffffffffffffffffffffff811660009081529283905291205490915060ff161561072b575060005b92915050565b60006020828403121561074357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461065457600080fd5b60008060006040848603121561077c57600080fd5b83359250602084013567ffffffffffffffff8082111561079b57600080fd5b818601915086601f8301126107af57600080fd5b8135818111156107be57600080fd5b8760208285010111156107d057600080fd5b6020830194508093505050509250925092565b600080604083850312156107f657600080fd5b50508035926020909101359150565b6000825160005b81811015610826576020818601810151858301520161080c565b81811115610835576000828501525b509190910192915050565b818382376000910190815291905056fea2646970667358221220c1e1377af5b8ce3165535f5f0341fc93a33849fcea550124db77e8bcf62b8e4064736f6c634300080f00331ba01820182018201820182018201820182018201820182018201820182018201828a01820182018201820182018201820182018201820182018201820182018201828
```

</details>


