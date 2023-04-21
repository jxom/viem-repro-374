export const usdcContractConfig = {
	address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
	abi: [
		{
			type: "event",
			name: "Approval",
			inputs: [
				{
					indexed: true,
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					name: "spender",
					type: "address",
				},
				{
					indexed: false,
					name: "value",
					type: "uint256",
				},
			],
		},
		{
			type: "event",
			name: "Transfer",
			inputs: [
				{
					indexed: true,
					name: "from",
					type: "address",
				},
				{
					indexed: true,
					name: "to",
					type: "address",
				},
				{
					indexed: false,
					name: "value",
					type: "uint256",
				},
			],
		},
		{
			type: "function",
			name: "allowance",
			stateMutability: "view",
			inputs: [
				{
					name: "owner",
					type: "address",
				},
				{
					name: "spender",
					type: "address",
				},
			],
			outputs: [{ type: "uint256" }],
		},
		{
			type: "function",
			name: "approve",
			stateMutability: "nonpayable",
			inputs: [
				{
					name: "spender",
					type: "address",
				},
				{
					name: "amount",
					type: "uint256",
				},
			],
			outputs: [{ type: "bool" }],
		},
		{
			type: "function",
			name: "balanceOf",
			stateMutability: "view",
			inputs: [
				{
					name: "account",
					type: "address",
				},
			],
			outputs: [{ type: "uint256" }],
		},
		{
			type: "function",
			name: "decimals",
			stateMutability: "view",
			inputs: [],
			outputs: [{ type: "uint8" }],
		},
		{
			type: "function",
			name: "name",
			stateMutability: "view",
			inputs: [],
			outputs: [{ type: "string" }],
		},
		{
			type: "function",
			name: "symbol",
			stateMutability: "view",
			inputs: [],
			outputs: [{ type: "string" }],
		},
		{
			type: "function",
			name: "totalSupply",
			stateMutability: "view",
			inputs: [],
			outputs: [{ type: "uint256" }],
		},
		{
			type: "function",
			name: "transfer",
			stateMutability: "nonpayable",
			inputs: [
				{
					name: "recipient",
					type: "address",
				},
				{
					name: "amount",
					type: "uint256",
				},
			],
			outputs: [{ type: "bool" }],
		},
		{
			type: "function",
			name: "transferFrom",
			stateMutability: "nonpayable",
			inputs: [
				{
					name: "sender",
					type: "address",
				},
				{
					name: "recipient",
					type: "address",
				},
				{
					name: "amount",
					type: "uint256",
				},
			],
			outputs: [{ type: "bool" }],
		},
		{
			type: "function",
			name: "increaseAllowance",
			stateMutability: "nonpayable",
			inputs: [
				{
					name: "spender",
					type: "address",
				},
				{
					name: "addedValue",
					type: "uint256",
				},
			],
			outputs: [{ type: "bool" }],
		},
		{
			type: "function",
			name: "decreaseAllowance",
			stateMutability: "nonpayable",
			inputs: [
				{
					name: "spender",
					type: "address",
				},
				{
					name: "subtractedValue",
					type: "uint256",
				},
			],
			outputs: [{ type: "bool" }],
		},
	],
} as const;
