import * as React from "react";

import {
	Card,
	CardContent,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function LinkCard() {
	return (
		<Card className="">
			<CardContent className="flex pt-8">
				<div className="w-1/12"></div>
				<div className="w-8/12 flex flex-col gap-2"> 
					<a href="" className="text-xl font-bold hover:underline">https://telkomuniversity.com</a>
					<a href="" className="text-lg hover:underline text-blue-500">bit.ly/RecordOpenMindComputingGen9</a>
					<a href="" className="truncate hover:underline">
						https://telkomuniversityofficial-my.sharepoint.com/:v:/g/personal/lanislearning_student_telkomuniversittasdasdasdasdasdasdasdasdasdasdasdasdd
					</a>
          <div className="flex items-center gap-2 text-sm mt-5">
            <Calendar size={16}/>
            <span>Dec 11 2023</span>
          </div>
				</div>
				<div className="3/12"></div>
			</CardContent>
		</Card>
	);
}
