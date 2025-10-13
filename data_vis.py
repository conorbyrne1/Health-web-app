import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

bar_width = 0.4

def add_labels(x,y):
    for i,j in zip(x, y):
        plt.text(i,j,  j, ha='center', va = 'bottom')

def func(pct, allvals):
    absolute = int(np.round(pct/100.*np.sum(allvals)))
    return f"{pct:.1f}%\n({absolute:d})"

data = pd.read_csv("heart_disease_data_clean.csv")

#data.head()

unhealthy_food_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Veggies'] == 0) & (data['Fruits'] == 0), ['HeartDiseaseorAttack', 'Veggies', 'Fruits']]
fruit_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Fruits'] == 1) & (data['Veggies'] == 0),['HeartDiseaseorAttack','Fruits','Veggies']]
veggie_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Fruits'] == 0) & (data['Veggies'] == 1),['HeartDiseaseorAttack','Fruits','Veggies']]
healthy_food_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Veggies'] == 1) & (data['Fruits'] == 1), ['HeartDiseaseorAttack', 'Veggies', 'Fruits']]

plt.figure(figsize=(8,6))
labels = ['Unhealthy diet', 'Ate just fruit', 'Ate just vegetables', 'Ate both Fruits & Vegetables']
colors = ['tab:red', 'tab:blue', 'tab:orange', 'tab:green']
pie_data =[len(unhealthy_food_attack), len(fruit_attack), len(veggie_attack), len(healthy_food_attack)]
plt.pie(pie_data, autopct=lambda pct: func(pct, pie_data), colors=colors)
plt.legend(labels, loc="best")
plt.xlabel("Types of diet with people who had Heart Disease/Attacks")
#plt.show()

smoker_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Smoker'] == 1) & (data['Stroke'] == 0), ['HeartDiseaseorAttack', 'Smoker', 'Stroke']]
stroke_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Smoker'] == 0) & (data['Stroke'] == 1), ['HeartDiseaseorAttack', 'Smoker', 'Stroke']]
both_smoke_stroke_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Smoker'] == 1) & (data['Stroke'] == 1), ['HeartDiseaseorAttack', 'Smoker', 'Stroke']]
no_smoke_stroke_attack = data.loc[(data['HeartDiseaseorAttack'] == 1) & (data['Smoker'] == 0) & (data['Stroke'] == 0), ['HeartDiseaseorAttack', 'Smoker', 'Stroke']]


plt.figure(figsize=(8,6))
labels = ['Smoker & had a Stroke', 'Just a smoker', 'Just had a stroke', 'Did not smoke or have a stroke']
colors = ['tab:red', 'tab:grey', 'tab:brown', 'tab:green']
pie_data =[len(both_smoke_stroke_attack), len(smoker_attack), len(stroke_attack), len(no_smoke_stroke_attack)]
plt.pie(pie_data, autopct=lambda pct: func(pct, pie_data), colors=colors)
plt.legend(labels, loc="best")
plt.xlabel("People with heart disease/attacks who smoked and or had a stroke")
#plt.show()

unsorted_unique_age = data['Age'].unique()
unique_age = sorted(unsorted_unique_age)
age_attack = data.loc[data['HeartDiseaseorAttack'] == 1, ['Age']]

age_list = []
for age in unique_age:
    age_list.append(age_attack.loc[age_attack['Age'] == age].sum()['Age'])

age_strings = ["1","2","3","4","5","6","7","8","9","10","11","12","13"]
x_axis = np.arange(len(age_strings))


plt.figure(figsize=(8,6))
plt.bar(age_strings, age_list)
add_labels(x_axis, age_list)
plt.xlabel("Amount of heart disease/attacks for each age")
#plt.show()

# only needs 1 or else there will be duplicate figures
plt.show()