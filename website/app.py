from flask import Flask, render_template, request
import pickle
import numpy as np


app = Flask( __name__)

def prediction(lst):
    filename='model/predictor.pickle'
    with open(filename,'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/',methods=['GET', 'POST'])
def index():
    pred = 0
    if request.method == 'POST':
       ram = request.form.get('ram')
       weight = request.form.get('weight')
       company = request.form.get('company')
       typename = request.form.get('typename')
       opsys = request.form.get('opsys')
       cpuname = request.form.get('cpuname')
       gpuname = request.form.get('gpuname')
       touchscreen = request.form.get('touchscreen')
       ips = request.form.get('ips')

       feature_list =[]
       feature_list.append(int(ram))
       feature_list.append(float(weight)) 
       feature_list.append(1 if touchscreen else 0)
       feature_list.append(1 if ips else 0)

       company_list = ['acer', 'apple', 'asus', 'dell', 'hp', 'lenovo', 'msi', 'toshiba', 'other']
       typename_list = ['2in1convertible','gaming', 'netbook', 'notebook', 'ultrabook', 'workstation']
       opsys_list = ['windows', 'mac', 'linux', 'other']
       cpu_list = ['intelcorei3', 'intelcorei5', 'intelcorei7', 'amd', 'other']
       gpu_list = ['intel', 'amd', 'nvidia']



       def traverse(lst,value):
           for item in lst:
               if item == value:
                   feature_list.append(1)
               else:
                 feature_list.append(0)

       traverse(company_list,company)
       traverse(typename_list,typename)
       traverse(opsys_list,opsys)
       traverse(cpu_list,cpuname)
       traverse(gpu_list,gpuname)

       pred = prediction(feature_list)*219
       pred = np.round(pred[0])


    return render_template("index.html",pred = pred)


if __name__ == '__main__':
    app.run(debug=True)