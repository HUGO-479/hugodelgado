Algoritmo Ejemplo4
	//definiendo variables
	definir can como entero;
	definir pre ,sbt , des, igv , tot como real ;
	definir cat, com como texto;
	//inicializando variables
	escribir "Ingresa la cantidad a comprar:";
	leer can;
	escribir "Ingresa el precio del producto:";
	leer pre;
	escribir "Ingrese la categoria:";
	leer cat;
	escribir "Ingrese el tipo de comprobante[f]FACTURA o [b]Boleta:";
	leer com;
	//realizando operaciones
	sbt=can*pre;
	//condicion
	si(cat="d") Entonces
		des=sbt*0.07;
	SiNo
		des=sbt*0.03;
	FinSi
	
	si (com="f") Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	tot=sbt
	
	escribir "El subtotal es:",sbt;
	escribir "El descuento es:",des;
	escribir "El igv es:",igv;
	escribir"El total es:",tot;
FinAlgoritmo
