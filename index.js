(function switcher() {
  document.querySelector(".switcher a").addEventListener("click", function (e) {
      e.preventDefault()
      const $inputFrom = document.querySelector("#cityInput1")
      const $inputTo = document.querySelector("#cityInput2")
      const $from = document.querySelector("[data-input='from']")
      const $to = document.querySelector("[data-input='to']")
      const $wrapperFrom = document.querySelector("[data-wrapper='from']")
      const $wrapperTo = document.querySelector("[data-wrapper='to']")
      let input1 = $input1.value
      let input2 = $input2.value
      $inputTo.value = input1
      $inputFrom.value = input2

      input1 = $from.value
      input2 = $to.value
      $from.value = input2
      $to.value = input1

      if($wrapperFrom.classList.contains('conplete')) {
        $wrapperTo.classList.add('complete')
      } else {
        $wrapperTo.classList.remove('complete')
      }

      if($wrapperTo.classList.contains('conplete')) {
        $wrapperFrom.classList.add('complete')
      } else {
        $wrapperFrom.classList.remove('complete')
      }
  })
})();

