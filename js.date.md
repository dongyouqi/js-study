# 计算月份

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		// 统计月份
		function countMonth(a , b) {

			var arrA = a.split("-");
			arrB = b.split("-");

			yearA = parseInt(arrA[0]);
			yearB = parseInt(arrB[0]);
			monthA = parseInt(arrA[1]);
			monthB = parseInt(arrB[1]);
			monthA = parseInt(monthA);

			var res = 0;

			if(yearA === yearB && monthA === monthB) {
				return res;
			}

			var diffMonth = Math.abs(monthB - monthA);
			var diffYear = Math.abs(yearA - yearB);

			// B年份 > A年份
			if(yearB > yearA) {

				// B月份 >= A月份
				if(monthB >= monthA) {
					res = diffYear* 12 + diffMonth;
				// B月份 < A月份
				}else if(monthB < monthA) {
					res = diffYear * 12 - diffMonth;
				}
			//  A年份 > B年份
			}else if(yearB < yearA){
				//  A月份 > B月份
				if( monthA >= monthB) {
					res = diffYear * 12 + diffMonth;
				//  A月份 < B月份
				}else{
					res = diffYear * 12 - diffMonth;
				}

			// A年份 = B年份
			}else if( yearA === yearB) {

				res = diffMonth;
			}

			return res;

		}

		var s = countMonth('2017-9', '2018-10');
		var s1 = countMonth('2017-9', '2018-9');
		var s2 = countMonth('2017-9', '2017-9');
		var s3 = countMonth('2018-9', '2017-9');
		var s4 = countMonth('2018-9', '2017-11');
		var s5 = countMonth('2018-9', '2017-8');
		var s6 = countMonth('2017-9', '2018-7');

		console.log(s,s1,s2,s3,s4,s5,s6);
	</script>
</body>
</html>
```
