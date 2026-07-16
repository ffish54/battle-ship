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

<img width="1087" height="700" alt="wireframe_ship" src="https://github.com/user-attachments/assets/9316c1a8-0be0-464a-9612-6db0c4c6a2db" />



The desktop version of the title screen is designed to immediately introduce the user to the game. At the top of the page is a header containing the Battleships logo and title, providing a clear introduction for the website. Beneath the header is text reading "Naval Warfare Begins" along with 3 buttons 1 player and 2 player the function of these buttons are clear to the user. the first button starts a 1 player game, the second button starts a two player game and the third shows the rules of the game. 

<img width="1002" height="1086" alt="wireframe_ship_tablet" src="https://github.com/user-attachments/assets/d346c288-a16d-4ddf-b9d3-c7ae5a5a36f6" />


On tablet devices, the overall structure remains similar to the desktop layout, The heading and descriptive text remain centered but are scaled appropriately for the smaller screen size.

<img width="863" height="1823" alt="wireframe_ship_mobile" src="https://github.com/user-attachments/assets/339689d4-7719-456c-99c3-3851e9285943" />


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

###features

<img width="1309" height="615" alt="image" src="https://github.com/user-attachments/assets/75de2e2c-2a05-4fac-be02-3106e871a022" />

The title page acts as the main menu of the Battleships game its purpose is to clearly introduce the game and provide simple navigation to the different game modes. The page contains two buttons: 1 Player and 2 Player

The 1 Player button allows the user to start a game against the computer. When pressed, JavaScript stores the value "1p" in Local Storage in the variable gameMode. This information is later used by the placement and battle pages to determine that the game should generate an enemy board controlled by the computer.

The 2 Player button starts a local multiplayer game. When selected, JavaScript stores the value "2p" in Local Storage and also sets currentPlayer to "1". This ensures that the game knows Player 1 should place their ships first and allows the game to switch correctly between players during gameplay.

JavaScript Functionality
The JavaScript on the title page is responsible for handling the button presses and storing information that will be needed by the rest of the website. It uses event listeners that are attachged to each button, and localStorage to store the needed varables.

<img width="288" height="529" alt="image" src="https://github.com/user-attachments/assets/978b8df6-980d-4d87-98bf-93b202bd2e6a" />

<img width="370" height="501" alt="image" src="https://github.com/user-attachments/assets/21c93b17-0e88-49d9-a54b-4feec0232dc8" />

on diffrent screen sizes the size of the buttons ajust so that they are easy to see and use

<img width="1300" height="602" alt="image" src="https://github.com/user-attachments/assets/723aafd9-776d-4089-b9cc-dd63f4aec5b1" />

The placement page allows players to position their fleet before the battle begins. The page contains a single 10×10 game grid, text describing the current ship being placed, the placement direction, and the number of ships already positioned. Below the game board are controls that allow the player to rotate ships between horizontal and vertical orientations before placing them.

When a player clicks a square on the grid, JavaScript checks whether the selected ship can be placed in that location. The placement is only accepted if the ship remains within the boundaries of the board and does not overlap any ships that have already been placed. Once successfully placed, the ship is indicated by the squares it occupies being gray, the ship counter is updated, and the next ship becomes available for placement.

The Rotate Ship button allows the player to change the orientation of the current ship between horizontal and vertical. this allows for more placement options and making this more simmilar to the real game. 

The Start Battle button remains disabled until every ship has been successfully placed. Once all five ships have been positioned, the button becomes available, preventing players from accidentally starting the game with an incomplete fleet.

Single Player Functionality

In single-player mode, the placement page is also responsible for creating the computer's fleet. After the player has positioned all of their ships and starts the game, JavaScript randomly generates valid locations for each of the computer's ships using the same placement validation function as the player. This ensures that every game is different while preventing ships from overlapping or extending outside the board. The player's board and the randomly generated enemy board are then saved using Local Storage before the game moves to the battle page.

Two Player Functionality

When two-player mode is selected, the placement page is used twice. Player 1 first places their fleet, after which their board is saved to Local Storage. The game then displays the swap page so the device can be passed to Player 2 without spoiling the game. Player 2 then places their fleet using the same placement system. Once both players have positioned all of their ships, each board is stored separately in Local Storage and the game proceeds to the battle phase.

JavaScript Functionality

