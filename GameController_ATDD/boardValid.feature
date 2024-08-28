Feature: Board rules validation
	In order to avoid cheeting
	As a player
	I want to validate the rules of the game

	@debug
	Scenario Outline: A ships have to be vertical or horizontal without gaps
		Given I have a ship set with the size <size>
		When I give the ship the positions "<positions>"
		Then the result should be "<result>"

		Examples:
			| size | positions      | result |
			| 5    | A1,A2,A3,A4,A5 | true   |
			| 4    | B1,B2,B3,B4    | true   |
			| 3    | C5,D5,E5       | true   |
			| 3    | D1,D2,D3       | true   |
			| 2    | E1,E2          | true   |
			| 2    | F4,H4          | false  |
			| 2    | A1,B2          | false  |
