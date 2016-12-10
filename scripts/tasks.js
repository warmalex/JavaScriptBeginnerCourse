// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
function getFieldValues (s1, s2)
{
	var j;
	var result = [];
	var i;
	for (i = 0; i < 1; i++)
	{
		if (s1[i][s2] > s1[i+1][s2])
		{
			j = s1[i][s2];
			s1[i][s2] = s1[i+1][s2];
			s1[i+1][s2] = j;
		}
	}
	for (i = 0; i < 2; i++)
	{
		result.push(s1[i][s2]);
	} 
	return result;
}
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x)
{ 
    if (x%2 == 0)
	{
		return x;
	}	
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function findSimilarWords(s1, s2)
{
	var r = s1.split(' ');
    var result = [];
    r.forEach(function(elem)
              {
        var a = s2.match(elem);
        if (a != null)
            {
                result.push(a[0]);
            }
    });
    
    return result;
}
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

//var IpAddress = '10.223.98.2';
//var subnetMask = 28;
//console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function makeItClean(s1)
{
	var conS1 = s1[0].concat(s1[1], s1[2]);
	conS1.sort();
	var result = [conS1[0]];
	for ( var i = 1; i < conS1.length; i++)
	{
		if (conS1[i] != conS1[i-1])
		{
			result.push(conS1[i]);
		}
	}
	return result;
}
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];