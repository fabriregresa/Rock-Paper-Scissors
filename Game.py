import random

def play_game():

    #PHASE 0 : SETTING UP
    human_score = 0
    computer_score = 0
    print("Let's play some matches")

    #PHASE 1 :HUMAN PICK
    def get_human_choice():
        print("Options available: rock, paper, scissors")
        
        while True:
            user_choice = input("Please enter your choice: ").lower()
            if user_choice in ["rock","paper","scissors"]:
                return user_choice
            else:
                print("Invalid choice. Please choose one of the above")
    
    #PHASE 2 : COMPUTER PICK
    def get_computer_choice():
        numero = random.random()
        if numero < 1/3 :
            return "rock"
        elif numero >= 1/3 and numero <2/3:
            return "paper"
        else:
            return "scissors"

    #PHASE 3 : ROUND
    def play_round(human_choice, computer_choice):
        nonlocal human_score, computer_score

        if human_choice == "rock" and computer_choice == "scissors" or \
            human_choice == "paper" and computer_choice == "rock" or \
            human_choice == "scissors" and computer_choice == "paper":
            human_score += 1
            return "You win " + str(human_choice) + " beats " + str(computer_choice)
        elif human_choice == "scissors" and computer_choice == "rock" or \
            human_choice == "rock" and computer_choice == "paper" or \
            human_choice == "paper" and computer_choice == "scissors":
            computer_score += 1
            return "You Lose! " + str(computer_choice) + " beats " + str(human_choice)
        else:
            return "That's a draw " + str(human_choice) + " is the same as " + str(computer_choice)
        
    #GAME LOOP
    for i in range(5):
        human_choice = get_human_choice()
        computer_choice = get_computer_choice()
        result = play_round(human_choice,computer_choice)
        print(result)

    #GAME SCORE
    print("Final score:")
    print("You: " + str(human_score))
    print("Computer: " + str(computer_score))

    #THE WINNER
    if human_score > computer_score :
        print("You win the game!")
    elif human_score < computer_score:
        print("You lose the game!")
    else:
        print("That's a tie")

play_game()


