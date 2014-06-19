document.addEventListener('DOMContentLoaded', function() {
		var texts = document.querySelectorAll('input[type="text"]');
		var submit = document.querySelectorAll('input[type="submit"]')[0];
		var tbody =document.querySelectorAll('table tbody')[0];
		var students = JSON.parse(localStorate.getItem('students')) || [];
		

		students.forEach(drawStudent);

		submit.addEventListener('click', function() {
			
		var student = {
				firstName: text[0].value,
				lastName: text[1].value,
				phoneNumber: text[2].value,
				emailAddress: text[3].value,
			});

			
		function drawStudent(student) {

		var tableRow = '';
			tableRow += '<tr>';
			tableRow += '<td>' + student.firstName + '</td>';
			tableRow += '<td>' + student.lastName + '</td>';
			tableRow += '<td>' + student.phoneNumber + '</d>';
			tableRow += '<td>' + student.emailAddress + '</td>';
			tableRow += '</tr>';

			tbody.innerHTML += tableRow;
			students.push(student);
			localStorage.setItem('students', students)
		});
