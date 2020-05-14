import pandas as pd
import json
import os

# Dataset from dynamoDB
data = {
    "organization_code": "organization01",
    "servers": [
        {
            "id": "S_001",
            "name": "server001",
            "domain_name": "server001.abc.com",
            "host_name": "123.12.123.13",
            "model": "X001",
            "os": "Debian",
            "memory": "12GB",
            "disk": "200GB"
        },
        {
            "id": "S_003",
            "name": "server003",
            "domain_name": "server003.abc.com",
            "host_name": "133.12.123.13",
            "model": "X003",
            "os": "Debian",
            "memory": "12GB",
            "disk": "200GB"
        }],
    "applications": [{
        "id": "A_001",
        "name": "application001",
        "type": "REST",
        "stack": "Python",
        "version": "1.0.0-RELEASE",
        "server": "S_001",
        "database": "D_001"
    }],
    "databases": [{
        "id": "D_001",
        "name": "DB_001",
        "instance_name": "dbaescore.dev.abc.com",
        "application": "A_001",
        "server": "S_001"
    }]
}
# Create some Pandas dataframes from Dynamo data.
df1 = pd.DataFrame(data.get("servers"))
df2 = pd.DataFrame(data.get("applications"))
df3 = pd.DataFrame(data.get("databases"))

# First, we will check if the file already exist in order
# to create a new one from the incoming dataset
if os.path.exists(data.get("organization_code") +
                  ".xlsx"):
    os.remove(data.get("organization_code") +
              ".xlsx")
# Create a Pandas Excel writer using XlsxWriter as the engine
# and using the organization_code to define the filename
writer = pd.ExcelWriter(data.get("organization_code") +
                        ".xlsx", engine='xlsxwriter')


# Write each dataframe to a different worksheet.
df1.to_excel(writer, sheet_name='servers')
df2.to_excel(writer, sheet_name='applications')
df3.to_excel(writer, sheet_name='databases')

# Close the Pandas Excel writer and output the Excel file.
writer.save()

# Now let's read the xlsx and restore his original shape.

# Read the specific sheet to retrieve the data
applications = pd.read_excel(open(data.get("organization_code") +
                                  ".xlsx", 'rb'), sheet_name="applications")
# Drop the enumeration column from the csv
applications = applications.drop("Unnamed: 0", axis=1)

# Use json.dumps(python_object) to transform it into a formated json
# y = json.dumps(applications.to_json(orient='records'))

# Repeat the process over the rest of the entities
# Read the specific sheet to retrieve the data
# Servers:
servers = pd.read_excel(open(data.get("organization_code") +
                             ".xlsx", 'rb'), sheet_name="servers")
servers = servers.drop("Unnamed: 0", axis=1)
# Databases:
databases = pd.read_excel(open(data.get("organization_code") +
                               ".xlsx", 'rb'), sheet_name="databases")
databases = databases.drop("Unnamed: 0", axis=1)

# In order to show the example we will print into the console,
# but you can specify the destination filename if needed as a first parameter
print("Applications: " + applications.to_json(orient='records'))
print("Servers: " + servers.to_json(orient='records'))
print("Databases: " + databases.to_json(orient='records'))
