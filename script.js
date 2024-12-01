<script>
// Function to perform calculation based on selected type
    function calculate() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const calculationType = document.querySelector('input[name="calculationType"]:checked').value;
      let result;

      switch (calculationType) {
        case 'percentageOf':
          result = (num2 / 100) * num1;
          break;
        case 'percentOf':
          result = (num1 / num2) * 100;
          break;
        case 'percentageChange':
          result = ((num2 - num1) / num1) * 100;
          break;
      }

      if (calculationType === 'percentageOf') {
        document.getElementById('result').value = result;
      } else {
        document.getElementById('result').value = result + '%';
      }
    }
  </script>
