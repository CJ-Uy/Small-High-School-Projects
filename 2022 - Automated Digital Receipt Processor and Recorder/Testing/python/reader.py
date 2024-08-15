import pandas as pd

from mongoengine import connect
from dotenv import load_dotenv
import os

load_dotenv()
DB_HOST = os.getenv("DB_HOST")
SECRET_KEY = os.getenv("SECRET_KEY")
connect(host=DB_HOST)

#### Not gonna lie idk where this file is supposed to be in the directory ###
import sys
sys.path.append("../../")
import receipts.models as m

# xls = pd.ExcelFile("../excel files/Batch 2023.xlsx")
# df_Fees = pd.read_excel(xls, "Fees")
# df_s1 = pd.read_excel(xls, "11 - A")
# df_s2 = pd.read_excel(xls, "11 - B")
# df_s3 = pd.read_excel(xls, "11 - C")

xls = pd.ExcelFile("../excel files/GPTA Collection Status aoSY2021-2022.xlsx")
df_2022 = pd.read_excel(xls, "Grade 12")
df_2023 = pd.read_excel(xls, "Grade 11")
df_2024 = pd.read_excel(xls, "Grade 10")
df_2025 = pd.read_excel(xls, "Grade 9")
df_2025 = pd.read_excel(xls, "Grade 8")
df_2026 = pd.read_excel(xls, "Grade 7")


# df = [df_2022, df_2023, df_2024, df_2025, df_2026]
# data = [data_2022, data_2023, data_2024, data_2025, data_2026]
# for batch in range(len(df)):
#     for students in range(df[batch].index):
#         data[students].append(Student())

# #temporary
# for x in range(len(df_2022.index)):
#     data_2022.append(Student())

for index, row in df_2026.iterrows():
    #bacth (batch)
    batch = "2026"

    #section (section)
    section = row['Section']

    #name (last_name | first_name | middle_name)
    full_name = row['Name of Student']
    if(full_name.find(',') == -1): #assuming forgotten comma and last name is only 1 word
        last_name = full_name.split()[0]
        comma_pos = full_name.find(' ')
    else:
        comma_pos = full_name.find(',')
        last_name = full_name[0:comma_pos]
        
    first_name = full_name[comma_pos + 1 : len(full_name) - 2]
    if(full_name.find('.') == -1): #assuming no middle name
        middle_name = ""
    else:
        middle_name = full_name[len(full_name) - 2 : len(full_name)]
    print("{}, {} {} - {} {}".format(last_name, first_name, middle_name, section, batch))
    m.Student(firstname = first_name, middlename= middle_name, lastname = last_name, section = section, batch = batch).save()





        

        


