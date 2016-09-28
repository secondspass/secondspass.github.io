import os

filename_list = os.listdir()
filename_list = [filename for filename in filename_list if os.path.isfile(filename)]
for filename in filename_list:
    if not filename.find('.') > -1:
        os.rename(filename,"{}.html".format(filename))
