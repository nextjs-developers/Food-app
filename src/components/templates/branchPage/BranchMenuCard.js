import Image from "next/image";
const BranchMenuCard = ({data}) => {
	return (
		<div
			className="flex flex-col w-[288px] h-fit rounded-lg overflow-hidden"
			key={data.id}
		>
			<Image
				className="w-full h-[200px]"
				width={200}
				height={200}
				src={data.image}
				alt="image"
			/>
			<div className="px-2 pb-2 border border-t-0 border-[#cbcbcb] rounded-b-lg">
				<h1
					title={data.title}
					className="text-center my-3 text-[#353535] text-xl font-semibold w-full truncate"
				>
					{data.title}
				</h1>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<p className="text-[#C30000] bg-[#FFF2F2] rounded-full font-semibold px-2">
							%{data.discount}
						</p>
						<p className="text-[#adadad] line-through">{data.price}$</p>
					</div>
					<p>Add to favorite</p>
				</div>
				<div className="flex items-center justify-between mt-2">
					<p className="text-lg text-[#353535]">{data.priceAfterDiscount}$</p>
					<p className="text-[#adadad]">(rate 33)</p>
				</div>
				<button className="mt-2 w-full h-10 text-white bg-[#417F56] rounded-sm text-lg font-semibold">
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default BranchMenuCard;
