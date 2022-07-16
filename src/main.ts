import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await app.listen(3000);
};

bootstrap();
