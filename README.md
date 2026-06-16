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


