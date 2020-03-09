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

Path='../Excel/test.xlsx'

DataArray=open_excel(Path)
print(DataArray)

json_str = json.dumps(DataArray)
with open('../json/test_data_ditu.json', 'w') as json_file:
    json_file.write(json_str)
