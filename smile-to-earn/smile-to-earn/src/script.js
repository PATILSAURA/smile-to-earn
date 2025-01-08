if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'dweb.link' });
const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
const abi = [
    {
        "constant": false,
        "inputs": [
            { "name": "imageHash", "type": "string" }
        ],
        "name": "submitSmile",
        "outputs": [{ "name": "", "type": "bool" }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contract = new web3.eth.Contract(abi, dweb.link);
const accounts = await web3.eth.getAccounts(dweb.link);

// Call the submitSmile function to store the image hash and reward the user
await contract.methods.submitSmile(imageHash).send({ from: accounts[0] });
