import { Module } from "@nestjs/common";

import { ChallengeModule } from "./api/challenge/challenge.module";

@Module({
	imports: [ChallengeModule],
})
export class AppModule {}
