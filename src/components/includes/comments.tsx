import Image from "next/image";

import favoriteIcon from "@/assets/icons/favorite-icon.svg";

import { ButtonFill } from "../core/buttons/button-fill";

const Comments = () => {
	return (
		<div
			className="flex w-full max-w-[948px] flex-col gap-4 rounded-lg bg-[#232323] p-6"
			id="comentarios"
		>
			<h2 className="text-h6 font-semibold text-coagray">Discussões</h2>

			<div className="border-b border-dashed border-[#9A9A9A]"></div>

			<div className="flex flex-col gap-6">
				<div className="w-full">
					<div className="flex flex-col gap-6 space-y-2 rounded-lg bg-[#343434] p-6">
						<div className="flex items-center justify-between">
							<div className="flex flex-col gap-2">
								<span className="font-medium">$name_user</span>
								<span className="text-p text-coagray">
									Há 19 minutos atrás
								</span>
							</div>
							<div className="flex cursor-pointer items-center space-x-1 rounded-full bg-[#525252] px-2 py-1">
								<span className="text-p">12</span>
								<Image
									src={favoriteIcon}
									width={15}
									height={15}
									alt="favoriteIcon"
								/>
							</div>
						</div>
						<p className="text-p">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Duis eu est porta, placerat lacus non,
							tristique sem. Integer purus tortor, congue vitae
							elementum ac, maximus sit amet elit.
						</p>
						<div className="border-b border-dashed border-[#9A9A9A]"></div>
						<div className="flex justify-between">
							<ButtonFill>Responder</ButtonFill>
							<ButtonFill>Denunciar</ButtonFill>
						</div>
					</div>

					<div className="mt-4 border-l-2 border-coagray/30 pl-24">
						<div className="flex flex-col gap-6 space-y-2 rounded-lg bg-[#343434] p-6">
							<div className="flex items-center justify-between">
								<div className="flex flex-col gap-2">
									<span className="font-medium">
										$name_user
									</span>
									<span className="text-p text-coagray">
										Há 19 minutos atrás
									</span>
								</div>
								<div className="flex cursor-pointer items-center space-x-1 rounded-full bg-[#525252] px-2 py-1">
									<span className="text-p">12</span>
									<Image
										src={favoriteIcon}
										width={15}
										height={15}
										alt="favoriteIcon"
									/>
								</div>
							</div>
							<p className="text-p">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Duis eu est porta, placerat
								lacus non, tristique sem. Integer purus tortor,
								congue vitae elementum ac, maximus sit amet
								elit.
							</p>
							<div className="border-b border-dashed border-[#9A9A9A]"></div>
							<div className="flex justify-between">
								<ButtonFill>Responder</ButtonFill>
								<ButtonFill>Denunciar</ButtonFill>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					<div className="flex flex-col gap-6 space-y-2 rounded-lg bg-[#343434] p-6">
						<div className="flex items-center justify-between">
							<div className="flex flex-col gap-2">
								<span className="font-medium">$name_user</span>
								<span className="text-p text-coagray">
									Há 19 minutos atrás
								</span>
							</div>
							<div className="flex cursor-pointer items-center space-x-1 rounded-full bg-[#525252] px-2 py-1">
								<span className="text-p">12</span>
								<Image
									src={favoriteIcon}
									width={15}
									height={15}
									alt="favoriteIcon"
								/>
							</div>
						</div>
						<p className="text-p">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Duis eu est porta, placerat lacus non,
							tristique sem. Integer purus tortor, congue vitae
							elementum ac, maximus sit amet elit.
						</p>
						<div className="border-b border-dashed border-[#9A9A9A]"></div>
						<div className="flex justify-between">
							<ButtonFill>Responder</ButtonFill>
							<ButtonFill>Denunciar</ButtonFill>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="w-full">
					<textarea
						className="w-full resize-none rounded-md bg-[#525252] p-3 placeholder:text-coagray focus:outline-none focus:ring-1 focus:ring-primary"
						placeholder="Adicione um comentário..."
						rows={3}
					/>
					<div className="mt-2 flex justify-end">
						<ButtonFill className="border border-primary bg-primary">
							Comentar
						</ButtonFill>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comments;
