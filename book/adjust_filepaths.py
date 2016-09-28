import fileinput
import os
import re

regex = re.compile(r'(.*?)="/(.*)')

def checkFilename(filename_list):
    for filename in filename_list:
        if filename.find('.py') > -1: 
            continue
        else:
            adjustLines(filename)

def adjustLines(filename):
    file1 = fileinput.input(filename, inplace=True)
    for line in file1:
        if regex.search(line):
            parts = regex.search(line).groups()
            print(parts[0]+'="'+parts[1])
        else:
            print(line, end='')

if __name__ == "__main__":
    filename_list = os.listdir(".")
    filename_list = [filename for filename in filename_list if os.path.isfile(filename)]
    checkFilename(filename_list)



