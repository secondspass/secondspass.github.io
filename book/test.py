import fileinput
import os


new_line = '<meta name="viewport" http-equiv="content-type" content="text/html; charset=UTF-8; width=device-width">'

def checkFilename(filename_list):
    for filename in filename_list:
        if filename.find('.html') > -1: 
            addExtralLine(filename)
        else:
            continue

def addExtralLine(filename):
    file1 = fileinput.input(filename, inplace=True)
    for line in file1:
        if line.find("<meta http") > -1:
            print(new_line)
        else:
            print(line, end='')

if __name__ == "__main__":
    filename_list = os.listdir(".")
    checkFilename(filename_list)



