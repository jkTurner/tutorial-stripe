import Checkout from "./components/Checkout";
 
export default function Home() {
 
	const amount = 99.99;
 
	return (
		<div className="flex flex-col items-center w-full max-w-[1280px] min-h-[100vh] mx-auto">
			<div className="flex flex-col gap-[24px] w-full max-w-[600px] p-[24px] mt-[40px] bg-white rounded-lg">
 
					<div className="flex w-full justify-between items-center">
						<span className="text-violet-400">Grape</span>
						<button 
							className="py-[8px] px-[16px] bg-violet-400 rounded-lg text-white"
							>Price: {amount}</button>
					</div>
					<Checkout amount={amount} />
				
			</div>
			
		</div>
	);
}