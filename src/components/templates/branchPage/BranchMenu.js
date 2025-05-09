import { branchesMenu } from "src/constant/branchesMenu";
import BranchMenuCard from "./BranchMenuCard";
import { useRef, useState } from "react";

const BranchMenu = ({title, bgColor , titleColor}) => {
	const [isAtLeft, setIsAtLeft] = useState(true);
	const [isAtRight, setIsAtRight] = useState(false);
	const containerRef = useRef(null);

	const scrollLeft = () => {
		if (containerRef.current.scrollLeft !== 0) {
			setIsAtLeft(false);
			setIsAtRight(false);
			if (containerRef.current) {
				containerRef.current.scrollBy({
					left: -305,
					behavior: "smooth",
				});
			}
		} else {
			setIsAtLeft(true);
		}
	};

	const scrollRight = () => {
		if (containerRef.current.scrollLeft !== 1524) {
			setIsAtRight(false);
			setIsAtLeft(false);
			if (containerRef.current) {
				containerRef.current.scrollBy({
					left: 305,
					behavior: "smooth",
				});
			}
		} else {
			setIsAtRight(true);
		}
	};
	return (
		<div style={{backgroundColor: bgColor}} className="mt-13 py-10 px-[72px]">
			<h1 style={{color: titleColor}} className="text-xl font-semibold  mb-4">
				{title}
			</h1>
			<div className="relative">
				<button
					disabled={isAtLeft}
					onClick={scrollLeft}
					className={`h-8 w-8 absolute top-[50%] tranlate-y-[-50%] left-0 z-20 translate-x-[-50%]
                border rounded-sm shadow-sm transition-colors ${
									isAtLeft
										? "bg-gray-200 border-[#cccccc] text-[#cccccc] cursor-not-allowed"
										: "bg-white border-[#adadad] text-black hover:bg-[#417F56] cursor-pointer "
								}`}
				>
					{"<"}
				</button>
				<div
					ref={containerRef}
					className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar  w-full"
				>
					{branchesMenu.slice(2, 10).map((item) => (
						<BranchMenuCard key={item.id} data={item} />
					))}
				</div>
				<button
					disabled={isAtRight}
					onClick={scrollRight}
					className={`h-8 w-8 absolute top-[50%] tranlate-y-[-50%] right-0 z-20 translate-x-[+50%]
             border rounded-sm shadow-sm transition-colors ${
								isAtRight
									? "bg-gray-200 border-[#cccccc] text-[#cccccc] cursor-not-allowed"
									: "bg-white border-[#adadad] text-black hover:bg-[#417F56] cursor-pointer "
							}`}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default BranchMenu;
