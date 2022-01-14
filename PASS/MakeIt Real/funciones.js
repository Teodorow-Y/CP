function asteriscos(str = '') {
	return str.split('').filter(i => i === '*').length;
}

asteriscos('hola*mundo');
