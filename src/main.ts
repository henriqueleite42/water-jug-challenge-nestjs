/* eslint-disable capitalized-comments */
/* eslint-disable multiline-comment-style */

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { swagger } from "./swagger";

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
		}),
	);

	swagger(app);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await app.listen(3000);
};

bootstrap();
