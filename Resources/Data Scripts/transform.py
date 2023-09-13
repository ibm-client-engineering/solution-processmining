import pandas as pd
import json

input_file = "./Data/Collection_Data_Backup.csv"
output_file = "./Data/Data_Output.csv"
classification_info = "./Data/classification.json"

def obfuscate_cols(df,column):
    mask = df[column] != 'System'
    df.loc[mask, column] = df.loc[mask, column].str.split().str[1]
    return df

def generate_values(value):
    with open(classification_info, "r") as json_file:
        data = json.load(json_file)
    for group_name, group_data in data["groups"].items():
        names = group_data.get("names", [])
        criteria = group_data.get("criteria",[])
        if (group_data.get("names") == ["ALL"]) and (value not in criteria):
            return group_data.get("group_classification", " ")
        elif value in names:
            return group_data.get("group_classification", " ")
        else:
            return ""

def new_column(df, dependent_col,new_col_name):
    df[new_col_name] = df[dependent_col].apply(generate_values)
    return df

def convert_dates(df,column):
    df[column] = pd.to_datetime(df[column], format='%m/%d/%y')
    df[column] = df[column].apply(lambda x: x.replace(hour=0, minute=0))
    df[column] = df[column].dt.strftime('%m/%d/%y %H:%M')
    return df

def update_file(df, classification_info, column):
    with open(classification_info, "r") as json_file:
        data = json.load(json_file)
    for group_name, group_data in data["groups"].items():
        names = group_data.get("names", [])
        for name in names:
            condition = df[column] == name
            df.loc[condition, 'GROUP'] = group_data.get("group_classification", " ")
    return df

#-----------------------------------RUNNER-----------------------------

#Convert New Data File
# df = pd.read_csv(input_file)
# df = convert_dates(df,'TASK_DUE_DATE')
# df = new_column(df,'UPDATED_BY','GROUP')
# df = obfuscate_cols(df,'UPDATED_BY')
# print(df.head(20))
# df.to_csv(output_file, index=False)

#Update existing Data File
df = pd.read_csv(output_file)
df = update_file(df, classification_info, 'UPDATED_BY')
print(df.head(10))
df.to_csv(output_file, index=False)