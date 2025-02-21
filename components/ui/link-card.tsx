import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Edit, Trash } from "lucide-react";
import CopyButton from "../copy-button";
import { Button } from "./button";
import Link from "next/link";

export function LinkCard() {
	return (
		<Card className="">
			<CardContent className="flex flex-wrap justify-between pt-8 gap-3">
				<div className="max-w-[400px] lg:max-w-[600px] xl:max-w-[600px] 2xl:max-w-[900px]  flex flex-col gap-2">
					<a href="" className="text-xl font-bold hover:underline">
						https://telkomuniversity.com
					</a>
					<a href="" className="text-lg hover:underline text-blue-500">
						snippy.com/RecordOpenMindComputingGen9
					</a>
					<a href="" className="truncate hover:underline">
						https://telkomuniversity.com/asbdasbdaskdbaskjdbajsdadusdhasuidhaiassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
					</a>
					<div className="flex items-center gap-2 text-sm mt-5">
						<Calendar size={16} />
						<span>Dec 11 2023</span>
					</div>
				</div>
				<div className="flex flex-wrap gap-2 justify-end">
					<CopyButton link="https://telkomuniversity.com" />
					<Link href="/section/links/edit">
						<Button>
							<Edit/>
							Edit
						</Button>
					</Link>
					<Button>
						<Trash/>
						Delete
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
