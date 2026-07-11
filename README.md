# battle-ship

# Battleships

## Project Overview

This project is a browser-based implementation of the classic Battleships game. The goal of the project is to create an interactive strategy game that allows players to compete against either another player or a computer opponent. The website provides an engaging experience of the classic game.

Battleships is a well-known board game that is simple in practice but can be very fun. I chose to recreate Battleships as a web application because i enjoy the game and have previously made a very simple version in python. The website is intended for players who enjoyed the classic game or just strategy games and wish to play a familiar game directly in their browser without requiring additional software.

### User Stories

#### User Story 1:

As a player, I want to choose between single-player and two-player modes so that I can play either against the computer or another person. - Must Have

Acceptance Criteria:

* The homepage includes a Single Player button.
* The homepage includes a Two Player button.
* Selecting a game mode loads the appropriate game.

Tasks:

* Create a title screen.
* Add Single Player and Two Player buttons.
* Link buttons to the game page.

---

#### User Story 2:

As a new player, I want to read the rules so that I understand how to play the game before starting. - Must Have

Acceptance Criteria:

* A dedicated Rules page is available.
* The Rules page is accessible from the homepage.
* The rules clearly explain the objective and gameplay.

Tasks:

* Create a Rules page.
* Add navigation to the Rules page.
* Write clear gameplay instructions.

---

#### User Story 3:

As a player, I want to place my ships on the board so that I can prepare my fleet before the battle begins. - Must Have

Acceptance Criteria:

* Players can select ship positions.
* Ships cannot overlap.
* Ships remain visible after placement.

Tasks:

* Create a game board.
* Add ship placement functionality.
* Validate ship positions.

---

#### User Story 4:

As a player, I want to receive feedback when attacking a square so that I know whether I hit or missed an enemy ship. - Must Have

Acceptance Criteria:

* Hits are visually indicated.
* Misses are visually indicated.
* Messages are displayed to inform the player of the result.

Tasks:

* Create attack logic.
* Add hit and miss indicators.
* Display feedback messages.

---

#### User Story 5:

As a player, I want the game to detect when all enemy ships have been destroyed so that I know when the game has ended. - Should Have

Acceptance Criteria:

* The game tracks remaining ships.
* A win message is displayed when a fleet is destroyed.
* Gameplay ends after a winner is declared.

Tasks:

* Track ship health.
* Check win conditions after each turn.
* Display victory and defeat messages.

---

#### User Story 6:

As a mobile user, I want the website to adapt to different screen sizes so that I can play comfortably on phones, tablets and desktop devices. - Should Have

Acceptance Criteria:

* The layout adjusts for smaller screens.
* Navigation remains usable on mobile devices.
* Game elements remain visible and accessible.

Tasks:

* Implement responsive layouts.
* Test on multiple screen sizes.
* Add media queries where necessary.

## Design

### Design Choices

I am planning to use a naval warfare theme throughout the website. The colour scheme will primarily use shades of blue, grey and white to represent the ocean, military vessels and naval equipment. Background images featuring a few battleships in ocean environments.

The homepage will feature a title screen with large buttons for Single Player, Two Player and Rules. This design allows players to quickly access the most important areas of the website. Bootstrap will be used to help create a responsive layout that works well on desktop and mobile devices.

The overall design aims to feel similar to a naval command centre, with clear navigation, bold headings and easy-to-read interfaces. The focus of the design is to ensure players can quickly understand the game and begin playing with minimal confusion.

### Wireframes 
wireframes are attatched to this read me file

<img width="1448" height="1086" alt="wireframe_ship" src="https://github.com/user-attachments/assets/656a746d-8304-4a64-9754-3647e88566b8" />


The desktop version of the title screen is designed to immediately introduce the user to the game. At the top of the page is a header containing the Battleships logo and title, providing a clear introduction for the website. Beneath the header is text reading "Naval Warfare Begins" along with 3 buttons 1 player and 2 player the function of these buttons are clear to the user. the first button starts a 1 player game, the second button starts a two player game and the third shows the rules of the game. 

<img width="1002" height="1086" alt="wireframe_ship_tablet" src="https://github.com/user-attachments/assets/b014b023-f43e-429a-a50f-4b5dcdd8d63a" />

On tablet devices, the overall structure remains similar to the desktop layout, The heading and descriptive text remain centered but are scaled appropriately for the smaller screen size.

<img width="863" height="1823" alt="wireframe_ship_mobile" src="https://github.com/user-attachments/assets/13d5ff57-ad1a-4f97-8017-cb50846468eb" />

The mobile version of the title screen is redesigned to make better use of the limited screen space available. the buttons are made to fit the screen fully 


<img width="1320" height="1192" alt="placement_desktop" src="https://github.com/user-attachments/assets/d5964bae-0abd-4464-aeda-145dc1c2701b" />

The desktop version of the placement screen will allow the player to arrange their fleet of ships before the battle begins. At the top of the page is a header containing the Battleships logo and title, providing a consistent design throughout the website. Beneath the header is information displaying the current ship to be placed, the ship's size, the current placement direction (horizontal or vertical), and the number of ships already placed. The centre of the page contains a 10 × 10 grid where the player positions each ship by selecting squares on the board. At the bottom of the page are controls that allow the player to rotate the ship between horizontal and vertical placement or continue to the battle once all ships have been placed. In the single-player mode, the enemy fleet is generated automatically when the player starts the battle, while in two-player mode the next player is prompted to take their turn placing ships.

