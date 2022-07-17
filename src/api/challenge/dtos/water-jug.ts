import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsPositive } from "class-validator";

export class WaterJugDto {
	@IsDefined()
	@IsInt()
	@IsPositive()
	public firstJugCapacity: number;

	@IsDefined()
	@IsInt()
	@IsPositive()
	public secondJugCapacity: number;

	@IsDefined()
	@IsInt()
	@IsPositive()
	public desiredAmount: number;
}

export class WaterJugOutput {
	@ApiProperty()
	public solvable: boolean;

	@ApiProperty({
		example: 4,
	})
	public minSteps: number;

	@ApiProperty({
		example: 2,
	})
	public smallerJugCapacity: number;

	@ApiProperty({
		example: 10,
	})
	public biggerJugCapacity: number;

	@ApiProperty({
		example: [
			{
				smallerJugContent: 2,
				biggerJugContent: 0,
				action: {
					type: "FILL",
					bucket: "SMALLER",
				},
			},
			{
				smallerJugContent: 0,
				biggerJugContent: 2,
				action: {
					type: "TRANSFER",
					originJug: "SMALLER",
					destinationJug: "BIGGER",
				},
			},
			{
				smallerJugContent: 2,
				biggerJugContent: 2,
				action: {
					type: "FILL",
					bucket: "SMALLER",
				},
			},
			{
				smallerJugContent: 0,
				biggerJugContent: 4,
				action: {
					type: "TRANSFER",
					originJug: "SMALLER",
					destinationJug: "BIGGER",
				},
			},
		],
	})
	public steps: Array<any>;
}
