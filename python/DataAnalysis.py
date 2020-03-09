# coding=utf-8

import xlrd
import json
def open_excel(file_path):
    book_data=xlrd.open_workbook(file_path)
    book_sheet=book_data.sheet_by_index(0)
    rows_num=book_sheet.nrows
    rows0=book_sheet.row_values(0) 
    rows0_num=len(rows0) 
    list=[]

    for i in range(1,rows_num):
        rows_data=book_sheet.row_values(i) 
        rows_dir={}
        for y in range(0,rows0_num): 
            rows_dir[rows0[y]]=rows_data[y]
        list.append(rows_dir)
    return list

Path='../Excel/ChartData.xlsx'

DataArray=open_excel(Path)
ChartIndex = {}
SeriesDatas = []
ChartNames = []
TableNames = []
CategoryNames = []
for index in DataArray:
    if index["TableName"] not in TableNames:
        TableNames.append(index["TableName"])
    if index["ChartName"] not in ChartNames:
        ChartNames.append(index["ChartName"])
    if index["CategoryName"] not in CategoryNames:
        CategoryNames.append(index["CategoryName"])

for ChartName in ChartNames:
    SeriesData = {}
    SeriesData["ChartName"] = ChartName
    ChartDatas = []
    for TableName in TableNames:
        ChartData = {}
        TableDatas = []
        for index in DataArray:
            TableData = {}
            if(TableName == index["TableName"] and ChartName == index["ChartName"]):
                for ke in index.keys():
                    if(ke == "Unit" or ke == "TableName" or ke == "XAxisData"):
#                        if(ke=="XAxisData"):
#                            ChartData[ke] = eval(index[ke])
#                        else:
                        ChartData[ke] = index[ke]
                    if(ke == "CategoryName" or ke == "CategoryData"):
                        if(ke == "CategoryData"):
                            TableData[ke] = eval(index[ke])
                        else:
                            TableData[ke] = index[ke]
                TableDatas.append(TableData)
                ChartData["TableData"] = TableDatas
        ChartDatas.append(ChartData)
    SeriesData["ChartData"] = ChartDatas
    SeriesDatas.append(SeriesData)
ChartIndex["bar"] = SeriesDatas
print(ChartIndex)
json_str = json.dumps(ChartIndex)
with open('../json/test_data.json', 'w') as json_file:
    json_file.write(json_str)
