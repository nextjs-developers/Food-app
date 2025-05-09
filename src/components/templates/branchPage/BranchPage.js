"use client";
import Link from "next/link";
import BranchMenu from "./BranchMenu";

const BranchPage = () => {

	return (
		<main className="w-full">
			<BranchMenu title={"SPECIAL OFFER"} bgColor={"#ffffff"} titleColor={"#353535"}/>
			<BranchMenu title={"POPULAR FOODS"} bgColor={"#417F56"} titleColor={"#ffffff"} />
			<BranchMenu title={"ITALIAN FOODS"} bgColor={"#ffffff"} titleColor={"#353535"}/>
      <div className="w-full flex justify-center">

      <Link href={"/"} className="border border-primary text-primary px-4 py-1 rounded-sm my-6 cursor-pointer hover:bg-primary hover:text-white transition-colors">See All Menus</Link>
      </div>
		</main>
	);
};

export default BranchPage;
