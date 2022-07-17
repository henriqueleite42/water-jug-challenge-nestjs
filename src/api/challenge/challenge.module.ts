import { Module } from "@nestjs/common";

import { ChallengeController } from "./challenge.controller";
import { ChallengeService } from "./challenge.service";

@Module({
	providers: [ChallengeService],
	controllers: [ChallengeController],
})
export class ChallengeModule {}
