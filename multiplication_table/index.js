for(var i = 1 ; i <= 9 ; i++)
{
	var s = '';
	for(var j = 1 ; j <= i ; j++)
	{
		var product = i * j;
		s += `${i}*${j}=${product} `;
	}

	console.log(s);
}
