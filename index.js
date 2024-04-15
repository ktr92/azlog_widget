(function switcher() {
  document.querySelector(".switcher a").addEventListener("click", function (e) {
      e.preventDefault()
      const $inputFrom = document.querySelector("#cityInput1")
      const $inputTo = document.querySelector("#cityInput2")
      const $from = document.querySelector("[data-input='from']")
      const $to = document.querySelector("[data-input='to']")
      const $wrapperFrom = document.querySelector("[data-wrapper='from']")
      const $wrapperTo = document.querySelector("[data-wrapper='to']")
      let input1 = $inputFrom.value
      let input2 = $inputTo.value
      $inputTo.value = input1
      $inputFrom.value = input2

      input1 = $from.value
      input2 = $to.value
      $from.value = input2
      $to.value = input1

      if($wrapperFrom.classList.contains('complete')) {
        if (!$wrapperTo.classList.contains('complete')) {
          $wrapperTo.classList.add('complete')
          $wrapperFrom.classList.remove('complete')
        }
      } else {
        if ($wrapperTo.classList.contains('complete')) {
          $wrapperFrom.classList.add('complete')
          $wrapperTo.classList.remove('complete')
        }
      }

     /*  if($wrapperTo.classList.contains('complete')) {
        if(!$wrapperFrom.classList.contains('complete')) {
          $wrapperFrom.classList.add('complete')
          $wrapperTo.classList.remove('complete')

        }
      }  */
  })
})();