The JavaScript on the placement page controls every aspect of the ship placement system. A 10×10 array is used to represent the game board, with each value storing the state of an individual square on the grid. Functions are used to validate placements, ensuring ships do not overlap or extend beyond the edges of the board before allowing them to be placed.

Event listeners are attached to every square within the game board so that clicking a square starts the ship place function. Additional event listeners control the Rotate Ship and Start Battle buttons. After every successful placement, the board is redrawn to display the ships, and the information panel is updated to show the next ship that must be placed.

Once all ships have been positioned, the appropriate boards are saved to Local Storage depending on the selected game mode. In single-player mode, both the player's board and the computer's board are stored. In two-player mode, the player's board is saved as either Player 1 or Player 2 before the game progresses to the next stage. Using Local Storage allows the game data to persist between pages without requiring a database or server, enabling the battle page to load the correct fleet layouts when gameplay begins.

<img width="296" height="526" alt="image" src="https://github.com/user-attachments/assets/56c1661b-4b78-4ea2-bbd0-e7578f5d3756" />

<img width="373" height="498" alt="image" src="https://github.com/user-attachments/assets/79de03b7-abe6-4b53-8900-ea82a9318e10" />

the positioning and sizeing is adjusted on other screen sizes 

<img width="1289" height="602" alt="image" src="https://github.com/user-attachments/assets/25821299-e3a8-4ec5-89d3-7e8150ed7cfc" />

The swap page is used exclusively during two-player mode and acts as a transition screen between players' turns. Its purpose is to ensure that neither player can see the other's ship positions while the device is being passed between them.

The page features a simple layout consisting of a heading displaying whose turn it is, a small text box asking the current player to pass the device to the next player, and a Continue button. The current player's number is displayed, for example "Player 1's Turn" or "Player 2's Turn", allowing players to clearly see whose turn is about to begin.

When the Continue button is pressed, the game loads the next stage based on the current phase of the game. During the placement stage, the next player is taken to the placement page to position their fleet. During the battle stage, the next player is taken to the battle page to continue the game.

JavaScript Functionality

The JavaScript for the swap page is responsible for determining which player is about to take their turn and which page should be loaded when the player presses Continue.

When the page loads, the script retrieves the values stored in Local Storage, including the current player and the current game phase. These values are used to update the heading displayed on the page so that the correct player's turn is shown.

An event listener is attached to the Continue button. When the button is clicked, JavaScript checks the value of the stored game phase. If the phase is set to placement, the player is redirected to the placement page so they can position their ships. If the phase is set to battle, the player is redirected to the battle page to continue attacking the opposing fleet.

<img width="369" height="493" alt="image" src="https://github.com/user-attachments/assets/bbca0690-159c-4b7b-b563-a3bc125e492f" />

<img width="293" height="526" alt="image" src="https://github.com/user-attachments/assets/1c9d52e2-c788-44b7-a905-644603048463" />

the size of the text and button is adjusted in diffrent screen sizes so it is easier to view 

<img width="1279" height="628" alt="image" src="https://github.com/user-attachments/assets/2a1c8c35-1910-4de8-b773-2ca893f9f926" />

The battle page is the main gameplay screen where players attempt to locate and destroy their opponent's fleet. The page is divided into two sections, each containing a 10×10 game board. The board on the left displays the player's own fleet, while the board on the right represents the opponent's waters. Above each board is a heading identifying which board belongs to the player and which belongs to the opponent. The player's board displays the locations of their ships along with any successful enemy attacks and missed shots. 

The enemy board initially appears completely empty, hiding the locations of the opponent's ships. As the player attacks squares on the enemy board, the board updates to display successful hits and missed attacks. This allows players to keep track of every shot they have taken without revealing the locations of ships that have not yet been discovered.

At the bottom of the page is the Battle Status section. This displays messages informing the player about the current state of the game, such as prompting the player to select a square to attack, reporting whether an attack was a hit or a miss, and announcing the winner when all of one player's ships have been destroyed.

Single Player Functionality

In single-player mode, the player attacks by selecting a square on the enemy board. After the player's attack has been processed, the computer automatically takes its turn by randomly selecting a valid square on the player's board that has not been attacked already. The battle continues with players taking alternating turns until one fleet has been completely destroyed.

Two Player Functionality

In two-player mode, both players share the same device. After a player completes their attack, the current game state is saved using Local Storage before the game loads the swap page. Once the device has been passed to the other player and the player clicks continue, the battle page reloads using the correct boards for the next player. This ensures that each player can only view their own fleet while continuing to attack their opponent's hidden board.

