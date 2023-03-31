from sklearn.linear_model import LinearRegression

# Datos de entrenamiento
X_train = [[1000, 0.05, 1], [2000, 0.07, 1.5], [3000, 0.09, 2], [4000, 0.11, 2], [5000, 0.13, 1.5]]
y_train = [1200, 1800, 2700, 3600, 4500]

# Crear el modelo y ajustar los datos
model = LinearRegression()
model.fit(X_train, y_train)

# Ejemplo de predicción
X_test = [[6000, 0.15, 2]]
y_pred = model.predict(X_test)

print(y_pred)
