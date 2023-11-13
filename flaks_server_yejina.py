import flask
from flask import Flask, render_template,jsonify,request
import json
from flask_cors import CORS, cross_origin
import MySQLdb
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app, support_credentials=True)
def to_json2(df,orient='split'):
    df_json = df.to_json(orient = orient, force_ascii = False)
    return json.loads(df_json)
def number_handling(v):
    #print('v',v)
    v= v.replace({'\$':'',',':''}, regex = True)
    v= v.apply(pd.to_numeric, errors='coerce').dropna().astype(int)
    return v

@app.route('/api/data')
@cross_origin()
def index():
    print("여기는 flaks 서버 실행중 ")
    selected_country = request.args.get('country')
    print('1)', selected_country)
    if not selected_country:
        return jsonify({'error': 'No country selected'})
    # Construct the file name based on the selected country
    my_res=flask.Response("차단되지롱")
    my_res.headers["Access-Control-Allow-Origin"] = "*"
    covid_db = MySQLdb.Connect(host='localhost', user='root', password='1234', db='jiendb')
    cursor = covid_db.cursor()
    sql_covid1_date = "SELECT * FROM "+ selected_country
    cursor.execute(sql_covid1_date)
    data_list = cursor.fetchall()
    dict_mapping = {"0":"location",
            "1":"date",
             "2":"total_cases",
            "3":"total_deaths",
            "4":"reproduction_rate",
            "5":"positive_rate",
            "6":"total_vaccinations" ,
            "7":"people_vaccinated" ,
            "8":"people_fully_vaccinated",
            "9":"stringency_index" ,
            "10":"diabetes_prevalence" ,
            "11":"population"}
    dict={}
    for i in data_list:
        # print(i)
        for idx, data in enumerate(i):
            key = dict_mapping[str(idx)]
            if key not in dict.keys():
                # print('idx:', idx, 'data:', data)
                dict[key]=[]
                dict[key].append(data)
            else:
                dict[key].append(data)
    df = pd.DataFrame(dict)
    df['date'] = pd.to_datetime(df['date'])
    # 인덱스로 설정
    df.set_index('date', inplace=True)
    json2 = to_json2(df)
    return jsonify(json2)

if __name__ == '__main__':
    app.run(host='0.0.0.0',  debug=True)