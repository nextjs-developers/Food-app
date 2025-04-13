import footerImg from "@/images/Footer.png";
import Image from "next/image";

import instagramLogo from "@/icons/Footer-icon2.png";
import xLogo from "@/icons/Footer-icon3.png";
import telegramLogo from "@/icons/Footer-icon1.png";
const Footer = () => {
	return (
		<div
			className="w-full  2xl:h-[339px] h-fit grid xl:grid-cols-2 grid-cols-1 px-[70px] bg-cover"
			style={{ backgroundImage: `url(${footerImg.src})` }}
		>
			<div className="flex h-fit  my-12 2xl:gap-56 gap-36 ">
				<ul className="text-lg flex flex-col gap-4 ">
					<li className="first:text-2xl mb-2">Quick Access</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						FAQ
					</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						Mehmoni Rules
					</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						Privacy Policy
					</li>
					<li className="flex items-center gap-3">
						<Image className="cursor-pointer" src={xLogo} alt="icon" />
						<Image className="cursor-pointer" src={instagramLogo} alt="icon" />
						<Image className="cursor-pointer" src={telegramLogo} alt="icon" />
					</li>
				</ul>
				<ul className="text-lg flex flex-col gap-3.5">
					<li className="first:text-2xl mb-2">Mehmoni Branches</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						New York Branch
					</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						London Branch
					</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						Paris Branch
					</li>
					<li className="hover:text-[#417F56] transition-colors cursor-pointer">
						Turkey Branch
					</li>
				</ul>
			</div>
			<div className="lg:grid hidden h-fit mt-12 grid-cols-2">
				<h1 className="col-span-2 text-2xl mb-7">Message to Mehmoni</h1>
				<div>
					<div className="flex flex-col gap-3">
						<input
							className="w-[276px]  h-[40px] rounded border border-[#717171] px-2 placeholder:text-white"
							type="text"
							placeholder="Name"
						/>
						<input
							className="w-[276px]  h-[40px] rounded border border-[#717171] px-2 placeholder:text-white"
							type="text"
							placeholder="Phone"
						/>
						<input
							className="w-[276px]  h-[40px] rounded border border-[#717171] px-2 placeholder:text-white"
							type="text"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="flex flex-col ">
					<textarea
						placeholder="your message..."
						className="w-[286px]  h-[144px] p-2 resize-none rounded border border-[#717171] px-2 placeholder:text-white"
					/>
					<button className="w-[183px] h-[40px] mt-3 cursor-pointer hover:bg-[#417F56] transition-colors rounded border border-[#717171]">
						Send message
					</button>
				</div>
			</div>

		</div>
	);
};

export default Footer;