JavaScript Functionality

The JavaScript controlling the battle page is responsible for loading the correct boards, processing attacks, updating the game display, managing turns, and determining when the game has ended.

When the page loads, JavaScript first checks the selected game mode stored in Local Storage. Depending on whether the player selected one-player or two-player mode, the appropriate player and enemy boards are loaded into memory. Functions are then used to draw both game boards, displaying the player's ships while only showing hits and misses on the enemy board.

Event listeners are attached to every square of the enemy board. When a player selects a square, JavaScript checks whether that location has already been attacked. If not, the square is updated to record either a hit or a miss before the display is refreshed.

In single-player mode, a computer attack function is called after the player's turn. This function repeatedly generates random coordinates until it finds a square that has not previously been attacked before updating the player's board with the result.

After every successful attack, a function counts the number of remaining ship sections on both boards. If either board no longer contains any remaining ships, the game ends and a victory or defeat message is displayed in the Battle Status section. Throughout the game, Local Storage is continually updated to preserve the current state of both boards, allowing gameplay to continue correctly between turns in both single-player and two-player modes.

<img width="396" height="533" alt="image" src="https://github.com/user-attachments/assets/5c7aaac9-5a4e-4569-aef5-d9a584a6bc6d" />

<img width="312" height="558" alt="image" src="https://github.com/user-attachments/assets/54d32e7f-d0b9-4d58-af7d-a2dc2c1497a0" />

on smaller screens both grids are stacked virticaly as the normal layout wouldnt fit the screen size, this allows the player to scroll the screen virticaly which comes much more naturaly to mobile users than scrolling horozontaly 

##Validator Testing
HTML: No errors were found when using the official W3C validator on each page
CSS: No errors were found when using the official (Jigsaw) validator 
Jscript: no errors were found when using jshint

| Story No. | Action                                                               | Expected Result                                                                                                                             | Actual Result                                                                                          | Pass/Fail |
| --------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------- |
| 1         | Open the website and click **1 Player**                              | The placement page loads and the game is set to single-player mode.                                                                         | The placement page loads and the computer game mode is selected.                                       | Pass      |
| 2         | Open the website and click **2 Player**                              | The placement page loads and Player 1 begins placing their ships.                                                                           | The placement page loads with Player 1's placement screen.                                             | Pass      |
| 3         | Place all five ships on the placement page.                          | Each ship is placed correctly without overlapping or leaving the board. The Start Battle button becomes enabled after all ships are placed. | Ships are placed correctly and the Start Battle button is enabled once all ships have been positioned. | Pass      |
| 4         | Attempt to place a ship outside the board or on top of another ship. | The placement is rejected and the player is prompted to choose another location.                                                            | Invalid ship placements are prevented and an error message is displayed.                               | Pass      |
| 5         | Start a single-player game.                                          | The player's fleet is saved and a random enemy fleet is generated before loading the battle page.                                           | The battle page loads with the player's ships displayed and an enemy fleet generated.                  | Pass      |
| 6         | Click a square on the enemy board during battle.                     | The selected square is marked as either a hit or a miss depending on whether a ship occupies that square.                                   | The attacked square updates correctly to display a hit or miss.                                        | Pass      |
| 7         | Continue playing until all enemy ships have been destroyed.          | A victory message is displayed and the game ends.                                                                                           | The game correctly detects all enemy ships have been sunk and displays a victory message.              | Pass      |
| 8         | Allow the computer to take its turn in single-player mode.           | The computer randomly attacks a valid square that has not previously been targeted.                                                         | The computer attacks a random untargeted square and updates the player's board correctly.              | Pass      |
| 9         | Start a two-player game and complete Player 1's ship placement.      | The swap page is displayed so Player 2 can take over without seeing Player 1's board.                                                       | The swap page appears and prompts the players to swap turns.                                           | Pass      |
| 10        | Complete a two-player battle, alternating turns using the swap page. | Each player's board is loaded correctly after every swap and gameplay continues until a winner is declared.                                 | Boards are swapped correctly between players and the game ends with the correct winner.                | Pass      |

##Deployment 

to deploy this website I developed it in visual studio code, then linked it to a my repository in github opened the pages tab for the battle ship repository, and clicked deploy from branch.









