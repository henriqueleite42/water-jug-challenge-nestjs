import { Controller, Get, Query } from "@nestjs/common";
import {
	ApiBadRequestResponse,
	ApiOkResponse,
	ApiQuery,
	ApiTags,
} from "@nestjs/swagger";

import { ChallengeService } from "./challenge.service";
import { WaterJugDto, WaterJugOutput } from "./dtos/water-jug";

@ApiTags("Challenge")
@Controller("challenges")
export class ChallengeController {
	public constructor(private readonly challengeService: ChallengeService) {}

	@ApiQuery({
		name: "firstJugCapacity",
		type: Number,
		example: 2,
		required: true,
	})
	@ApiQuery({
		name: "secondJugCapacity",
		type: Number,
		example: 10,
		required: true,
	})
	@ApiQuery({
		name: "desiredAmount",
		type: Number,
		example: 4,
		required: true,
	})
	@ApiOkResponse({
		type: WaterJugOutput,
	})
	@ApiBadRequestResponse()
	@Get("water-jug")
	public waterJug(@Query() query: WaterJugDto) {
		return this.challengeService.solve(query);
	}
}
