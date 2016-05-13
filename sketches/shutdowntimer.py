#!/usr/bin/python3

# use python 3.x
# simple shutdown timer script for windows


import os

print("-----SHUTDOWN TIMER-----")

while(True):
	a = input("Press S to schedule shutdown.\nPress C to cancel shutdown.\n")
	if(a == 's' or a == 'S'):

		try:
			hours = int(input("\n\nEnter hours: "))
		except ValueError:
			hours = 0
		
		try:
			minutes = int(input("Enter minutes: "))
		except ValueError:
			minutes=0

		seconds = hours * 60 * 60 + minutes * 60

		os.system('shutdown -s -t {}'.format(seconds))
		print("Your system will shutdown in {} hours and {} minutes".format(hours,minutes))
		break

	elif(a=='C' or a=='c'):
		os.system('shutdown -a')
		break
		
	else:
		print("Sorry. Try again.")