<img width="1402" height="1122" alt="placement_mobile" src="https://github.com/user-attachments/assets/e308474d-884c-44d9-af29-ed8f5181fc0e" />

On tablet devices, the placement screen keeps the same overall layout while scaling the interface to suit the smaller display. The information section remains above the board, while the grid is slightly reduced in size to fit comfortably on the screen. The control buttons remain below the grid and are resized to make them easy to press using touch controls without changing their functionality.
The mobile version of the placement screen is adjusted for the limited screen space. The buttons arestacked vertically below the. The grid is reduced in size while remaining fully usable on a touch screen. The page becomes vertically scrollable if required, ensuring all controls remain accessible without making the board too small to use.


<img width="1448" height="1086" alt="3891C936-4988-4034-AC26-ED33F74EABD9" src="https://github.com/user-attachments/assets/f2766d1a-34ad-4548-bb90-9ccc4cb6989d" />

The swap page is designed to prevent the next player from seeing the previous player’s board during a two-player game. At the top of the page is the Battleships header used on other pages. In the centre of the page is a large heading displaying whose turn it is, for example, “Player 1’s Turn” or “Player 2’s Turn”. Beneath this is a short message instructing the players to pass the device to the next player, followed by another reminder to make sure the other player is not looking at the screen before continuing. At the bottom of the page is a Continue button. When pressed, this button will load the next placement page for player 2 then will switch between each players battle page. this page is the same on each platform but the button is slightly bigger on smaller screens 

<img width="1448" height="1086" alt="C94201AC-DA72-4402-BD9F-A34A7B1E1390" src="https://github.com/user-attachments/assets/69f7e1fb-0d57-408d-b777-5f6ae55b2dc9" />

the battle page is made up of two grids the current players grid (left) and the enemy's grid (right) with lables above each grid on the players grid their ships are displayed along with any hits and misses by the enemy and the oposite grid only contains any hits and misses, below is some text that displays instructions and says if the attack was a hit or miss.
At the bottom of the page is a Battle Status section. This area displays messages informing the player about the current state of the game, such as "Select a square on the enemy grid to attack", "Direct Hit!", "Miss!", or announcing the winner when all of one player's ships have been destroyed

### Background
<img width="6000" height="4000" alt="image" src="https://github.com/user-attachments/assets/66b8fb4b-eaff-4835-bff0-f73a86c0ba5f" />
this image is used as the background it is from www.magnific.com
Designed by Magnific

### Colours

<img width="26" height="26" alt="image" src="https://github.com/user-attachments/assets/a9d348dc-b1a8-4d9f-a8fa-02980ff81a55" />
hex #87CEFA is used for clear water in the grid 

<img width="23" height="23" alt="image" src="https://github.com/user-attachments/assets/20467b1e-2bde-4b03-9b1e-6a58d0e2dfbd" />
hex #808080 is used for ships that occupy a square on the grid  

<img width="24" height="24" alt="image" src="https://github.com/user-attachments/assets/c75cf5eb-69ff-4308-8cc6-9d6ce7eec1e0" />
hex #FFFFFF is used for a miss on the grid 

<img width="24" height="26" alt="image" src="https://github.com/user-attachments/assets/0dc08a83-76fc-4ba9-a39f-0d712b612f4b" />
hex #FF0000 is used for a ship hit on the grid 

## Development

The first page I developed was the title screen, with navigation options for either the one-player or two-player mode. next i started on the the ship placement page. to do this i created a 10x10 grid with in the javascript through a table most java script for this page is in script.js. then i developed the functions to allow players to place ships on the grid, rotate them between horizontal and vertical positions, validate ship placements, and prevent ships from overlapping or extending beyond the boundaries of the board.

After the placement functions were working correctly, i created a function to generate a random fleet for the computer opponent in one-player mode useing another 10x10 table. The positions of both the player's and the enemy's ships were stored using Local Storage, allowing the information to be transfered between pages when the game moved from the placement screen to the battle screen.

next i created the battle page. Two separate grids were displayed on the page, one for the player's fleet and one for the enemy's waters and JavaScript functions were created to handle attacking mechanics, including checking whether an attack was a hit or a miss, updating the boards visually, and preventing players from selecting the same square multiple times this is done by storing an intiger in each section of the grid table 0 would be clear, 1 meant it contained a ship, 2 if a ship was hit or 3 if it is a miss. For one-player mode, a computer opponent was implemented that randomly selects a valid square to attack after the player has taken their turn.

Once the single-player mode was complete, support for two-player mode was added. This required additional development work, many of the original functions for the placement and battle pages were changed to include an if statment for if its 2 player mode, createing a javascript file for the title and changing the buttons to javascript buttons so each can store the respective mode the player chose, and creating a swap page that hides the game boards while the device is passed between players. Local Storage was used extensively to save each player's board and to keep track of whose turn it is. The battle page was also adapted so that it could dynamically load the correct boards depending on the active player.

Throughout development, i conducted regular testing by simply testing all new features worked and playing games with family to see if the game was easy to play and undertand by others. i used Browser developer tools and console logging to identify and resolve issues such as boards not being saved correctly, turn management problems, and functions not loading the correct data. i also tested the website on different screen sizes to ensure that the responsive layouts functioned correctly on desktop, tablet, and mobile devices.




