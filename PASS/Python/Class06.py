print("Sistema para calcular el promedio de un alumno.")
name = input("Para comenzar, ¿Cual es tu nombre?")
print("Ok, " + name + ", Vamos a evaluar tu promedio y si lograste pasar de grado.")
nota_mate = float(input("¿Cual fue tu nota en matemáticas?"))
nota_qui =  float(input("¿Cual fue tu nota en quimica?"))
nota_fisi = float(input("¿Cual fue tu nota en fisíca?"))
promedio =  float(( nota_mate + nota_qui + nota_fisi ) / 3)


if promedio < 10:
    print('Fuentes chato ' + name + ' "¡Pal matadero!", Tu promedio fue : ' , round(promedio,2))
else:
    print('Pasaste mmg' + " Vamo a bebe, tu promedio fue: " , round(promedio,2))

print("Gracias por usar los servicios de Dplay.inc - Teodorow.com all rights reserved ")    
