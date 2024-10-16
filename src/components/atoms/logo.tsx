import CampfyreLogo from "../icons/campfyre-logo";

export default function Logo() {
	return (
		<div className="flex justify-center items-center gap-2">
			<CampfyreLogo height={50} width={50} />
			<div className="flex text-black gap-1">
				<div className="pt-5 text-[1.5rem] font-bold">EXP</div>
				<div className="pt-5 text-[0.85rem] font-bold">news</div>
			</div>
		</div>
	);
}
