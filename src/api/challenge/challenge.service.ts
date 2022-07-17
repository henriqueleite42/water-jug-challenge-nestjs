import { BadRequestException, Injectable } from "@nestjs/common";
import { solve } from "@techmmunity/water-jug-solver";

import type { WaterJugDto } from "./dtos/water-jug";

@Injectable()
export class ChallengeService {
	public solve(params: WaterJugDto) {
		const result = solve(params);

		if (!result.solvable) {
			throw new BadRequestException("Unsolvable");
		}

		return result;
	}
}
