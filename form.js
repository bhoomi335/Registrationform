document.getElementById('fullname').addEventListener('input', function() {
            let fullName = this.value.trim();
            let nameParts = fullName.split(' ');

            
            if (nameParts.length >= 1) {
                document.getElementById('firstName').value = nameParts[0];
            }
            if (nameParts.length >= 2) {
                document.getElementById('middleName').value = nameParts[1];
            }
            if (nameParts.length >= 3) {
                document.getElementById('lastName').value = nameParts[2];
            }
        });

         document.getElementById('aadharForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            let aadharValue = document.getElementById('aadhar').value.trim();
            let aadharError = document.getElementById('aadharError');
            
           aadharError.innerHTML = '';
            if (!/^\d{12}$/.test(aadharValue)) {
                aadharError.innerHTML = 'Aadhar number must be exactly 12 digits long and contain only numbers.';
                return false;
            }
            alert('Aadhar number is valid!');
        });

        document.getElementById('validationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting to server
            
            // Clear all previous error messages
            document.getElementById('fullnameError').innerHTML = '';
            document.getElementById('panError').innerHTML = '';
            document.getElementById('mobileError').innerHTML = '';
            document.getElementById('dobError').innerHTML = '';

           
            let fullname = document.getElementById('fullname').value.trim();
            if (!fullname || fullname.split(' ').length < 2) {
                document.getElementById('fullnameError').innerHTML = 'Full Name should contain at least first and last name.';
                return false;
            }

            let pan = document.getElementById('pan').value.trim();
            let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            if (!panRegex.test(pan)) {
                document.getElementById('panError').innerHTML = 'PAN card number must be in the format: ABCDE1234F.';
                return false;
            }

            let mobile = document.getElementById('mobile').value.trim();
            let mobileRegex = /^[7-9][0-9]{9}$/;
            if (!mobileRegex.test(mobile)) {
                document.getElementById('mobileError').innerHTML = 'Mobile number must be 10 digits and start with 7, 8, or 9.';
                return false;
            }

            let dob = new Date(document.getElementById('dob').value);
            let age = new Date().getFullYear() - dob.getFullYear();
            let month = new Date().getMonth() - dob.getMonth();
            if (age < 18 || (age === 18 && month < 0)) {
                document.getElementById('dobError').innerHTML = 'You must be at least 18 years old.';
                return false;
            }

            alert('Form submitted successfully!');
            document.getElementById('validationForm').reset();
        });

         document.getElementById('marksForm').addEventListener('submit', function(event) {
            event.preventDefault();

            let marks = [
                parseInt(document.getElementById('subject1').value, 10),
                parseInt(document.getElementById('subject2').value, 10),
                parseInt(document.getElementById('subject3').value, 10),
                parseInt(document.getElementById('subject4').value, 10),
                parseInt(document.getElementById('subject5').value, 10),
                parseInt(document.getElementById('subject6').value, 10)
            ];

           
            marks.sort((a, b) => b - a);

            
            let bestFiveMarks = marks.slice(0, 5);
            let totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);

           
            let percentage = (totalMarks / 500) * 100; 
            
            document.getElementById('totalMarks').value = totalMarks;
            document.getElementById('percentage').value = percentage.toFixed(2) + '%';
        });