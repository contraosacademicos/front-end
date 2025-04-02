import React from "react";

const UserAreaHome = () => {
	return (
		<div className="flex w-full flex-col sm_tablet:items-center">
			<p className="text-p">HOME</p>
			<h3 className="font-heading text-h3 text-primary">
				Boas vindas, <strong>Gabriel</strong>
			</h3>

			<div className="mt-6 flex flex-col items-center rounded-3xl border border-[#716F6F] bg-[#252525]">
				<div className="w-full border-b border-[#716F6F] py-6 text-center">
					<h4 className="font-heading text-h4 text-primary">Feed</h4>
				</div>

				<div className="flex flex-col items-center gap-3 px-24 pb-24 pt-10 es_tablet:px-8">
					<div className="rounded-full bg-primary px-5 py-3">
						<h5 className="text-h5 font-semibold text-black">
							HOJE
						</h5>
					</div>

					<div className="h-10 border-r border-white/50"></div>

					<div className="flex cursor-pointer flex-col gap-5 rounded-3xl border border-[#716F6F] p-6">
						<div className="text-center">
							<p className="text-p">
								Everaldo respondeu ao seu comentário
							</p>
							<p className="text-p text-coagray">Há 5 horas</p>
						</div>

						<h5 className="text-h5 font-semibold text-primary lg_phone:text-h6">
							Eu discordo, mas também concordo em partes
						</h5>

						<div className="flex justify-center gap-5">
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Filosofia
							</button>
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Contrapartida
							</button>
						</div>
					</div>

					<div className="h-10 border-r border-white/50"></div>

					<div className="flex cursor-pointer flex-col gap-5 rounded-3xl border border-[#716F6F] p-6">
						<div className="text-center">
							<p className="text-p">
								Everaldo respondeu ao seu comentário
							</p>
							<p className="text-p text-coagray">Há 5 horas</p>
						</div>

						<h5 className="text-h5 font-semibold text-primary lg_phone:text-h6">
							Eu discordo, mas também concordo em partes
						</h5>

						<div className="flex justify-center gap-5">
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Filosofia
							</button>
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Contrapartida
							</button>
						</div>
					</div>

					<div className="h-10 border-r border-white/50"></div>

					<div className="flex cursor-pointer flex-col gap-5 rounded-3xl border border-[#716F6F] p-6">
						<div className="text-center">
							<p className="text-p">
								Everaldo respondeu ao seu comentário
							</p>
							<p className="text-p text-coagray">Há 5 horas</p>
						</div>

						<h5 className="text-h5 font-semibold text-primary lg_phone:text-h6">
							Eu discordo, mas também concordo em partes
						</h5>

						<div className="flex justify-center gap-5">
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Filosofia
							</button>
							<button className="cursor-pointer rounded-full border px-3 py-2 text-base duration-300 hover:bg-primary hover:text-gray-900">
								Contrapartida
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserAreaHome;
