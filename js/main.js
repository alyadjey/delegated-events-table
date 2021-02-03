'use strict'
document.addEventListener('DOMContentLoaded', () => {
   function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
   }
   var table = document.querySelector('#main-table')
   var lineSummary = document.querySelector('#lineSummary')
   lineSummary.value = 0
   document.querySelector('.generate').onclick = function () {
      table.innerHTML = ''
      lineSummary.value = 0
      for (var i = 0; i <= 10; i++) {
         var row = document.createElement('div')
         row.className = "row"

         for (var j = 0; j <= 11; j++) {
            var random = getRandomInt(400)
            if (random % 2 != 0) {
               row.innerHTML += `<div class='col-1 odd-cell'><p class="value">${random}</p></div>`
            }
            else {
               row.innerHTML += `<div class='col-1'><p class="value">${random}</p></div>`
            }
         }
         table.innerHTML += row.outerHTML

         document.querySelector('#main-table').addEventListener('click', event => {
            var sum = 0

            if (event.target.className.includes('value')) {
               var childrens = event.target.parentNode.parentNode.childNodes
               for (var children of childrens) {
                  sum += parseInt(children.textContent)
               }
               lineSummary.value = sum
            }
            if (event.target.className.includes('col-1')) {
               var childs = event.target.parentNode.childNodes
               for (var child of childs) {
                  sum += parseInt(child.textContent)
               }
               lineSummary.value = sum
            }
         })
      }
   }
   document.querySelector('.odd').onclick = function () {
      table.classList.toggle('show-odd')
   }
})

