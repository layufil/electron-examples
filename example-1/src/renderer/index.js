document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('#node_version').textContent = process.versions.node
  document.querySelector('#chrome_version').textContent = process.versions.chrome
  document.querySelector('#electron_version').textContent = process.versions.electron
})
