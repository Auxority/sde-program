# SDE Program
This is a collaborative assignment between [Zefanja Jobse](https://github.com/zefanjajobse) and [Mischa Gideonse](https://github.com/auxority) for SDE (Software Design).
We started brainstorming for ideas, thought of making a calculator application, a particle system for html5 canvas, a parametric equalizer.
But we decided to create Flappy Birb from scratch, because we could easily apply multiple design patterns in such a game.
We started by looking for assets, and slowly started to make the game. And the final product can be seen below.

![image](https://media.discordapp.net/attachments/752511704956534804/933306302514491422/unknown.png)

We both committed a lot of code, and in total it's about the same amount. As seen in the image below.

![image](https://media.discordapp.net/attachments/752511704956534804/933307103630745600/unknown.png)

For more info:
https://github.com/Auxority/sde-program

# Creational design patterns

## Singleton 1
For Singleton we made both the background and scoreboard a singleton, to share the same instance of the object between gameStates without passing that info to the next state manually.

**Creating / reusing the singleton**

![image](https://user-images.githubusercontent.com/22680656/150093443-109497fc-5bcd-48a1-91f8-4bf28745ae1e.png)

**Implementation within the running state**

This singleton is reused in the ending state of the the game

![image](https://user-images.githubusercontent.com/22680656/150093510-0c023ca0-80fd-43b8-8aa6-936e7d5ec0d7.png)


## Singleton 2
Another singleton we made was the Game class, this prevents us from accidentally creating two game instances and makes it easier to call public methods of the Game class from other classes. In the images below a part of the Game class is shown, as well as an example of where it is used.

**The Game class**

![image](https://media.discordapp.net/attachments/752511704956534804/933302980223053864/unknown.png)

**Usage of the Game singleton**

![image](https://media.discordapp.net/attachments/752511704956534804/933303484642639892/unknown.png)

# Structural design patterns

## Facade 1
To add memes to our starting game state, we wanted to use fetch, an http request library.
So we decided to use a facade to provide us with a simplified interface to use fetch.
In the example below I'm showing JokesApi class which is used as a simplified interface for the fetch librrary.

**The JokesAPI class**

![image](https://cdn.discordapp.com/attachments/752511704956534804/932952953810210876/unknown.png)

## Facade 2

To allow user input in our game, we decided it would be a good idea to make a Keyboard class.
This acts as a facade for keyboard event listeners. And makes it easier to listen for certain keys in our game.

**The Keyboard class**

![image](https://media.discordapp.net/attachments/752511704956534804/933285811540066335/unknown.png)

# Behavioural design patterns

## The template method
In this example we have created the abstract GameObject class as the template class for game objects.
These game objects are objects like the Birb, the Pipes and the Background. Which are all objects which need to be rendered on the canvas.

**The abstract GameObject class**

![image](https://media.discordapp.net/attachments/752511704956534804/932939786803642388/unknown.png)

**An implementation of the abstract GameObject class.**

![image](https://media.discordapp.net/attachments/752511704956534804/932939046001442876/unknown.png)

## The state pattern
Another design pattern we chose to implement was the state pattern. We have used this in multiple different scenarios, but we've chosen to show the GameStates as an example. The GameState interface is used as an interface for the multiple different states the game can be in. These states are Starting, Running and Ending. In the example below, the running state is shown.

**The GameState interface**

![image](https://media.discordapp.net/attachments/752511704956534804/932941531512451092/unknown.png)

**The running GameState**

![image](https://cdn.discordapp.com/attachments/752511704956534804/932941986682519582/unknown.png)

If you want to test the game, you can try it within github pages: https://auxority.github.io/sde-program/
