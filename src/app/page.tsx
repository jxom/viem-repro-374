import { createPublicClient, http, stringify } from "viem";
import { mainnet } from "viem/chains";
import { usdcContractConfig } from "./contracts";

const client = createPublicClient({
	chain: mainnet,
	// don't you think about stealing my test key. ;)
	transport: http(
		"https://eth-mainnet.g.alchemy.com/v2/et36uFcs0R_YeRwivkGDwrQrVzLirfVt",
		{ fetchOptions: { next: { revalidate: 0 } } },
	),
});

export default async function Home() {
	const blockNumber = await client.getBlockNumber();
	const filter = await client.createContractEventFilter({
		abi: usdcContractConfig.abi,
		address: usdcContractConfig.address,
		fromBlock: blockNumber - 10n,
		toBlock: blockNumber,
	});
	const logs = await client.getFilterLogs({
		filter,
	});
	return (
		<div>
			Block Number: {stringify(blockNumber)}
			{stringify(logs)}
		</div>
	);
}
